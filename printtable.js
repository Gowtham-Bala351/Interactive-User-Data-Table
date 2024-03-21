var list1=[]
var list2=[]
var list3=[]
var list4=[]
  
   var x=0
   var n=1

function printdetails() {
       var AddRow =document.getElementById("display")
       var newRow =AddRow.insertRow(n)

    list1[x]=document.getElementById("fname").value;
    list2[x]=document.getElementById("lname").value;
    list3[x]=document.getElementById("email").value;
    list4[x]=document.getElementById("age").value;

    console.log(list1[x]);
    console.log(list2[x]);
    console.log(list3[x]);
    console.log(list4[x]);

    var cel1=newRow.insertCell(0)
    var cel2=newRow.insertCell(1)
    var cel3=newRow.insertCell(2)
    var cel4=newRow.insertCell(3)

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];


    x++
    n++



}
