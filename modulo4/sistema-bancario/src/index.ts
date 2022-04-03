import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import {Extrato, Usuario, usuario, Transacoes} from "./data";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req:Request, res:Response) => {
    let codeError= 500;

    try{
        res.status(200).send(usuario);
    }catch(error: any){
        res.status(codeError).send("Ocorreu um erro. Tente novamente mais tarde.");
    };
});


app.get("/users/saldo", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const nome:string= req.body.nome;
        const cpf: string= req.body.cpf;

        const verificacaoDeUsuario: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.nome === nome && obj.cpf === cpf);

        if(!verificacaoDeUsuario.length){
            codeError= 422;
            throw new Error("Nome e Cpf inválidos. Usuário não cadastrado.");

        }else if(verificacaoDeUsuario.length){

            res.status(200).send({saldo: verificacaoDeUsuario[0].saldo});
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.")
        };

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});


app.get("/users/:cpf/saldo", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const cpf: string= req.params.cpf;
        const verificacaoDeUsuario: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.cpf === cpf);  

        if(verificacaoDeUsuario.length){
            res.status(200).send({saldo: verificacaoDeUsuario[0].saldo});

        }else{
            codeError= 422;
            throw new Error("Saldo diferente do que foi cadastrado no sistema.");
        }

    }catch(error: any){
        res.status(codeError).send(error.message);
    }
});


app.put("/users/saldo/deposito", (req:Request, res:Response) => {
    let codeError= 400;

    try{

        const nome:string= req.body.nome;
        const cpf: string= req.body.cpf;
        const saldo: number= req.body.saldo;

        const dataAtual= new Date();
        const dia: string= `${dataAtual.getDate()}`;
        const mes: string= `${dataAtual.getMonth() + 1}`;
        const ano: string= `${dataAtual.getFullYear()}`;

        const verificacaoDeUsuario: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.nome === nome && obj.cpf === cpf);

        if(!verificacaoDeUsuario.length){
            codeError= 422;
            throw new Error("Nome e Cpf inválidos. Usuário não cadastrado.");

        }else if(verificacaoDeUsuario.length){
            const diaFormatacao: string= dia.toString().length === 1? `0${dia}` : `${dia}`;
            const mesFormatacao: string= mes.toString().length === 1? `0${mes}` : `${mes}`;
            const dataFormatacao: string= `${diaFormatacao}/${mesFormatacao}/${ano}`;

            verificacaoDeUsuario[0].extrato.push({valor:saldo, data:dataFormatacao, descricao:"Depósito de dinheiro"});
            
            res.status(200).send({...verificacaoDeUsuario[0], saldo: verificacaoDeUsuario[0].saldo + saldo});
            
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.")
        };

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});

app.put("/users/saldo/atualizar", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const nome:string= req.body.nome;
        const dataAtual= new Date();
        const verificacaoDeUsuario: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.nome === nome);

        const atualizandoSaldo: string[] = verificacaoDeUsuario[0].extrato[0].data.split("/");
        const diaAtualizandoSaldo: number= +atualizandoSaldo[0];
        const mesAtualizandoSaldo: number= +atualizandoSaldo[1];
        const anoAtualizandoSaldo: number= +atualizandoSaldo[2];

        const eMenor: boolean= new Date(`${anoAtualizandoSaldo}-${mesAtualizandoSaldo}-${diaAtualizandoSaldo +1}`) < dataAtual;
        const eMaior: boolean= new Date(`${anoAtualizandoSaldo}-${mesAtualizandoSaldo}-${diaAtualizandoSaldo + 1}`) > dataAtual;

        if(!verificacaoDeUsuario.length){
            codeError= 422;
            throw new Error("Nome e Cpf inválidos. Usuário não cadastrado.");

        }else if(eMenor){
            const valorAtualizado: number= verificacaoDeUsuario[0].saldo - verificacaoDeUsuario[0].extrato[0].valor;

            verificacaoDeUsuario[0].saldo= valorAtualizado;
                
            res.status(200).send({...verificacaoDeUsuario[0]});

        }else if(eMaior){
            codeError= 422;
            throw new Error("Data da conta recente.");

        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.");
        };

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});

