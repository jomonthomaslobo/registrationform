function requiredVal(str){
    document.getElementById('error').innerHTML="";
string=str.value;
if(string==""){
alert("Please enter a value");
document.getElementById('error').innerHTML="Please enter a value for "+str.placeholder;

return false;
}
return true;
}
function allowOnlyLetters(e, t)   
{    
   if (window.event)    
   {    
      var charCode = window.event.keyCode;    
   }    
   else if (e)   
   {    
      var charCode = e.which;    
   }    
   else { return true; }    
   if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))    //checks in the ASCII range
       return true;    
   else  
   {    
      alert("Please enter only alphabets");    
      return false;    
   }           
} 