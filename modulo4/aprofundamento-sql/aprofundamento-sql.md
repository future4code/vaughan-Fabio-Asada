# Exercício 1

a) ALTER TABLE Actor DROP COLUMN salary;
Irá alterar a tabela Actor, tirando a coluna salary;

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Irá modificar a tabela Actor, mudando o título da coluna gender, para sex. Essa coluna irá receber strings com até 6 caracteres;

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Irá modificar a tabela Actor, aqui o título será mantido. Essa coluna irá receber strings com até 255 caracteres;

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercício 2

a) UPDATE Actor SET name = "Moacyr Franco" , birth_date = "1966-05-03" WHERE id = "3";
b)  SELECT UPPER (name) FROM Actor WHERE id = "8";
    SELECT LOWER (name) FROM Actor WHERE id = "8";

c) UPDATE Actor SET name = "Seltom Melo", salary = 100000, birth_date= "1984-03-15", gender = "male" WHERE id = "5";

d) UPDATE Actor SET name = "Rodrigo Faro" WHERE id = "25";
0 linha(s) afetada(s) Linha(s) correspondida(s): 0 Alterado: 0 Avisos: 0. 
Engraçado é que não dá erro, mas ao mesmo tempo o sql não encontra esse id.

# Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

# Exercício 4

a) SELECT MAX(salary) FROM Actor;
b) SELECT MIN(salary) FROM Actor;
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) SELECT SUM(salary) FROM Actor;


# Exercício 5

a) Dentro da coluna gender, foi feito uma contagem e divididos em grupos diferentes. De acordo com seu gênero.
b) SELECT id, name FROM Actor ORDER BY name DESC;
c) SELECT name FROM Actor ORDER BY salary ASC;
d) SELECT name FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary) FROM Actor GROUP BY gender;


# Exercício 6

a) ALTER TABLE Filmes ADD playing_limit_date VARCHAR(255) NOT NULL;
b) ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT NOT NULL;
C) UPDATE Filmes SET playing_limit_date = "2022-05-25" WHERE id = "001"; 
UPDATE Filmes SET playing_limit_date = "2015-10-13" WHERE id = "002";
d) DELETE FROM Filmes WHERE id = "003";
UPDATE Filmes SET sinopse = "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce." WHERE id = "003";
Não mostra erro, mas também não funciona a atualizaçâo. Pois o programa não encontra essa linha.

# Exercício 7

a) SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5;
b) SELECT AVG(avaliacao) FROM Filmes;
C) SELECT COUNT(*) FROM Filmes WHERE playing_limit_date > CURDATE();
d) SELECT COUNT(*) FROM Filmes WHERE data_de_lancamneto > CURDATE();
e) SELECT MAX(avaliacao) FROM Filmes;
f) SELECT MIN(avaliacao) FROM Filmes;


# Exercício 8

a) SELECT * FROM Filmes ORDER BY nome ASC;
b) SELECT * FROM Filmes ORDER BY nome DESC LIMIT 5;
c) SELECT * FROM Filmes WHERE data_de_lancamneto < CURDATE() ORDER BY data_de_lancamneto DESC LIMIT 3;
d) SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 3;