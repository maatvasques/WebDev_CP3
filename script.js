
const produtos = [
    { nome: 'Camiseta Algodão', preco: 30.99, categoria: 'Vestuário', disponibilidade: true },
    { nome: 'Calça Jeans', preco: 79.50, categoria: 'Vestuário', disponibilidade: false },
    { nome: 'Blusa Moletom', preco: 65.00, categoria: 'Vestuário', disponibilidade: true },
    { nome: 'Camisa do melhor time do Brasil (SP)', preco: 100.00, categoria: 'Vestuário', disponibilidade: false },
    { nome: 'Tênis de corrida Adidas', preco: 200.00, categoria: 'Calçados', disponibilidade: true },
    { nome: 'Sandália Feminina', preco: 299.00, categoria: 'Calçados', disponibilidade: true },
    { nome: 'Chuteira Nike', preco: 195.00, categoria: 'Calçados', disponibilidade: false },
    { nome: 'Nike Panda', preco: 420.00, categoria: 'Calçados', disponibilidade: true },
    { nome: 'Harry Potter: O cálice de fogo', preco: 19.90, categoria: 'Livros', disponibilidade: true },
    { nome: 'Shadow Slave', preco: 39.99, categoria: 'Livros', disponibilidade: false },
    { nome: 'Lord of the Mysteries', preco: 50.00, categoria: 'Livros', disponibilidade: true },
    { nome: 'Percy Jackson: Ladrão de raios', preco: 99.99, categoria: 'Livros', disponibilidade: true },
    { nome: 'Caderno sem Borda', preco: 20.50, categoria: 'Papelaria', disponibilidade: false },
    { nome: 'Caneta Tinta Invisivel', preco: 1.20, categoria: 'Papelaria', disponibilidade: true },
    { nome: 'Régua 30cm', preco: 9.99, categoria: 'Papelaria', disponibilidade: true },
    { nome: 'Corretivo de Fita', preco: 9.99, categoria: 'Papelaria', disponibilidade: true },
    { nome: 'Mochila Grande', preco: 99.99, categoria: 'Acessórios', disponibilidade: true },
    { nome: 'Boné Aba Reta', preco: 55.00, categoria: 'Acessórios', disponibilidade: false },
    { nome: 'Carteira Prada', preco: 1999.99, categoria: 'Acessórios', disponibilidade: true },
    { nome: 'Bolsa Gucci', preco: 999.99, categoria: 'Acessórios', disponibilidade: true }
];

const listaProdutos = document.getElementById('listaProdutos');
const Categoria = document.getElementById('Categoria');
const Disponibilidade = document.getElementById('Disponibilidade');
const botaoFiltrar = document.getElementById('filtrar');
const botaoListarTodos = document.getElementById('listarTodos');
const botaoOrdenarPreco = document.getElementById('ordenarPreco');
let produtosVisiveis = [...produtos];
let ordemCrescente = true;


function exibirProduto(produto) {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto');
    produtoDiv.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      <p>Categoria: ${produto.categoria}</p>
      <p>Disponibilidade: ${produto.disponibilidade ? 'Disponível' : 'Indisponível'}</p>
    `;

    produtoDiv.addEventListener('mouseover', () => {
        produtoDiv.style.border = '2px solid #00FF85';
        produtoDiv.style.backgroundColor = '#000000';
    });

    produtoDiv.addEventListener('mouseout', () => {
        produtoDiv.style.border = '';
        produtoDiv.style.backgroundColor = '';
    });

    listaProdutos.append(produtoDiv);
}


function listarTodosProdutos() {
    listaProdutos.innerHTML = '';
    produtosVisiveis = [...produtos];
    produtosVisiveis.forEach(exibirProduto);
    ordemCrescente = true;
    atualizarTextoBotaoOrdenar();
}


function filtrarProdutos() {
    listaProdutos.innerHTML = '';
    const categoriaSelecionada = Categoria.value;
    const somenteDisponiveis = Disponibilidade.checked;
    produtosVisiveis = produtos.filter(produto =>
        (categoriaSelecionada === 'todos' || produto.categoria === categoriaSelecionada) &&
        (!somenteDisponiveis || produto.disponibilidade)
    );
    produtosVisiveis.forEach(exibirProduto);
}
ordemCrescente = true;
atualizarTextoBotaoOrdenar();


function ordenarPorPreco() {
    listaProdutos.innerHTML = '';
    produtosVisiveis.sort((a, b) => {
        return ordemCrescente ? a.preco - b.preco : b.preco - a.preco;
    });
    produtosVisiveis.forEach(exibirProduto);
    ordemCrescente = !ordemCrescente;
    atualizarTextoBotaoOrdenar();
}

function atualizarTextoBotaoOrdenar() {
    botaoOrdenarPreco.textContent = ordemCrescente ? 'Ordenar por Preço (↑)' : 'Ordenar por Preço (↓)';
}

botaoListarTodos.addEventListener('click', listarTodosProdutos);
botaoFiltrar.addEventListener('click', filtrarProdutos);
botaoOrdenarPreco.addEventListener('click', ordenarPorPreco);
listarTodosProdutos();
