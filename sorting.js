// Initialization
var arr = [];
var bar = document.querySelector("#bar");
var new_btn = document.querySelector("#new");
var bubble = document.querySelector(".bubble");
var selection =document.querySelector(".selection");
var quick = document.querySelector(".quick");
var merge = document.querySelector(".merge");
var check = document.querySelector(".check");
var insertion = document.querySelector(".insertion");
var arr_size = document.querySelector("#arr_sz");
var button = document.querySelectorAll("button");
var range = document.querySelector("range");
var speed = document.querySelector("#speed");
var count = 0;

// To create the bars
function create_bars()
{
    // Make the array empty
    arr=[];
    // Make the visible bars empty
    bar.innerHTML="";
    // Take the no of bars from range
    var no_of_bar=arr_size.value;
    var arr_width_size =(500/no_of_bar);
    
    // Set the height
    // we will sort the bars on the basis of height
    for(var i=0;i<no_of_bar;i++)
      arr.push(Math.floor(Math.random()*100));


    //Set the height and width of visible bars 
    for(var i=0;i<no_of_bar;i++)
    {
        var div = document.createElement("DIV");
        var margin_size=0.1;
        div.classList.add("special");
        div.style="margin:0%" + margin_size + "%; width:" + (100/no_of_bar-(2*margin_size)) + "%;";
        var height = (arr[i]*5+10).toString();
        height = height+'px';
        div.style.height=height;
        bar.appendChild(div);
    }
}


// Creating bars at first
create_bars();

// Generation of new bars
new_btn.addEventListener("click",function(){
    create_bars();
});


// Range listener
arr_size.addEventListener("input",create_bars);


// Bubble sort button 
bubble.addEventListener("click",async function(){
    this.classList.add("selected");
    for(var i=0;i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    
    this.classList.remove("unselected");
    arr_size.disabled=true;
    speed.disabled=true;
    
    await bubble_sort();
    
    for(var i=0;i<button.length;i++)
        button[i].disabled=false, button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
    
    arr_size.disabled=false;
    speed.disabled=false;
    this.classList.remove("selected");
});


// Insertion sort button
insertion.addEventListener("click",async function(){
    this.classList.add("selected");
    for(var i=0;i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    
    arr_size.disabled=true; 
    speed.disabled=true;
    this.classList.remove("unselected");
    
    await insertion_sort();
    
    for(var i=0;i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
    
    arr_size.disabled=false;
    speed.disabled=false;
    this.classList.remove("selected");
    
});


// Selection sort button
selection.addEventListener("click",async function(){
    this.classList.add("selected");
    for(var i=0;i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    
    arr_size.disabled=true;
    speed.disabled=true;
    this.classList.remove("unselected");
    
    await selection_sort();
    
    for(var i=0;i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
    
    arr_size.disabled=false;
    speed.disabled=false;
    this.classList.remove("selected");
});


// Quick sort button
quick.addEventListener("click",async function(){
    this.classList.add("selected");
    for(var i=0;i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    
    arr_size.disabled=true;
    speed.disabled=true;
    this.classList.remove("unselected");
    
    await quick_sort();
    
    for(var i=0;i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
    
    arr_size.disabled=false;  
    speed.disabled=false;
    this.classList.remove("selected");
});


// Merge sort button
merge.addEventListener("click",async function(){
    this.classList.add("selected");
    var no_of_bar=arr_size.value;
    for(var i=0;i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    
    this.classList.remove("unselected");
    arr_size.disabled=true; 
    speed.disabled=true;
    
    await merge_sort(0,no_of_bar-1);
    
    for(var i=0;i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
    
    arr_size.disabled=false;
    speed.disabled=false;
    this.classList.remove("selected");
});
    


