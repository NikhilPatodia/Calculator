let string = "";

let btn = document.querySelectorAll('.btn');
let input = document.querySelector('.input');


Array.from(btn).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
          input.value = eval(string);
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string
        }
    })
})