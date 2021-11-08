//Data storing into localstorage
function validateForm(){

    let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
    let formData ={
            "uname":document.getElementById("uName").value,
            "mname":document.getElementById("mName").value,
            "lname":document.getElementById("lName").value,
            "role":document.getElementById("uRole").value,
            "gender":document.getElementById("ugender").value,
            "email":document.getElementById("uEmail").value,
            "password":document.getElementById("uPassword").value,
            "confirmpassword":document.getElementById("confirmPassword").value,
            "contactno":document.getElementById("uContactno").value,
            "addr":document.getElementById("uaddress").value,
            "city":document.getElementById("ucity").value,
            "state":document.getElementById("ustate").value,
            "zipcode":document.getElementById("uZipcode").value,
            "country":document.getElementById("uCountry").value,
            "security_question":document.getElementById("usecurity_question").value,
            "secret_answer":document.getElementById("usecretAns").value   
        }
        data.push(formData);
        if(localStorage){
            localStorage.setItem("details", JSON.stringify(data));
        } 
}
function addProductFromVendor(){

    let data=localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : [];;
    let formData ={
            "productImage":document.getElementById("pImage").value,
            "productName":document.getElementById("pName").value,
            "productPrice":document.getElementById("pPrice").value   
        }
        data.push(formData);
        if(localStorage){
            localStorage.setItem("product", JSON.stringify(data));
        } 
        
}
//Check if password is matching
function verifyPassword(input){
    if(input.value != document.getElementById("uPassword").value){
        input.setCustomValidity("Password Must be Matching");
    }else{
        input.setCustomValidity("");
    }
}
//check already registered users
function emailExist(value){
    let existemail = JSON.parse(localStorage.getItem("details"));
    
    let emailid = existemail.map((email,i,existemail) =>{
        return existemail[i].email;
    });

     let getexistemail = emailid.filter((email)=>{
        if(email == value.value){
            value.setCustomValidity('email exist. try something else');
            
        }else{
            value.setCustomValidity("");
        }
    });
}

//Handling bubbling
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        form.reset();
        document.getElementById("thankYou").style.display="block";
        form.style.display="none";
    });

    function showHide(show, hide){
        let showEle = document.getElementById(show);
        let hideEle = document.getElementById(hide);
        showEle.style.display="block";
        hideEle.style.display="none";
    }

    //login here
    function loginUser(){
        let loginEmail = document.getElementById("uemailId").value;
        let loginPass =  document.getElementById("ePassword").value;
              
        let matchEmail = JSON.parse(localStorage.getItem("details"));
        let emailArray =[];
        let passArray=[];
        let role = [];

         let result = matchEmail.map((email, i, matchEmail) =>{
        
           emailArray.push(matchEmail[i].email);
           passArray.push(matchEmail[i].password);
           role.push(matchEmail[i].role);
        });

        for(var i=0;i<emailArray.length;i++){
            
            if(loginEmail===emailArray[i] && loginPass===passArray[i]){
                
                localStorage.setItem("code", "secret");

                 if(role[i] === "U"){
                    window.location.href="UserStory1.html";  
                }
                 else{
                    window.location.href="vendor.html";  
                 }   
            }else{
                    document.getElementById("errShow").innerHTML = "Email and Password is incorrect";
                    console.log("You have no registered with us");
                    }           
        }
    }
    const loginForm = document.getElementById("logIn");
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
    });
        
    //Acceptance criteria of all fields
    function firstnameValidation()
    {
           var chatinput = document.getElementById('uName').value;
               
                     if (chatinput == "" || chatinput.length == 0 || chatinput == null)
                     { 
                            document.getElementById("firstname").innerText =  "First Name is required";
                     }
                     else{
                         document.getElementById("firstname").innerText =  "";
                     }
   var regex = new RegExp("^[a-zA-Z ]+$");
   var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
          if (!regex.test(key)) {
        event.preventDefault();
        return false;}
 }
 function middlenameValidation(){
    var regex = new RegExp("^[a-zA-Z ]+$");
   var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
          if (!regex.test(key)) {
        event.preventDefault();
        return false;}
 }

 function lastnameValidation()
    {       
     var chatinput = document.getElementById('lName').value;
               
                     if (chatinput == "" || chatinput.length == 0 || chatinput == null)
                     { 
                            document.getElementById("lastname").innerText =  "Last Name is required";
                     }
                     else{
                         document.getElementById("lastname").innerText =  "";
                     }
var regex = new RegExp("^[a-zA-Z ]+$");
       var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
          if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
 }

 function validation()
      {
          var uName = document.getElementById('uName').value;
          var lName = document.getElementById('lName').value;
 if (uName == '')
 {
     document.getElementById('firstname').innerHTML="First Name is required";   
 }
 if (lName == '')
              {
                  document.getElementById('lastname').innerHTML="Last Name is required";   
              }
}
//vendor image field
function showPreview(event){
    if(event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview= document.getElementById("pImage-preview");
        preview.src = src;
        preview.style.display = "block";
    }
 }
 //vendor add button
 function pAdded(){
    document.getElementById("pAdd").innerHTML = "Product is added";
 }



 