app.post("/users", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const nome: string= req.body.nome;
        const cpf: string= req.body.cpf;

        const dataAtual= new Date().getTime();
        const nascimentoArray: string[] = req.body.nascimento.split("/");
        const diaDoNascimento: number= +nascimentoArray[0];
        const mesDoNascimento: number= +nascimentoArray[1];
        const anoDoNascimento: number= +nascimentoArray[2];
        const nascimentoTimestamp:number= new Date(anoDoNascimento, mesDoNascimento - 1,  diaDoNascimento + 4).getTime();

        const idade: number= dataAtual - nascimentoTimestamp;
        const verificacaoDeCpf: Usuario[]= usuario.filter((obj:Usuario): boolean => obj.cpf === cpf);

        if(idade < 5.676e+11){
            codeError= 422;
            throw new Error("Idade inferior a 18 anos.");

        }else if(verificacaoDeCpf.length){
            codeError= 422;
            throw new Error("Cpf inválido. Este cpf já foi cadastrado.");

        }else if(idade >= 5.676e+11 && !verificacaoDeCpf.length){
            const diaFormatacao: string= diaDoNascimento.toString().length === 1? `0${diaDoNascimento}` : `${diaDoNascimento}`;
            const mesFormatacao: string= mesDoNascimento.toString().length === 1? `0${mesDoNascimento}` : `${mesDoNascimento}`;
            
            const novoUsuario: Usuario= {
                nome:nome,
                cpf:cpf,
                nascimento:`${diaFormatacao}/${mesFormatacao}/${anoDoNascimento}`,
                saldo:0,
                extrato:[{valor:0, data:"", descricao:""}],
            };

            usuario.push(novoUsuario);
            res.status(201).send(usuario);

        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.")
        }
    }catch(error: any){
        res.status(codeError).send(error.message);
    }
});

app.post("/users/:nome/pagarconta", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const nome: string= req.params.nome;
        const valor: number= req.body.valor;
        const data: string= req.body.data;
        const descricao: string= req.body.descricao;
        let saldoMaiorQueValor: any;
        let saldoMenorQueValor: any;

        usuario.forEach((obj:Usuario): void => {
            if(obj.nome === nome && obj.saldo >= obj.extrato[0].valor){
                saldoMaiorQueValor= true;
                return;
            }else{
                saldoMenorQueValor= false;
            }
        });

        const dataUsuario: string[]= data.split("/");
        const diaUsuario: string= `${dataUsuario[0]}`;
        const mesUsuario: string= `${dataUsuario[1]}`;
        const anoUsuario: string= `${dataUsuario[2]}`;

        const dataAtual= new Date();
        const dia: string= `${dataAtual.getDate()}`;
        const mes: string= `${dataAtual.getMonth() + 1}`;
        const ano: string= `${dataAtual.getFullYear()}`;

        const dataAgendamento: string[] = data.split("/");
        const diaAgendamento: number= +dataAgendamento[0];
        const mesAgendamento: number= +dataAgendamento[1];
        const anoAgendamento: number= +dataAgendamento[2];
        
        const eMenor: boolean= new Date(`${anoAgendamento}-${mesAgendamento}-${diaAgendamento +1}`) < dataAtual;

        if(!data && saldoMaiorQueValor){
            codeError= 201;

            const agendamento: Usuario[]= usuario.map((obj:Usuario): Usuario => {
                if(obj.nome === nome){
                    const diaFormatacao: string= dia.length === 1? `0${dia}`: dia;
                    const mesFormatacao: string= mes.length === 1? `0${mes}`: mes;
                    
                    obj.extrato.push({valor, data:`${diaFormatacao}/${mesFormatacao}/${ano}`, descricao});
                }
                return obj;
            });

            res.status(codeError).send(agendamento);

        }else if(eMenor){
            codeError= 422;
            throw new Error("Data inválida. Não é possível agendar um pagamento de uma data no passado.");

        }else if(data && saldoMaiorQueValor){
            codeError= 201;

            const novoAgendamento: Usuario[]= usuario.map((obj:Usuario): Usuario => {
                if(obj.nome === nome){
                    const novoDiaFormatacao: string= diaUsuario.length === 1? `0${diaUsuario}`: diaUsuario;
                    const novoMesFormatacao: string= mesUsuario.length === 1? `0${mesUsuario}`: mesUsuario;
                    
                    obj.saldo -= valor;
                    obj.extrato.push({valor, data:`${novoDiaFormatacao}/${novoMesFormatacao}/${ano}`, descricao});
                }
                return obj;
            });

            res.status(codeError).send(novoAgendamento);

        }else if(!saldoMenorQueValor){
            codeError= 422;
            throw new Error("Saldo insuficiente para quitar a dívida. Faça um empréstimo.");
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.");
        }

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});


