const livros = require("./listaLivros");

let maisBarato = 0; //precisa guardar 15

for(let atual = 0; atual < livros.length; atual++){

    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual;
    }
}

console.log(`O livro mais barato é ${livros[maisBarato].preco} e o seu titulo é ${livros[maisBarato].titulo}`);

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++) {

 if (livros[atual].preco > livros[maisCaro].preco) {
   maisCaro = atual;

 }
}

console.log(`o livro mais barato é ${livros[maisCaro].preco} e o seu titulo é ${livros[maisCaro].titulo}`);