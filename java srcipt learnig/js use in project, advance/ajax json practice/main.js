
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){


    var ourRequest=new XMLHttpRequest(); // now ourRequest variable can actually do someting for us as i aquire the functionality of XMLHttpRequest .
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
    //ourRequest.open('GET','data.json');
    ourRequest.onload=function(){
       
       var content= JSON.parse(ourRequest.responseText);
       renderhtml(content);
    
   };
   
   ourRequest.send(null);
   

    btn.style.display = "none";


});

function renderhtml(content){

    document.getElementById("content").innerHTML = content[1].name;
   
};


