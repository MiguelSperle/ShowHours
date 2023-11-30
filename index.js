function carregar() { // função de reload a pagina automaticamente
    let date = new Date() // to avisando que o método que eu vou querer é de data/hora
    let hora = date.getHours() // aqui eu estou pegando a hora
    let minutes = date.getMinutes()
    let foto = document.querySelector('#imagem') // conectei a img, para poder altera-lá de acordo com a hora
    let escrito = document.querySelector('#escrito') // conectei a msg, para poder altera-lá de acordo com a hora

    if(hora <= 11){ // to verificando se hora é menor que 11 horas ou igual a 11 horas, se sim vai fazer as coisas abaixo...
        escrito.innerHTML = ` São exatamente ${hora} horas e ${minutes} da Manhã ` 
        escrito.style.fontWeight = '600'
        escrito.style.color = 'yellowgreen'
        foto.src = 'img/fotomanha.jpg' // aqui eu to trocando o src, lá do html para determinada foto
    } else if  (hora >= 12 && hora <= 18){ // to verificando se a hora for maior igual que 12 ou menor igual 18, se sim vai fazer as coisas abaixo
        escrito.innerHTML = ` São exatamente ${hora} horas e ${minutes} da Tarde`
        escrito.style.fontWeight = '600'
        escrito.style.color = 'orange'
        foto.src = 'img/fototarde.jpg' // aqui eu to trocando o src, lá do html para determinada foto
    } else if (hora > 18 && hora <= 23){ // to verificando se a hora é maior ou igual a 18 e menor igual a 23, vai fazer as coisas abaixo
        escrito.innerHTML = ` São exatamente ${hora} horas e ${minutes} minutos da Noite `
        escrito.style.fontWeight = '600'
        foto.src = 'img/fotonoite.jpg' // aqui eu to trocando o src, lá do html para determinada foto
    } 
}
  
