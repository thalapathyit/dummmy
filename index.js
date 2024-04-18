var sliderimg=document.querySelector(".sliderimg");
var leftarrow=document.getElementById("leftarrow")
var rightarrow=document.getElementById("rightarrow")
var images=['a.jpg','b.jpg'];
var index=0;
   rightarrow.addEventListener("click",function()
 {
   index--;
   if(index<0) 
   {
   index=images.length-1;
   return setImg();
   }
 })
leftarrow.addEventListener("click",function()
{
 index++;
   if(index==images.length-1);
   {
   index=0;
   return setImg();
   }
})
function setImg()
 {
   return sliderimg.setAttribute('src','images/'+ images[index]);
 }

