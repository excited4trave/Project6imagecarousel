var index=0;

show_image(index);

function show_image(i){
index+=i;
var images=document.getElementsByClassName("image");
for(i=0; i<images.length;i++)
{
 images[i].style.display="none";
}

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");


if(index>images.length-1)
{
    index=0;

}
if(index<0)
{
    index=images.length-1;
}
images[index].style.display="block";
btns[index].style.backgroundColor ="black";
//btns[index].classList.add("active");
for(i=0;i<images.length;i++)
{
   if(i==index)
   {
    i++;
   } 
  btns[i].style.backgroundColor="grey";
 // btns[i].className.replace("active","dot");
 
}

}


