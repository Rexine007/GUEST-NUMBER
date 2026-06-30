   let guessnumber=document.getElementById("checknumber")
    let result=document.getElementById("result");
    let score=document.getElementById("score")
    let randomnumber= Math.floor(Math.random()*10)+1;
    let totalscore =10

    function check()
    {
        let enternumber = guessnumber.value;
        if(randomnumber==enternumber)
    {
        console.log("Right")
        result.textContent="Right"
        alert("Your Won...")
    }
    else
    {
        totalscore=totalscore-1
        score.textContent="score:"+totalscore

        console.log("Wrong")
        result.textContent="Wrong"
    }

    }