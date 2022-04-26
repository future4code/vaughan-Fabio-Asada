### Exercício 1

a)O round representa o cost, que se refere a segurança da senha. Quanto maior o seu número, maior é sua segurança. O salt é um conjunto de caracteres aleatórios, que são acoplados juntos a senha. Então quando duas pessoas decidem criar a mesma senha, o hash gerado será sempre diferente. Os valores recomendados para o cost é o número 12. Porque é o padrão na maioria das bibliotecas.

### Exercício 2

a)Para que possa funcionar corretamente, primeiro deve-se modificar o endpoint de cadastro. Pois é apartir dele é que será guardada a senha no banco de dados.


d) Acredito que não. Porque neste endpoint, foi feito uma verificação de token, ou seja, o usuário conseguiu se logar e passar pela verificação de senha.
