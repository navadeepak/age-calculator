function checkAGE(){
    var dateU=document.getElementById("date").value;
    var monthU=document.getElementById("month").value;
    var yearU=document.getElementById("year").value;
    // alert("test1 pass")
    var D = new Date()
    var dateC=D.getDate();
    var monthC=1+D.getMonth();
    var yearC=D.getFullYear();
    // alert("test2 pass")
    var month=[31,28,31,30,31,30,31,31,30,31,30,31];
    
    if(dateU>dateC){
        dateC=dateC+month[monthC-1];
        monthC=monthC-1;
    }
    // alert("test3 pass")
    if(monthU>monthC){
        monthC=monthC+12;
        yearC=yearC-1;
    }
    // alert("test4 pass")
    var d=dateC-dateU;
    var m=monthC-monthU;
    var y=yearC-yearU;
    // alert("test5 pass")
    console.log(y,d,m);
    if(dateU>31){
        // alert("Invalid Date Please Enter Valid Number!");
        document.getElementById("agerev-date").innerHTML="invalid";
    }
    else{
        document.getElementById("agerev-date").innerHTML=d;
    }
    if(monthU>12){
        // alert("Invalid Month Please Enter Valid Number!");
        document.getElementById("agerev-month").innerHTML="invalid";
    }
    else{
        document.getElementById("agerev-month").innerHTML=m;
    }
    if(yearU>yearC){
        // alert("Invalid Year Please Enter Valid Number!");
        document.getElementById("agerev").innerHTML="invalid";
    }
    else{
        document.getElementById("agerev").innerHTML=y;
    }
    // alert("testf pass")
    document.getElementById("inner-s-box").style.height=y+"%";
}
