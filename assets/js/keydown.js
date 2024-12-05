const azulDiv = document.getElementById('azul');
const rojoDiv = document.getElementById('rojo');
const verdeDiv = document.getElementById('verde');
const amarilloDiv = document.getElementById('amarillo');

azulDiv.addEventListener('click',()=>{
    azulDiv.style.backgroundColor = 'black'
})
rojoDiv.addEventListener('click',()=>{
    rojoDiv.style.backgroundColor = 'black'
})
verdeDiv.addEventListener('click',()=>{
    verdeDiv.style.backgroundColor = 'black'
})
amarilloDiv.addEventListener('click',()=>{
    amarilloDiv.style.backgroundColor = 'black'
})

const keyDiv = document.getElementById('key');


document.addEventListener('keydown',(event)=>{
    if (event.key == 'a') {
        keyDiv.style.backgroundColor = 'pink'
    }
    else if (event.key == 's'){
        keyDiv.style.backgroundColor = 'orange'

    }
    else if (event.key == 'd'){
        keyDiv.style.backgroundColor = 'skyBlue'

    }
    let nuevoDivColor = null;

    if (event.key == 'q') {
        nuevoDivColor = 'purple'
    }
    else if(event.key == 'w'){
        nuevoDivColor = 'gray'
    }
    else if(event.key == 'e'){
        nuevoDivColor = 'brown'
    }
    if (nuevoDivColor) {
        const nuevoDiv = document.createElement('div')
        nuevoDiv.style.width = '200px'
        nuevoDiv.style.height = '200px'
        nuevoDiv.style.backgroundColor = nuevoDivColor
        nuevoDiv.style.margin = '10px'
        document.body.appendChild(nuevoDiv)
    }
})