function calculator(){
    let n=document.getElementById("subjects").value;
    let total=0;
    for(let i=1;i<=n;i++)
    {
        let marks=parsefloat(prompt("Enter marks for subject "+i));
        total=total+marks;

    }

   let average=total/n;
   let grade;
   let result;
   if (average>90)
   {
    grade="A++";
   }
   else{
    if (average>75)
    {
        grade="A";
    }
    else{
        grade="B";
    }
   }

   if (average>=40)
   {
    result="Pass";
   }
   else{
    result="Fail";
   }

   document.getElementIdBy("result").innerhtml=
   
} 