let listaDeFilmes = [
    'https://br.web.img3.acsta.net/pictures/14/08/01/15/44/388856.jpg' ,
    'https://br.web.img2.acsta.net/medias/nmedia/18/87/23/46/19873389.jpg' ,
    'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg' ,
    'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWX3284H/image?locale=pt-br&mode=crop&purposes=BoxArt&q=90&h=225&w=150&format=jpg' ,
    'https://upload.wikimedia.org/wikipedia/pt/d/d4/Ready_Player_One_%28filme%29.png' ,
    'https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg' ,
    'https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png' ,
    'https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG',
    'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg' ,


]

let listaDeTitulos = [
    'Relatos Selvagens' , 
    'Velozes e Furiosos' ,
    'Harry Potter' ,
    'Animais Fantasticos e onde Habitam' , 
    'Jogador numero 1' ,
    'Avengers - Os vingadores' ,
    'Doutor Estranho - Multiverso da Loucura' ,
    'Homem Aranha - Sem volta para casa' ,
    'Batman 2022' ,
    
]

// Dom Document object model - tudo que esta no html 

let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')

for (i; i < listaDeFilmes.length; i++) {
    catalogo.innerHTML += `<div class ="filme">
        <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}</figcaption>
    </div>`
}

let filmeRepitido = true

function cadastrar() {
    let novoFilme = document.querySelector('#filme').value

    let novoTitulo = document.querySelector ('#titulo').value

    if (listaDeFilmes.includes(novoFilme) || (listaDeTitulos.toLoweCase()).includes(novoTitulo.toLoweCase())) {
        erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
    }else{
        listaDeFilmes.push(novoFilme)
        listaDeTitulos.push(novoTitulo)
        erro.innerHTML = ' '

    }
    document.querySelector('#filme').value = ''
    document.querySelector('#titulo').value = ''
}