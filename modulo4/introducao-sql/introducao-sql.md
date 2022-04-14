# Exercício 1

a) id - VARCHAR(255) PRIMARY KEY= Representa uma string, com até 255 caracteres. E "PRIMARY KEY" é o seu identificador dessa linha.
name - VARCHAR (255) NOT NULL= Representa uma string, com até 255 caracteres. E é obrigatório.
salary FLOAT NOT NULL= Número não inteiro. E é obrigatório.
birth_date - DATE NOT NULL = O seu valor é do tipo data, representado por uma string "ano-mês-dia". E é obrigatório.
gender VARCHAR(6) NOT NULL = Representa uma string, com até 6 caracteres. E é obrigatório.

b) Em `SHOW DATABASES` mostrou o nome do meu Banco de Dados.
Em `SHOW TABLES` mostrou as tabelas que eu havia criado.

c) Ele mostra todas as informações que você usou para poder criar as tabelas. Através desse comando você consegue observar as tipagens, o número de caracteres, se é opcional ou não.

# Exercício 2

b) Tradução: Código de erro: 1062. Entrada duplicada '4' para a chave 'PRIMARY'.
Pois já existia na tabela, uma chave 'PRIMARIA' com esse valor. 

c) Tradução: Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1. Pois faltavam parâmetros, para poder inserir esses dados na tabela.
Para que possa ser inserido esses dados na tabela, basta adicionar os parâmetros: "birth_date, gender".  

d) Traduçâo: Código de erro: 1364. O campo 'nome' não tem um valor padrão. Falta adicionar nome, para que esses dados sejam adicionados na tabela.

e) Tradução: Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
Faltaram as aspas duplas.


# Exercício 3

a) SELECT * FROM Actor WHERE gender = "female";
b) SELECT salary FROM Actor WHERE name = "Tony Ramos";
c) Retorna uma linha vazia. Em gender o valor que aparece é null, pois não foi possível achar "invalid";
d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;
e) Tradução: Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'. Pois nome não existe, o certo é name;

# Exercício 4

a) Ela busca por nomes cujos as primeiras letras começam com A ou J, e salários superiores a 300000.
b) SELECT name FROM Actor WHERE name NOT LIKE "a%" AND salary > 350000;
c) SELECT name FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
d) SELECT name FROM Actor WHERE (name LIKE "%a%" or name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN  350000 AND 900000;

# Exercício 5

a) CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamneto DATE NOT NULL,
    avaliacao INT NOT NULL
); 

id - VARCHAR(255) PRIMARY KEY= Representa uma string, com até 255 caracteres. E "PRIMARY KEY" é o seu identificador dessa linha.
nome - VARCHAR (255) NOT NULL= Representa uma string, com até 255 caracteres. E é obrigatório.
sinopse TEXT NOT NULL = É uma string mais longa. E é obrigatorio.
data_de_lancamneto - DATE NOT NULL = O seu valor é do tipo data, representado por uma string "ano-mês-dia". E é obrigatório.
avaliacao INT = O seu valor é um número inteiro. E é obrigatorio. 

b/c/d/e) 

INSERT INTO Filmes (id, nome, sinopse, data_de_lancamneto, avaliacao)
values	("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7),
		("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
		("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
        ("004", "Tropa de Elite", "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.", "2007-10-05", 10);


# Exercício 6

a) SELECT id, nome, avaliacao FROM Filmes WHERE id = "004";
b) SELECT * FROM Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";
c) SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;


# Exercício 7

a) SELECT * FROM Filmes WHERE nome LIKE "%vida%";
b) SELECT 	* FROM Filmes WHERE nome LIKE "%vida%" OR sinopse LIKE "%vida%";
c) SELECT 	* FROM Filmes WHERE data_de_lancamneto < "2022-04-04";
d) SELECT 	* FROM Filmes WHERE data_de_lancamneto < "2022-04-04" AND (nome LIKE "%vida%" OR sinopse LIKE "%vida%") AND avaliacao > 7;