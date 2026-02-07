
const billInput = document.getElementById("Bill");
const peopleInput = document.getElementById("NPeople");
const tipPerson = document.getElementById('Tip');
const totalPerson = document.getElementById('Totale');
const errorMessage = document.getElementById('error');
const customInput = document.getElementById('Custom');
const resetButton = document.getElementById('reset');
let selectedTip=0;

const buttons = document.querySelectorAll('.btn');


//Calculate fuction
function calculate(){
    const bill = parseFloat(billInput.value);
    const numberOfpeople = parseFloat(peopleInput.value);
    const tipPercent =selectedTip;
    const tip = bill*(tipPercent/100);
    const tipP = tip/numberOfpeople
    const totalP = (bill + tip)/numberOfpeople;
    //Validation 
    if(numberOfpeople===0){
      errorMessage.textContent="Can't be zero";
      peopleInput.classList.remove('border-blue-50');
      peopleInput.classList.add('border-2');
      peopleInput.classList.add('border-red-100');
      return;
     
    } 
     if(!bill || !numberOfpeople){
         tipPerson.textContent="0.00";
         totalPerson.textContent="0.00";
         return;
     }
      if(!bill & !numberOfpeople & !selectedTip){
         tipPerson.textContent="0.00";
         totalPerson.textContent="0.00";
         return;
      } 
    else{
    errorMessage.textContent="";
      peopleInput.classList.remove('border-2');
      peopleInput.classList.remove('border-red-100');
      tipPerson.textContent =`${tipP.toFixed(2)}`;
      totalPerson.textContent=`${totalP.toFixed(2)}`;
    }
   
     
}

//Input Events 
 billInput.addEventListener("input",calculate());
 peopleInput.addEventListener("input",calculate());
// Tip Buttons
buttons.forEach(btn=>{
     btn.addEventListener('click',()=>{
        buttons.forEach(b=>{
            b.classList.remove('bg-teal-500');
            b.classList.add('bg-teal-900');
        });
          btn.classList.remove('bg-teal-900');
          btn.classList.add('bg-teal-500');
          selectedTip = Number(btn.value);
          customInput.value = "";
          calculate(); 
   }); 
});

 //Custom Number

 customInput.addEventListener("input",()=>{
    selectedTip=parseFloat(Number(customInput.value));
    buttons.forEach(btn=>{
        btn.classList.remove('bg-teal-500');
        btn.classList.add('bg-teal-900');
    });
      calculate();
 });
 //Reset button
resetButton.addEventListener("click",()=>{
    billInput.value ="";
    peopleInput.value ="";
    customInput.value ="";
    selectedTip=0;
    location.reload();
});