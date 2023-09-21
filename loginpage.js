 function clogin(){
   const email = "kishanpancholi@gmail.com";
   const pass = "kishan123";
      
   const e = document.getElementById("typeEmailX").value;
   const p = document.getElementById("typePasswordX").value;

   if (e == email && p == pass){
    window.location.href = "file:///D:/kishan/javascript/js/markstask.html";
        }
   else{
    document.getElementById("check").innerHTML= "Please Enter Valid Username And Password";
   }
}