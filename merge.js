var arr_size=document.querySelector("#arr_sz");
var speed=document.querySelector("#speed");


function swap(el1,el2)
{

    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;


}

function change(el1,el2)
{
    const style2 = window.getComputedStyle(el2);
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2;

}

async function merge_arr(low,mid,high,delay2=3000/(arr_size.value*speed.value))
{
    var no_of_bar=arr_size.value;
    var i=low,j=mid+1,temp,tempi,tempj;
    var special = document.querySelectorAll(".special");
    while(i<=mid&&j<=high)
    {
        special = document.querySelectorAll(".special");
        tempi=i,tempj=j;
        special[tempi].style.background="#dd5c5c";
        special[tempj].style.background="#dd5c5c";

        await new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, delay2));


        if(arr[i]>arr[j])
        {
            temp=arr[j];
            temp_special=special[j];
            const style2 = window.getComputedStyle(special[j]);
            const transform2 = style2.getPropertyValue("height");
            for(var k=j;k>i;k--)
            {
                await change(special[k],special[k-1]);
                arr[k]=arr[k-1];
                special = document.querySelectorAll(".special");
            }

            special[i].style.height=transform2;
            await new Promise(resolve =>
                setTimeout(() => {
                resolve();
            }, delay2));

            special = document.querySelectorAll(".special");
            arr[i]=temp;
            j++;
            mid++;
        }

        special[tempj].style.background="#ebd35e";
        special[tempi].style.background="#ebd35e";

        if(low==0&&high==no_of_bar-1) 
            special[i].style.background="#6cdb7b";
        i++;
        
    }
    if(low==0&&high==no_of_bar-1)
    {
        for(var k=0;k<=no_of_bar-1;k++)
        special[k].style.background="#6cdb7b";
    }
}



async function merge_sort(low,high,delay2=1000)
{
   if(low<high)
   {
        var mid = Math.floor(low+(high-low)/2);
        await merge_sort(low,mid);
        await merge_sort(mid+1,high);
        await merge_arr(low,mid,high);
   }
}