// tipo texto - string
// "Isso é um texto";
// "Rodrigo";
// "O tenis nike é composto...";
// "132";
// 'Isso também é um "texto" mesmo com aspas simples'`Usar a crase o JS entende como string`;

//tipo number
// 100; //inteiros - int
// 25.35; //decimais - float

//tipo booleano - boolean - true / false
// true;
// false;

//tipo indefinido - undefined
// undefined;

//tipo nulo - null
// null;

//O que é uma variável?
//Variável é um espaço na memória do computador onde podemos armazenar dados para serem utilizados posteriormente no código.

var meuSobrenome = "Silva"; // nao usamos mais
let caraDaCamisaVinho = "Rodrigo"; //usamos
const altura = 1.9; //usamos
//padrão de escrita chamado CamelCase

console.log(caraDaCamisaVinho);

caraDaCamisaVinho = "Anderson";

console.log(caraDaCamisaVinho);

let temCarro = true;
let isOpen = false;

let profissao = undefined;

const meuNulo = null;

console.log(profissao);
console.log(meuNulo);

// Crie 3 variáveis da sua escolha com let e 3 variáveis da sua escolha com const. Não repetir as minhas variáveis. Depois tente trocar as variaveis com let.. e apresente todos os valores no console.

let meuComputador = "Macbook";
let cargo = "Programador Full-Stack";
let alturaInsano = 42;

const alturaMesa = 0.72;
const cidade = "Fortaleza";
const estaCasado = false;

meuComputador = "Dell";
cargo = "Programador Frontend";
alturaInsano = 45;

console.log(meuComputador);
console.log(cargo);
console.log(alturaInsano);
console.log(alturaMesa);
console.log(cidade);
console.log(estaCasado);

// operações matemáticas

let numero1 = 20;
let numero2 = 10;

let soma = numero1 + numero2;

console.log(soma);

soma = 50;

numero2 = 5;

console.log(soma);

let resultSubtracao = soma - numero2;

console.log(resultSubtracao);

let result3 = 30 * 3;

console.log(result3);

let result4 = 50 / 10;

console.log(result4);

//mod - resto da divisao

let result5 = 10 % 3;

console.log(result5);

//verificando no console os tipos de dados - typeof

console.log(typeof caraDaCamisaVinho);
console.log(typeof altura);
console.log(typeof estaCasado);
console.log(typeof undefined);
console.log(typeof meuNulo);

// faça as cinco operações matemáticas com dois números de sua escolha e apresente os resultados no console. Depois verifique os tipos de dados de cada resultado utilizando o typeof.

let operacao1 = 10 + 20;
let operacao2 = 40 - 2;
let operacao3 = 3 * 50;
let operacao4 = 60 / 3;
let operacao5 = 10 % 2;

console.log(operacao1);
console.log(operacao2);
console.log(operacao3);
console.log(operacao4);
console.log(operacao5);

console.log(typeof operacao1);
console.log(typeof operacao2);
console.log(typeof operacao3);
console.log(typeof operacao4);
console.log(typeof operacao5);

//template string e concatenção

const nome1 = "Rodrigo";
const nome2 = "Anderson";
const nome3 = "Medeiros";
const nome4 = "Bezerra";

const nomeCompleto = nome1 + nome2 + nome3 + nome4;

const nomeCompleto2 = nome1 + " " + nome2 + " " + nome3 + " " + nome4;

const nomeCompleto3 = `Olá! Meu nome completo é ${nome1} ${nome2} ${nome3} ${nome4}`;

console.log(nomeCompleto3);

// crie uma variável, coloque dentro de uma variável usando template string e mostre o resultado no console
