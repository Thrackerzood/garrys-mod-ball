const ball = document.querySelector('.clip-animation')

ball.onmousedown = function(e) {

   var coords = getCoords(ball);
   var shiftX = e.pageX - coords.left;
   var shiftY = e.pageY - coords.top;
 
   ball.style.position = 'absolute';
   document.body.appendChild(ball);
   moveAt(e);
 
   ball.style.zIndex = 1000;
 
   function moveAt(e) {
     ball.style.left = e.pageX - shiftX + 'px';
     ball.style.top = e.pageY - shiftY + 'px';
   }
 
   document.onmousemove = function(e) {
     moveAt(e);
   };
 
   ball.onmouseup = function() {
     document.onmousemove = null;
     ball.onmouseup = null;
   };
 
 }
 
 ball.ondragstart = function() {
   return false;
 };
 
 function getCoords(elem) {
   var box = elem.getBoundingClientRect();
   return {
     top: box.top + pageYOffset,
     left: box.left + pageXOffset
   };
 }
 let user = {
    name: 'js',
    age: 22,
    js: {
       width: 300,
       height: 300,
    }
 }


 let map = new Map()

map.set('value_1', user)
map.set('value_2', user)
map.forEach((value,key,map)=>{
   let mapArray = Object.entries(map.get(key))
   for(let keyArr of mapArray){
      if(typeof keyArr[1] !== 'object'){
         console.log(keyArr[0],keyArr[1])
      }
      if(typeof keyArr[1] === 'object'){
         console.log(keyArr[0], keyArr[1]?.width , keyArr[1]?.height)
      }
   }
})