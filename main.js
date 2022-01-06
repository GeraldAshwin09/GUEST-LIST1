var finalarray=[];
function submit()
{
    var d=[];
for(var i=0;i<1;i++){
    var st=document.getElementById("box").value;
    finalarray.push(st);
}
var len=finalarray.length;
for(var k=0;k<len;k++)
{
    d.push("<h4> Name-"+finalarray[k]+"</h4>");
    document.getElementById("display_div").innerHTML=d;
}
}

function search()
{
    var j;
    var found=0;
    var s=document.getElementById("box").value;
    for(j=0;j<finalarray.length;j++)
    {
        if(s==finalarray[j]);{
        found=found+1;
        }
        document.getElementById("display_div1").innerHTML="name<br>found"+found+ "<br>times/s";
    }
}