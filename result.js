function cresult(){
    const name = document.getElementById("fname").value;
    const rnum = document.getElementById("rnum").value;
    const mmarks =parseInt(document.getElementById("mmarks").value);
    const smarks = parseInt(document.getElementById("smarks").value);
    const hmarks = parseInt(document.getElementById("hmarks").value);
    const cmarks = parseInt(document.getElementById("cmarks").value);
    const gmarks = parseInt(document.getElementById("gmarks").value);

    const tmarks = mmarks + smarks + hmarks + cmarks + gmarks ;
    const per = tmarks/5;

    document.getElementById("aname").innerHTML = name;
    document.getElementById("rolln").innerHTML = rnum;
    document.getElementById("math").innerHTML = mmarks;
    document.getElementById("sci").innerHTML = smarks;
    document.getElementById("hin").innerHTML = hmarks;
    document.getElementById("com").innerHTML = cmarks;
    document.getElementById("guj").innerHTML = gmarks; 
    document.getElementById("total").innerHTML = tmarks; 
    document.getElementById("prec").innerHTML = per;     
}
