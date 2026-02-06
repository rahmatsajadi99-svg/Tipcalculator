 
 let Bi = parseFloat(document.getElementById('Bill').value);
 let NumberOfPeople =parseFloat(document.getElementById("NPeople").value);
 const buttons = document.querySelectorAll(".btn");
 
 buttons.forEach(btn=>{
   btn.addEventListener('click',function(){
    
    buttons.forEach(b=>{
        b.classList.remove("bg-teal-500");
        b.classList.add("bg-teal-900");
    });
       btn.classList.remove("bg-teal-900");
       btn.classList.add("bg-teal-500");
      const tipPercent = parseFloat(btn.value);
      calculateTip(Bi,tipPercent,NumberOfPeople);
   });
 });
 //calculate 
function calculateTip(Bi,tipPercent,NumberOfPeople ){
    if(!NumberOfPeople || NumberOfPeople ===0){
         document.getElementById('error').textContent="Can't be zero";
         document.getElementById('NPeople').classList.add('border');
         document.getElementById('NPeople').classList.add('border-red-300');
  }else{
       const tip = document.getElementById('Tip');
       const total =document.getElementById('Totale');
       const tipValue =Bi * (tipPercent/100);
       const tipAmount =  tipValue/NumberOfPeople;
       tip.textContent = `${tipAmount.toFixed(2)}`;
       const totalAmount =(Bi+tipValue)/NumberOfPeople;
       total.textContent=`${totalAmount.toFixed(2)}`;
       
  };
};
 document.getElementById('reset').addEventListener('click',()=>{
    location.reload();
    document.querySelectorAll('input').forEach(input=>{
        input.value ="";
    });
 });



