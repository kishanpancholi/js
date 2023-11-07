function populateCities(state) {
    var cities = document.getElementById("cities");
    cities.innerHTML = ""; // clear previous options
  
    var gujrat = ["surat", "Ahemdabad", "vadodra"];
    var Maharastra = ["Mumbai", "pune", "Nasik"];
  
    var options;
  
    if (state === "gujrat") {
      options = gujrat;
    } else if (state === "Maharastra") {
      options = Maharastra;
    }
  
    for (var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      cities.appendChild(el);
    }
  }

  function data(){
    let spid = document.getElementById("spid").value;
    let rollno = document.getElementById("rnum").value;
    let name = document.getElementById("name").value;
    let Semester = document.getElementById("sem").value;
    let Division = document.getElementById("div").value;
    let Age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let Email = document.getElementById("mail").value;
    let num = parseInt(document.getElementById("mono").value);
    let linkedin = document.getElementById("link").value;
    let uname = document.getElementById("user").value;
    let Password = document.getElementById("pass").value;
    let stat = document.getElementById("states").value;
    let city = document.getElementById("cities").value;

    document.getElementById("spd").innerHTML = spid;
    document.getElementById("roll").innerHTML = rollno;
    document.getElementById("fname").innerHTML = name;
    document.getElementById("semi").innerHTML = Semester;
    document.getElementById("divi").innerHTML = Division;
    document.getElementById("umar").innerHTML = Age;
    document.getElementById("gen").innerHTML = gender;
    document.getElementById("gmail").innerHTML = Email;
    document.getElementById("mnum").innerHTML = num;
    document.getElementById("llink").innerHTML = linkedin;
    document.getElementById("uname").innerHTML = uname;
    document.getElementById("pswd").innerHTML = Password;
    
    document.getElementById("statt").innerHTML = stat;
    document.getElementById("cty").innerHTML = city;
  

  const chk_lang = document.querySelectorAll('input[type="checkbox"]');

  const val_lang = [];

  chk_lang.forEach(checkbox => {
    if(checkbox.checked){
      val_lang.push(checkbox.value);
    }
  });

  document.getElementById("langg").innerHTML=val_lang;

  // const ckspid = /^\d{8}$/;

  // if(ckspid.test(spid)){
  // }

  // else{
  //   document.getElementById("msg").innerHTML="Enter valid spid";
  // }

  var ele = document.getElementsByName('gender');
 
            for (i = 0; i < ele.length; i++) {
                if (ele[i].checked)
                    document.getElementById("gen").innerHTML = ele[i].value;
            }
}

