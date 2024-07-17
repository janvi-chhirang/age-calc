const DOB=document.querySelector('.date-input')
const month=document.querySelector('.month-input')
const year=document.querySelector('.year-input')
const DOBerror=document.querySelector('#date')
const monthError=document.querySelector('#month')
const yearError=document.querySelector('#year')
const button=document.querySelector('.arrow')
const yearDiff=document.querySelector('.years-result')
const dateDiff=document.querySelector('.days-result')
const monthDiff=document.querySelector('.months-result')
const currentDate=new Date()
const presentYear= currentDate.getFullYear();
const presentDate=currentDate.getDate()
const presentMonth=currentDate.getMonth()+1;

console.log(currentDate);
button.addEventListener('click',()=>{
    //date of birth is not enterd
    if(DOB.value==''){
        DOBerror.innerText="This fiels is required.";
        document.querySelector('.date-box').style.borderColor="red";
        document.querySelector('.date-container p').style.color="red";
        }else{
            DOBerror.innerHTML="";
            document.querySelector('.date-box').style.borderColor='';
            document.querySelector('.date-container p').style.color='';
            if(DOB.value>31){
                DOBerror.innerText="Must be a valid date.";
            document.querySelector('.date-box').style.borderColor="red";
            document.querySelector('.date-container p').style.color="red";
            }
        }
//month is not entered
        if(month.value==''){
            monthError.innerText="This fiels is required.";
            document.querySelector('.month-box').style.borderColor="red";
            document.querySelector('.month-container p').style.color="red";
            }else{
                monthError.innerHTML="";
                document.querySelector('.month-box').style.borderColor='';
                document.querySelector('.month-container p').style.color='';
                if(month.value>12){
                    monthError.innerText="Must be a valid date.";
                document.querySelector('.month-box').style.borderColor="red";
                document.querySelector('.month-container p').style.color="red";
            }
        }
            if(year.value==''){
                yearError.innerText="This fiels is required.";
                document.querySelector('.year-box').style.borderColor="red";
                document.querySelector('.year-container p').style.color="red";
                }else{
                    yearError.innerHTML="";
                    document.querySelector('.year-box').style.borderColor='';
                    document.querySelector('.year-container p').style.color='';
                    if(year.value>2024){
                yearError.innerText="Must be in the past.";
                    document.querySelector('.year-box').style.borderColor="red";
                    document.querySelector('.year-container p').style.color="red";
                }
                }

   if(DOB.value!='' && month.value!='' && year.value!='' && DOB.value<=31 && month.value<=12 && year.value<=2024){
    const yearValue=Math.abs(year.value-presentYear);
    yearDiff.innerText=yearValue; 
    
    const dateValue=Math.abs(presentDate-DOB.value);
dateDiff.innerText=dateValue;

   if(month.value>currentDate.getMonth()){
    const mahineKaDiff=(12-month.value)+currentDate.getMonth()+1;
    monthDiff.innerText=mahineKaDiff;
    yearDiff.innerText=yearValue-1;
   }else{
    const mahineKaDiff=Math.abs(currentDate.getMonth()+1-month.value);
    monthDiff.innerText=currentDate.getMonth()+1;
    yearDiff.innerText=yearValue;
   }


    DOB.setAttribute('disabled',true);
    month.setAttribute('disabled',true)
    year.setAttribute('disabled',true)

    button.style.backgroundColor='black';
   }
  })
   
    