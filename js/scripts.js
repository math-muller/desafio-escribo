const button = document.querySelector("#send");

button.addEventListener("click", function(e) {
    e.preventDefault();

    var num = parseInt(document.querySelector("#number").value)

    parse(num)

});

function parse(num) {
    var result = 0;

    if(num > 0) {
        for(var i =0; i < num; i++) {
            if(i % 3 === 0) {
                result += i;
            }
            if(i % 5 === 0) {
                result += i;
            }
        }
        alert("O resultado é " + result)
    } else {
       alert("Digite apenas numeros positivos")
    }
    
}