const numbers = '1234567890'
const letters  = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!@#$%^&*()~_-+={}[]:;<>,.?/|'
const lettersCaps = letters.toUpperCase()

function passwordGenerate(){
    let length = document.getElementById("length").value
    let combined = numbers + letters + lettersCaps + symbols
    let repeated = combined.repeat(Math.random() * 100)
    let shuffled = repeated.split('').sort(function(){return 0.5-Math.random()}).join('')
    let password = shuffled.slice(0, length)

    if(length < 4){
        document.getElementById("passwordError").innerHTML='Password too short (4 - 32)'
    } else if(length > 32){
        document.getElementById("passwordError").innerHTML='Password too long (4 - 32)'
    } else {
        document.getElementById("passwordOutput").innerHTML=password
        document.getElementById("passwordError").innerHTML=''
    }
}

function copyPassword(){
    let copyPassword = document.getElementById("passwordOutput").value
    navigator.clipboard.writeText(copyPassword)
}

function clearPassword(){
    document.getElementById("passwordOutput").innerHTML=''
}