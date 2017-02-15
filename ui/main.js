console.log('Loaded!');

var element = document.getElementById('main-text');

//element.innerHTML = 'New Value';

//Move image

var img= document.getElementById('tihom');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
  img.style.marginLeft = '100px';  
};

var button = document.getElementById('counter');
var counter = 0;  
button.onclick=function(){
    // make a request
    
    //  capture a response
    
    
    // render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();    
}


