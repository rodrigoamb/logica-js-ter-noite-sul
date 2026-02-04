const pessoa = {
  nome: "João",
  idade: 30,
  trabalha: true,
  altura: 1.7,

  apresentacao() {
    console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade}`);
  },
};

const pessoa2 = {
  nome: "Maria",
  idade: 28,
  trabalha: true,
  altura: 1.5,

  apresentacao() {
    console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade}`);
  },

  fazerAniversario() {
    this.idade++;
  },
};

//acessar o valor da propriedade em um objeto

console.log(pessoa.altura);
console.log(pessoa.nome);

// criando nova propriedade

pessoa.cargo = "Empresário";

// editando propriedade

pessoa.idade = 31;

// excluir propriedade

delete pessoa.trabalha;

pessoa.apresentacao();
pessoa2.apresentacao();

pessoa2.fazerAniversario();
console.log(pessoa2);

// exercicio caixa eletronico

const caixaEletronico = {
  saldo: 1000,

  depositar(valor) {
    this.saldo = this.saldo + valor;
    return `Valor depositado: R$${valor},00 | Novo saldo: R$${this.saldo},00`;
  },

  sacar(valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente";
    } else {
      this.saldo = this.saldo - valor;
      return `Valor sacado: R$${valor},00 | Novo saldo: R$${this.saldo},00`;
    }
  },

  mostrarSaldo() {
    return `Seu saldo é: R$${this.saldo},00`;
  },
};

console.log(caixaEletronico.depositar(500));
console.log(caixaEletronico.sacar(200));
console.log(caixaEletronico.mostrarSaldo());

console.log(caixaEletronico.depositar(1500));

console.log(caixaEletronico.sacar(3000));

//classe (Class)

class ContaBancária {
  constructor(cliente, cpf, saldo, tipo, agencia, conta) {
    ((this.cliente = cliente),
      (this.cpf = cpf),
      (this.saldo = saldo),
      (this.tipo = tipo),
      (this.agencia = agencia),
      (this.conta = conta));
  }

  sacar(valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente";
    } else {
      this.saldo = this.saldo - valor;
      return `Valor sacado: R$${valor},00 | Novo saldo: R$${this.saldo},00`;
    }
  }

  depositar(valor) {
    this.saldo += valor;
    return `Valor depositado: R$${valor},00 | Novo saldo: R$${this.saldo},00`;
  }

  mostrarSaldo() {
    return `Seu saldo é: R$${this.saldo},00`;
  }
}

const conta1 = new ContaBancária(
  "Carlos",
  "9384758344-41",
  1000,
  "Conta Corrente",
  "0926",
  "77643-9",
);

const conta2 = new ContaBancária(
  "Joana",
  "9384234238344-41",
  3000,
  "Conta Polpança",
  "0926",
  "73443-9",
);

console.log(conta1);
console.log(conta2);

// crie uma class Carro

class Carro {
  constructor(modelo, marca, estaLigado, km) {
    ((this.modelo = modelo),
      (this.marca = marca),
      (this.estaLigado = estaLigado),
      (this.km = km));
  }

  ligar() {
    if (this.estaLigado) {
      return "O carro já está ligado";
    } else {
      this.estaLigado = true;
      return "Você ligou o carro";
    }
  }

  dirigir(kmRodado) {
    this.km += kmRodado;
    return this.km;
  }
}

const opala = new Carro("Opala", "Chevrolet", false, 22000);

console.log(opala.ligar());
console.log(opala.dirigir(3000));

const estoque = [
  {
    produto: "Leite Ninho",
    estoque: 20,
    preco: 30,
  },
  {
    produto: "Passatempo",
    estoque: 10,
    preco: 3,
  },
  {
    produto: "Detergente",
    estoque: 13,
    preco: 7,
  },
];

//faça uma class Caixa que:
//caixa tem o saldo, valorFinalCompra .. venda(produto,quant)
// caixa informa o valor final da compra
// tem que dar a saida do produto no estoque

class Caixa {
  constructor(saldo) {
    this.saldo = saldo;
    this.valorFinalCompra = 0;
  }

  venda(produto, quantidade) {
    const item = estoque.find((item) => item.produto === produto);
    if (!item) {
      return "Produto não encontrado no estoque";
    }
    if (item.estoque < quantidade) {
      return "Estoque insuficiente";
    }

    const valorCompra = item.preco * quantidade;
    this.valorFinalCompra += valorCompra;
    item.estoque -= quantidade;
    this.saldo += valorCompra;

    return `Venda realizada: ${quantidade} x ${produto} | Valor da compra: R$${valorCompra},00 | Novo saldo do caixa: R$${this.saldo},00`;
  }
}

const caixaLoja = new Caixa(200);

console.log(caixaLoja.venda("Leite Ninho", 2));
console.log(caixaLoja.venda("Passatempo", 5));
console.log(caixaLoja.venda("Detergente", 15));

console.log(estoque);
console.log(caixaLoja);
