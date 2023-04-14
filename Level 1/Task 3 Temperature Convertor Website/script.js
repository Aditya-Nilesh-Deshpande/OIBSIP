
/*  
       C/5= (F-32)/9= (K-273.15)/5;
*/

let convertBtn=document.getElementById('convert');
let clearBtn=document.getElementById('clear');

convertBtn.addEventListener("click", ()=>{

    //result is where out ans will be placed
    let result=document.getElementById("result");

    //Getting the value to be converted
    let valToConvert=document.getElementById("input-value").value;

    if(valToConvert==""){
        alert("Please enter a value to convert!");
    }

    //Getting the select tag values
    let from=document.getElementById("input").value;
    let to=document.getElementById("output").value;

    if(from=="celsius" && to=="fahrenheit"){
        let f=(Number(valToConvert)*9/5)+32; 
        result.value=f;
    }
    else if(from=="celsius" && to=="kelvin"){
        let kelvin=Number(valToConvert)+ 273.15; 
        result.value=kelvin;
    }

    //For Fahrenheit
    else if(from=='fahrenheit' && to=="celsius"){
        let cel=(Number(valToConvert)-32)*5/9; 
        result.value=cel;
    }
    else if(from=='fahrenheit' && to=="kelvin"){
        let kelvin=((Number(valToConvert)-32)*5/9)+273.15; 
        result.value=kelvin;
    }

    //For Kelvin
    else if(from=='kelvin' && to=="celsius"){
        let cel=Number(valToConvert)-273.15; 
        result.value=cel;
    }

    else if(from=='kelvin' && to=="fahrenheit"){
        let f=((Number(valToConvert)-273.15)*9/5)+32; 
        result.value=f;
    }

    //For Same inputs  
    else if(from==to){
        result.value=valToConvert;
    }

}

)

clearBtn.addEventListener("click" , ()=>{

    let result=document.getElementById("result");
    let valBox=document.getElementById("input-value");
    
    result.value="";
    valBox.value="";
})

