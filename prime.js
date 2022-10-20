//Problem 1 : Check whether a number is Prime or not

let num=23,count=0;

for(let i=1;i<=num;i++)
{
    if(num%i==0)
    {
    count++;
    }
    if(count>2)
    {
    break;
    }
}
if(count==3)    //Please change it to 2
{
console.log(num+" is Prime Number.");
}
else
{
    console.log(num+" is not a Prime Number.");   
}
