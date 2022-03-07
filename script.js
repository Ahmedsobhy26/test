var allimges = Array.from(document.querySelectorAll(".ineer img"))
var boxlight = document.getElementById("boxlight")
var close = document.getElementById("colse")
var ineerbox =document.getElementById("ineerbox")
var next = document.getElementById("next")
var prev=document.getElementById("prev")
var currentIndex =0

for(i=0;i<allimges.length;i++)
{
allimges[i].addEventListener("click",function(e){
    boxlight.style.display="flex"
    currentIndex=allimges.indexOf(e.target)
    var img_src =(e.target.getAttribute("src"));
    ineerbox.style.backgroundImage = `url(${img_src})`
})
}

close.addEventListener("click",closeelment)
function closeelment(){
    boxlight.style.display="none"
}

next.addEventListener("click",nextelment)
function nextelment(){
    currentIndex++
    if(currentIndex==allimges.length){
currentIndex=0
    }
    var img_src =allimges[currentIndex].getAttribute("src");
    ineerbox.style.backgroundImage = `url(${img_src})`
}

prev.addEventListener("click",prevelement)
function prevelement(){
 currentIndex--
 if(currentIndex<0){
     currentIndex=allimges.length-1
 }
    var img_src =allimges[currentIndex].getAttribute("src");
    ineerbox.style.backgroundImage = `url(${img_src})`
}
document.addEventListener("keyup",function(e){
if(e.code=="ArrowRight"){
    nextelment()
}else if(e.code=="ArrowLeft"){
    prevelement()
}else if(e.code=="Escape"){
    closeelment()
}
})

boxlight.addEventListener("click",function(e){
if(e.target.getAttribute("id")=="boxlight"){
closeelment()
}
})