app.post("/users/:nome/transferencia", (req:Request, res:Response) => {
    let codeError= 400;

    try{

        const nomeRemetente:string= req.body.remetente;
        const cpfRemetente: string= req.body.cpfRemetente;
        const nomeDestinatario:string= req.body.destinatario;
        const cpfDestinatario: string= req.body.cpfDestinatario;
        const valorTransacao: number= req.body.valorTransacao;

        const filtrarSaldo: Usuario[]= usuario.filter((obj:Usuario): boolean => {
            if(obj.saldo >= valorTransacao){
                return true;
            };
            return false;
        });

        const filtrarUsuario: Usuario[]= usuario.filter((obj:Usuario): boolean => {
            if(obj.nome === nomeRemetente){
                return true;
            };
            return false;
        });

        const filtrarDestinatario: Usuario[]= usuario.filter((obj:Usuario): boolean => {
            if(obj.nome === nomeDestinatario){
                return true;
            };
            return false;
        });

        if(!filtrarSaldo.length){
            codeError= 422;
            throw new Error("Saldo insuficiente para fazer a tranferência.");

        }else if(filtrarSaldo.length && filtrarDestinatario.length && filtrarUsuario.length){

            const transacoes: Transacoes={
                remetente:nomeRemetente,
                cpfRemetente:cpfRemetente,
                destinatario:nomeDestinatario,
                cpfDestinatario:cpfDestinatario,
                valorTransacao:valorTransacao,
            };

            usuario.forEach((obj:Usuario, index:number): void => {
                
                if(obj.saldo >= valorTransacao){
                    if(obj.nome === nomeRemetente){
                        obj.saldo -= valorTransacao;
                        obj.extrato.push({...obj.extrato[index], transacoes:[transacoes]});
                    };
    
                    if(obj.nome === nomeDestinatario){
                        obj.saldo += valorTransacao;
                        obj.extrato.push({...obj.extrato[index], transacoes:[transacoes]});
                    };
                }else{
                    codeError= 422;
                    throw new Error("Saldo insuficiente para fazer a tranferência.");
                }

            });

            res.status(201).send(usuario);

        }else if(!filtrarDestinatario.length || !filtrarUsuario.length){
            codeError= 422;
            throw new Error("Remetente ou destinatário não são cadastrados no banco.");

        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.");
        }

    }catch(error: any){
        res.status(codeError).send(error.message);
    }
});

app.post("/users/:cpf/paguesuascontas", (req:Request, res:Response) => {
    let codeError= 400;

    try{
        const cpf: string= req.params.cpf;
        const valor: number= req.body.valor;
        const data: string= req.body.data;
        const descricao: string= req.body.descricao;
        let saldoMaiorQueValor: any;
        let saldoMenorQueValor: any;

        usuario.forEach((obj:Usuario): void => {
            if(obj.cpf === cpf && obj.saldo >= obj.extrato[0].valor){
                saldoMaiorQueValor= true;
                return;
            }else{
                saldoMenorQueValor= false;
            }
        });

        const dataUsuario: string[]= data.split("/");
        const diaUsuario: string= `${dataUsuario[0]}`;
        const mesUsuario: string= `${dataUsuario[1]}`;
        const anoUsuario: string= `${dataUsuario[2]}`;

        const dataAtual= new Date();
        const dia: string= `${dataAtual.getDate()}`;
        const mes: string= `${dataAtual.getMonth() + 1}`;
        const ano: string= `${dataAtual.getFullYear()}`;

        const dataAtualTimestamp= new Date().getTime();
        const dataAgendamento: string[] = data.split("/");
        const diaAgendamento: number= +dataAgendamento[0];
        const mesAgendamento: number= +dataAgendamento[1];
        const anoAgendamento: number= +dataAgendamento[2];
        const dataAgendamentoTimestamp: number= new Date(anoAgendamento, mesAgendamento -1, diaAgendamento).getTime();
        
        if(!data && saldoMaiorQueValor){
            codeError= 201;

            const agendamento: Usuario[]= usuario.map((obj:Usuario): Usuario => {
                if(obj.cpf === cpf){
                    const diaFormatacao: string= dia.length === 1? `0${dia}`: dia;
                    const mesFormatacao: string= mes.length === 1? `0${mes}`: mes;
                    
                    obj.extrato.push({valor, data:`${diaFormatacao}/${mesFormatacao}/${ano}`, descricao});
                }
                return obj;
            });

            res.status(codeError).send(agendamento);

        }else if(dataAgendamentoTimestamp < dataAtualTimestamp){
            codeError= 422;
            throw new Error("Data inválida. Não é possível agendar um pagamento de uma data no passado.");

        }else if(data && saldoMaiorQueValor){
            codeError= 201;

            const novoAgendamento: Usuario[]= usuario.map((obj:Usuario): Usuario => {
                if(obj.cpf === cpf){
                    const novoDiaFormatacao: string= diaUsuario.length === 1? `0${diaUsuario}`: diaUsuario;
                    const novoMesFormatacao: string= mesUsuario.length === 1? `0${mesUsuario}`: mesUsuario;
                    
                    obj.extrato.push({valor, data:`${novoDiaFormatacao}/${novoMesFormatacao}/${ano}`, descricao});
                }
                return obj;
            });

            res.status(codeError).send(novoAgendamento);

        }else if(!saldoMenorQueValor){
            codeError= 422;
            throw new Error("Saldo insuficiente para quitar a dívida. Faça um empréstimo.");
        }else{
            codeError= 500;
            throw new Error("Ocorreu um erro. Tente novamente mais tarde.");
        }

    }catch(error: any){
        res.status(codeError).send(error.message);
    };
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});