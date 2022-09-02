

        const submit =document.querySelector('button');
        const container =document.querySelector('.container');
        var result =document.getElementById('result');

        let pass= JSON.parse(localStorage.getItem("score"));
        if(!pass){
          pass = 0;
        }
  
        var randNum1 =  Math.floor(Math.random() * 10) + 1;
        var randNum2 =  Math.floor(Math.random() * 10) + 1;
        
        document.getElementById('firstNum').innerText= randNum1;
        document.getElementById('secondNum').innerText = randNum2;

container.addEventListener("submit",
    function(){
         
        const score =document.querySelector('.score');
        let input =document.getElementById('dodo').value;

        let total= randNum1 * randNum2;
     
       if (input == total){
        pass = Number(pass +1);
        updateLocalStorage();
       
       }
      else if(input !==total && !pass <=0){
        pass= Number(pass - 1);
        updateLocalStorage();
       }  
    
       //   I NEED TO UNDERSTAND THIS;
      //  document.getElementById('dodo').value= '';
    }
 )
 result.textContent =pass;

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(pass));
}