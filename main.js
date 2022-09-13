// Main Generate Password Function
function passwordGenerate(){
    let combined = ''
    const length = document.getElementById("length").value
    const passwordItems = [
        '!@#$%^&*()~_-+={}[]:;<>,.?/|',
        '1234567890',
        'abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ]
    const passwordAltercations = [
        document.getElementById("check1"),
        document.getElementById("check2"),  
        document.getElementById("check3"),  
        document.getElementById("check4"),
    ]
    for(let i = 0; i < 4; i++) {
        if(passwordAltercations[i].checked == true){
            combined += passwordItems[i]
        }
    }
    const password = combined.repeat(32).split('').sort(
        function() {
            return 0.5-Math.random()
        }).join('').slice(0, length)

    if(length < 4){
        document.getElementById("passwordError").innerHTML='Password too short (4 - 32)'
    } else if(length > 32){
        document.getElementById("passwordError").innerHTML='Password too long (4 - 32)'
    } else{
        document.getElementById("passwordOutput").innerHTML=password
        document.getElementById("passwordError").innerHTML=''
    }
}

// Copy Password Function
function copyPassword(){
    navigator.clipboard.writeText(document.getElementById("passwordOutput").value)
}

// Clear Password Function
function clearPassword(){
    document.getElementById("passwordOutput").innerHTML=''
}
