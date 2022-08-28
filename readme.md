# Gerador de duplas

## Por quê esse gerador é bom?
Esse gerador de duplas conta com **estrutura dos dados desaclopados do arquivo principal**, o que **facilita a manutenção do código.**
Além disso, possui funcionalidades que resultam em:
* Adicionar novas equipes, sem restrição da quantidade de alunos que devem ser inseridos nas equipes, em ciclos já existentes;
* Adicionar novos ciclos com equipes de alunos, sem restrição da quantidade de equipes, e da quantidades de alunos nas equipes;
* Remover equipes dos ciclos existentes;
* Remover alunos das equipes dos ciclos existentes;

## Quais são suas limitações?
* As funcionalidades de adição e remoção, tanto de alunos quanto de equipes, teriam que ser implementadas posteriormente, pois foi pedido para que fosse gerado as novas duplas, somente;
* Não existe uma verificação caso o aluno não tenha um outro aluno válido para se formar o par;
  >A funcionalidade para formação de pares válidos está explicada nas funcionalidades do programa. 

## Funcionalidades do programa

### services/database/students.js
Nesse arquivo, tem os dados originais disponibilizados. Com esses dados, foram implementadas as seguintes funções:

1. **getAllStudents()**
* **Definição:** Nessa função, retorna um único array com os nomes dos estudantes que participaram dos ciclos sem duplicação;
* **Processo feito:** Dos dados originais é feito um processo para unificar em um único array de strings. Com isso, o array lista os nomes de cima para baixo, dos 1° e 2° ciclos, respectivamente, duplicados caso o estudante tenha participado dos dois ciclos. Esse array é mandado para uma filtragem onde é retirado os nomes duplicados, gerando o resultado final esperado, que é um único array com nomes sem duplicação.
2. **getAllTeams()**
* **Definição:** Nessa função, retorna um único array das equipes que participaram dos ciclos;
* **Processo feito:** Dos dados originais, ao invés de unificar em um único array de strings, a unificação só é feita para gerar uma matriz, pois com essa matriz se dá os times que já se foram formados em outros ciclos.

### js/setStatusPairs.js
Nesse arquivo, são criados os possíveis estados que uma pessoa pode assumir se comparado ao estudantes selecionado, que são: **par inválido e par válido.**

1. **setInvalidPairs(allTeams, selected)**
* **Definição:** Nessa função, retorna um array de pares inválidos para o estudante selecionado para verificação;
* **Paramêtros esperados:**
1. ***allTeams:*** **Array** dos times que já participaram dos ciclos;
2. ***selected:*** **String** do estudante selecionado para verificação;

* **Processo feito:** Com o array dos estudantes, é gerado dois filtros, em que no primeiro é filtrado as equipes em que o estudante selecionado participou, e no segundo é retirado seu nome dos ciclos, para assim, listar os nomes dos estudantes que já foram das suas equipes, sendo assim, seus pares inválidos.

2. **setValidPairs(allStudents, selected, invalidPairsForTheStudentSelected)**
* **Definição:** Nessa função, retorna um array de pares válidos para o estudante selecionado para verificação;
* **Paramêtros esperados:**
1. ***allStudents:*** **Array** de todos os estudantes que participaram dos ciclos;
2. ***selected:*** **String** do estudante selecionado para verificação;
3. ***invalidPairsForTheStudentSelected:*** **Array** dos pares inválidos em relação ao estudante selecionado para verificação;

* **Processo feito:** Com o array de todos os estudantes é feito um filtro para retornar os nomes daqueles que não são pares inválidos e que não é o próprio estudante selecionado para verificação.

### js/prioritySequence.js

1. **prioritySequenceTopToDown(allStudents, allTeams)**
* **Definição:** Nessa função, retorna um array dos estudantes em ordem decrescente de prioridade;
* **Paramêtros esperados:**
1. ***allStudents:*** **Array** de todos os estudantes;
2. ***allTeams:*** **Array** das equipes;

* **Processo feito:** O array de todos os estudantes é percorrido, onde é verificado do estudante atual e do próximo seus pares inválidos, e o estudante que obtiver o maior número de pares inválidos é colocado como prioridade na lista, para diminuir as chances desse estudante ficar sem dupla válida.

>Nesse arquivo é gerado a primeira lista com ordem de prioridade, e setado o primeiro aluno da lista, que será usado no arquivo main.

### js/main.js

Nesse arquivo se gera as duplas, com as funções dos outros arquivos. Essas duplas são geradas em uma função recursiva, que percorre a lista de todos os estudantes. A função está explicada abaixo:

### setPairs(allStudents, selected, allTeams)

* **Paramêtros esperados:**
1. ***allStudents:*** **Array** de todos os estudantes;
2. ***selected:*** **String** do estudante selecionado para verificação;
3. ***allTeams:*** **Array** das equipes;

* **Processo feito:** 
- [x] O fluxo se inicia definindo os pares inválidos e válidos do estudante selecionado para verificação;
- [x] É gerado um par aleatório para o estudante selecionado do Array de pares válidos;
- [x] Um array de pares é alimentado com o estudante selecionado, e seu par;
- [x] É gerado um novo array de estudantes, retirando o nome do estudante selecionado para verificação e seu par;
- [x] É gerado um novo array de times, retirando o nome do estudante selecionado para verificação e seu par dos times e deixando seus companheiros;
- [x] É gerado uma nova ordem de prioridade com os estudantes que ainda não foram verificados e que não foram selecionado para ser par do estudante selecionado;
- [x] É definido o novo estudante selecionado, que é o primeiro na ordem de prioridade;
- [x] É repetido esse processo até não sobrar estudantes para verificação;
- [x] Se o número de alunos totais for ímpar, é enviado também o estudante restante que ficou sem par.