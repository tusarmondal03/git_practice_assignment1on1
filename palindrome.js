//Problem 2 : Check whether a string is palindrome or not.

let str1="madam";
let str2="";

for(let i=str1.length-1;i>=0;i--)
  {
    str2+=str1[i];
  }
if(str1==str2)  //code have been updated
{
  console.log("String \""+str1+"\" is Palindrome");
}
else
{
  console.log("String \""+str1+"\" is not a palindrome");
}
console.log("Thank You");