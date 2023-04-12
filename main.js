function Colors() {

    let red = document.querySelector('#red').value
    red = Number(red)
    let green = document.querySelector('#green').value
    green = Number(green)
    let blue = document.querySelector('#blue').value
    blue = Number(blue)

    console.log(red)
    console.log(green)
    console.log(blue)

    let box = `<div class="color" id="color" style=" width: 15em; height: 15em; border-radius: 15px; background-color: rgb( ${red}, ${green}, ${blue} );"></div>`

    document.querySelector('#result').innerHTML = box

    document.querySelector('#redBox').innerHTML = red
    document.querySelector('#greenBox').innerHTML = green
    document.querySelector('#blueBox').innerHTML = blue

}