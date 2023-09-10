const button = document.querySelector("button")

const bdy = document.querySelector("body")

const color = ['red','green','blue','yellow','pink','purple']

bdy.style.backgroundColor = 'violet'


function changeB()
{
    const colorIndex = parseInt(Math.random()*color.length)
    bdy.style.backgroundColor = color[colorIndex]
    console.log("Hebhöb")
}


button.addEventListener('click', changeB)

