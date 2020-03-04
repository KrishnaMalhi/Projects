
function toDoList(){
    
    
    var subject = document.getElementById("subject").value;
    var dateIn = document.getElementById("dateIn").value;
    var description = document.getElementById("description").value;
    var output = subject + "  | " + dateIn;
    
    var createEle = document.createElement("li");
    createEle.className = "todolistI";
    createEle.style.color = "white";
    var eleNode = document.createTextNode(output);
    createEle.appendChild(eleNode);
    

    
    if(subject === '' || dateIn === '' || description === ''){
        alert("Kindly enter proper values");
    }else{
        
        document.getElementById("todomenue").appendChild(createEle);
        ViewButton();
        DeleteButton();        
    }
    
    document.getElementById("subject").value="";
    document.getElementById("dateIn").value="";
    document.getElementById("description").value="";
    
}


function ViewButton(){
    var description = document.getElementById("description").value;
    //======================Create view button===================
    var view = document.createElement("BUTTON");
    var txtView = document.createTextNode("View");
    view.className = "view";
    view.style.backgroundColor="green";
    view.style.marginRight="1%";
    view.appendChild(txtView);
    document.getElementById("todomenue").appendChild(view);
    
    //====================View button Functionallity=====================
    
//    view.onclick = function(){
//        var div = this.parentElement;
//        div.style.display = block;
//    }
    
}


function DeleteButton(){
    //============Create Delete Button======================
    var del = document.createElement("BUTTON");
    var txt = document.createTextNode("Delete");
    del.className = "delete";

    del.style.backgroundColor="lightblue";
    del.appendChild(txt);        
    document.getElementById("todomenue").appendChild(del);
    
    //==========Delete Button Functionallity=================

        del.onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
            
    }
}


//==============================Time of local machie============================
function Timer(){
    var timerX = new Date();

    
    var hours = timerX.getHours();
    var minutes = timerX.getMinutes();
    var seconds = timerX.getSeconds();

    var t = setTimeout(function () {
            Timer();
        }, 500);
    
    document.getElementById("timer-Display").innerHTML = hours + ":" + minutes + ":" + seconds;
}
Timer();

//==============================counter============================

//function Counter(){
//    
////    var count = 0;
//    var play = document.createElement("BUTTON");
//    var playText = document.createTextNode("Play");
//    play.appendChild(playText);
//    play.style.marginRight="1%";
//    document.getElementById("counter-Buttons").appendChild(play);
//    
//    var pause = document.createElement("BUTTON");
//    var pauseText = document.createTextNode("Pause");
//    pause.appendChild(pauseText);
//    pause.style.marginRight="1%";
//    document.getElementById("counter-Buttons").appendChild(pause);
//    
//    var reset = document.createElement("BUTTON");
//    var resetText = document.createTextNode("reset");
//    reset.appendChild(resetText);
//    document.getElementById("counter-Buttons").appendChild(reset);
//    document.getElementById("counter-Display").innerHTML=count;
//    
////    play.onclick = function(){
//////        reset.preventDefault();
////        counterX(true);
////    }
////    
////    pause.onclick = function(e){
//////        reset.preventDefault();
////        counterX();
////    }
////    
////    reset.onclick = function(e){
//////        reset.preventDefault();
////        counterX(false);
////    }
//    
//    
//}
//Counter();

//================Counter Functionallity============================
//var count = 0;
//function counterX(){
    
    var counta = document.getElementById("counter-Display");
    
    
    miliseconds = 0;
        seconds = 0;
         minutes = 0;
        
        function add(){
            
            
        miliseconds++;
        
        if(miliseconds >= 60){
            seconds++;
            miliseconds = 0;
        }else if(seconds >= 60){
            minutes++;
            seconds = 0;
        }
        
        counta.innerHTML = (minutes ? (minutes >9 ? minutes : '0' + minutes) : "00") + " : " + 
            (seconds ? (seconds >9 ? seconds : '0' + seconds) : "00") + " : " + 
            (miliseconds ? (miliseconds >9 ? miliseconds : '0' + miliseconds) : "00") ;
            startTimer();
    }
    
    function startTimer(){
        stop = setTimeout(function(){
            add();
        },20);
    }
    
    function stopTimer(){
        clearTimeout(stop);
    }

    function resetTimer(){
        clearTimeout(stop);
        counta.innerHTML = "00:00:00";
        miliseconds = 0;
        seconds = 0;
        minutes = 0;
    }
    
//    if(true){
//        count++;
//
//        document.getElementById("counter-Display").innerHTML=count;
//        
//        t=setTimeout(function(){
//            counterX();
//        }),500;
//        
//    }
//    else if(false){
//        count = 0;
//        document.getElementById("counter-Display").innerHTML=count;
//    }
    
    
//}







