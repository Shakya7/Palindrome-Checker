let inputText=document.querySelector("input");
let button=document.querySelector("button");
let resultDiv=document.querySelector(".indication");

function checkPalindrome(data){
    data=data.replace(/[^a-zA-Z0-9 ]/g, '');
    data=data.split(" ").join("");
    data=data.toLowerCase();
    console.log(data);
    let firstP=0;
    let lastP=data.length-1;
    while(firstP<=lastP){
        if(data[firstP]!==data[lastP])
            return false;
        else{
            firstP++;
            lastP--;
        }
    }
    return true;
}

addEventListener("load",()=>{
    if(inputText.value==="")
        button.style.backgroundColor="#cdb5e4";
})

inputText.addEventListener("input",()=>{
    if(inputText.value===""){
        button.style.backgroundColor="#cdb5e4";
        resultDiv.classList.add("hidden");
    }    
    else
        button.style.backgroundColor="#8a2be2";
})

button.addEventListener("click",()=>{
    if(inputText.value!==""){
        let result=checkPalindrome(inputText.value);
        if(result){
            resultDiv.innerHTML=`YES, <span>${inputText.value}</span> is a palindrome `
            resultDiv.classList.remove("hidden");
        }
        else{
            resultDiv.innerHTML=`NO, <span>${inputText.value}</span> is not palindrome `
            resultDiv.classList.remove("hidden");
        }
    }
})

