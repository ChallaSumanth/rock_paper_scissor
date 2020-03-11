function rps(yourchoice)
{
    console.log(yourchoice);
    var humanchoice,schoice;
    humanchoice=yourchoice.id;
    schoice=numbertochoice(randtorpsint());
    console.log('computer choice', schoice);
    results=decidewinner(humanchoice,schoice);
    message=finalmessage(results);
    console.log(results);
    rpsfrontend(humanchoice,schoice,message);
}
function randtorpsint()
{
    return Math.floor(Math.random()*3);
}
function numbertochoice(number)
{
    return['rock','paper','scissor'][number]
}
function decidewinner(yourchoice,schoice)
{
    var rpdatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'rock':0,'paper':1,'scissor':0.5}
    };
    var yourscore=rpdatabase[yourchoice][schoice];
    var computerscore=rpdatabase[schoice][yourchoice];
    return[yourscore,computerscore];
    
}
function finalmessage([humanchoice,schoice])
{
    if(humanchoice===0)
    {
        return{'message':'you lost!','color':'red'};
    }
   else if(humanchoice===0.5)
    {
        return{'message':'you tied!','color':'yellow'};
    }
    else {
        return{'message':'you won!','color':'green'};
    }
    
}
function rpsfrontend(humanchoice,schoice,finalmessage)
{
    var imgdb={
        'rock':document.getElementById("rock").src,
        'paper':document.getElementById("paper").src,
        'scissor':document.getElementById("scissor").src
    };
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();
    var humandiv=document.createElement('div');
    var sdiv=document.createElement('div');
    var messagediv=document.createElement('div');
    humandiv.innerHTML="<img src='" +imgdb[humanchoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML="<h1 style='color:" +finalmessage['color'] +"; font-size:60px; padding:30px;'>" +finalmessage['message']+"</h1>"
    sdiv.innerHTML="<img src='" +imgdb[schoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    document.getElementById('rps').appendChild(humandiv);
    document.getElementById('rps').appendChild(sdiv);
    document.getElementById('rps').appendChild(messagediv);
}