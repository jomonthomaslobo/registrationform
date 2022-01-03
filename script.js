   let timeout;
    let password = document.getElementById('password')
    let strengthBadge = document.getElementById('StrengthDisp')

    // The strong and weak password Regex pattern checker

    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    function StrengthChecker(PasswordParameter){
      // We then change the badge's color and text based on the password strength

      if(strongPassword.test(PasswordParameter)) {
          strengthBadge.style.backgroundColor = "green"
          strengthBadge.textContent = 'Strong'
      } else if(mediumPassword.test(PasswordParameter)){
          strengthBadge.style.backgroundColor = 'blue'
          strengthBadge.textContent = 'Medium'
      } else{
          strengthBadge.style.backgroundColor = 'red'
          strengthBadge.textContent = 'Weak'
      }
  }

  


function requiredVal(str){
document.getElementById('error').innerHTML="";
string=str.value;
if(string==""){
//alert("Please enter a value");
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
      document.getElementById('error').innerHTML="Please enter only alphabets";
      return false;    
   }           
} 

function emailValidation(mail){
    var email = mail.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
       // alert("Not a valid e-mail address");
       document.getElementById('error').innerHTML="Please enter a valid email address";
        return false;
    
       
    }
    else if(requiredVal(mail.value)){
         return requiredVal(mail.value);
    }
    else
      return true;

}
function validatePhone(){
      var phone = document.getElementById('phone').value;
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if((phone.match(phoneno)))
        {
      return true;
        }
      else
        {
        document.getElementById('error').innerHTML="Please enter a valid phone number";
        return false;
        }
      
}

function validateAll(){
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var phone = document.getElementById('phone');
      var mailV=emailValidation(email);
      var phoneV=validatePhone();
      var nameV=requiredVal(name);
      if(mailV && phoneV && nameV){
      document.getElementById('error').innerHTML="<span style='color:green'>Success</span>";
        return true;
      }
      else{
      document.getElementById('error').innerHTML="<span style='color:red'>Invalid Input</span>";

        return false;
      }
}
