var speed = document.querySelector("#speed");
var arr_size=document.querySelector("#arr_sz");
function swap(el1,el2)
{
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;
}


async function selection_sort(delay1=3000/(speed.value*arr_size.value), delay2=3000/(speed.value*arr_size.value))
{
    var special = document.querySelectorAll(".special");
    var no_of_bar=arr_size.value;
    
    
    for(var i=0;i<no_of_bar-1;i++)
    {
        var min_idx=i;
        special[i].style.background="#dd5c5c";
        special[min_idx].style.background="#dd5c5c";
        for(var j=i+1;j<no_of_bar;j++)
        {
            special[j].style.background="#f15eff";
            await new Promise(resolve =>
                setTimeout(() => {
                resolve();
            }, delay1));

            if(arr[j]<arr[min_idx])
            {
                if(min_idx!=i)
                special[min_idx].style.background="#ebd35e";
                min_idx=j;
                special[min_idx].style.background="#dd5c5c";
            }
            if(j!=min_idx)
            special[j].style.background="#ebd35e";
        }

        special[min_idx].style.background="#dd5c5c";


        await new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, delay2));

        await swap(special[min_idx],special[i]);
        special[min_idx].style.background="#ebd35e";
        special[i].style.background="#6cdb7b";
        var temp=arr[min_idx];
        arr[min_idx]=arr[i];
        arr[i]=temp;
        special = document.querySelectorAll(".special");
    }
    console.log(no_of_bar);
    special[no_of_bar-1].style.background="#6cdb7b";
}