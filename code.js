
var q = 0;
window.addEventListener("load",st,false);
function st(){
    var add = document.getElementById("add");
    var sub = document.getElementById("subtract");
    var mul = document.getElementById("multiply");
    var dvd = document.getElementById("divide");
    add.addEventListener("click",()=>{
        var div = document.getElementById("bt");
        var bt = document.createElement("button");
        bt.innerHTML = "add";
        if(q==0){
            div.appendChild(bt);
            q++;
        }
        else{
            document.getElementById("bt").innerHTML = "";
            document.getElementById("txt").innerHTML = "";
            div.appendChild(bt);
        }
        bt.addEventListener("click",a,false);
    });
    sub.addEventListener("click",()=>{
        var div = document.getElementById("bt");
        var bt = document.createElement("button");
        bt.innerHTML = "subtract";
        if(q==0){
            div.appendChild(bt);
            q++;
        }
        else{
            document.getElementById("bt").innerHTML = "";
            document.getElementById("txt").innerHTML = "";
            div.appendChild(bt);
        }
        bt.addEventListener("click",s,false);
    });
    mul.addEventListener("click",()=>{
        var div = document.getElementById("bt");
        var bt = document.createElement("button");
        bt.innerHTML = "multiply";
        if(q==0){
            div.appendChild(bt);
            q++;
        }
        else{
            document.getElementById("bt").innerHTML = "";
            document.getElementById("txt").innerHTML = "";
            div.appendChild(bt);
        }
        bt.addEventListener("click",m,false);
    });
    dvd.addEventListener("click",()=>{
        var div = document.getElementById("bt");
        var bt = document.createElement("button");
        bt.innerHTML = "divide";
        if(q==0){
            div.appendChild(bt);
            q++;
        }
        else{
            document.getElementById("bt").innerHTML = "";
            document.getElementById("txt").innerHTML = "";
            div.appendChild(bt);
        }
        bt.addEventListener("click",d,false);
    });
}

function a(){
    document.getElementById("txt").innerHTML ="";
    var in1 = document.getElementById("in1").value;
    var in2 = document.getElementById("in2").value; 
    var ta = document.getElementById("txt");
    var res =  parseFloat(in1)+parseFloat(in2);
    ta.innerHTML += "<strong>Result = </strong>"+res.toFixed(2);
}

function s(){
    document.getElementById("txt").innerHTML ="";
    var in1 = document.getElementById("in1").value;
    var in2 = document.getElementById("in2").value;
    var ta = document.getElementById("txt");
    var res =  parseFloat(in1)-parseFloat(in2);
    ta.innerHTML += "<strong>Result = </strong>"+res.toFixed(2);
}

function m(){
    document.getElementById("txt").innerHTML ="";
    var in1 = document.getElementById("in1").value;
    var in2 = document.getElementById("in2").value;
    var ta = document.getElementById("txt");
    var res = parseFloat(in1)*parseFloat(in2);
    ta.innerHTML += "<strong>Result = </strong>"+res.toFixed(2);
    
}

function d(){
    var in1 = document.getElementById("in1").value;
    var in2 = document.getElementById("in2").value;
    if(in2!=0){
        document.getElementById("txt").innerHTML ="";
        var ta = document.getElementById("txt");
        var res = parseFloat(in1)/parseFloat(in2);
        ta.innerHTML += "<strong>Result = </strong>"+res.toFixed(2);
    }
    else{
        alert("can't divide by 0");
    }
}