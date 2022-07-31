function passwordGenerate(){
    var symbols = '!@#$%^&*()~_-+={}[]:;<>,.?/|'
    var numbers = '1234567890'
    var letters  = 'abcdefghijklmnopqrstuvwxyz'
    var lettersCaps = letters.toUpperCase()
    var combined = ''

    var symbolsChecked = document.getElementById("check1");  
    var numbersChecked = document.getElementById("check2");  
    var lowercaseChecked = document.getElementById("check3");  
    var uppercaseChecked = document.getElementById("check4");

    if(symbolsChecked.checked === true){
        combined = combined + symbols
    }

    if(numbersChecked.checked === true){
        combined = combined + numbers
    }

    if(lowercaseChecked.checked === true){
        combined = combined + letters
    }

    if(uppercaseChecked.checked === true){
        combined = combined + lettersCaps
    }

    let length = document.getElementById("length").value
    let repeated = combined.repeat(32)
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