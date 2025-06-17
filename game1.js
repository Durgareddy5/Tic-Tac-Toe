let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newgame-btn");
let  msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;//playerx  playerO
const  winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        // console.log("box was clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X"
            turn0=true;
        }
        box.disabled=true;
        checkwinner();



    });
});
const resetgame= ()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const enableboxes = () =>{
    for(let box of boxes)
    {
      box.disabled=false;
      box.innerText="";
    }
}

const disableboxes = () =>{
      for(let box of boxes)
      {
        box.disabled=true;
      }
}
const showwinner = (winner) =>{
   msg.innerText=`Congratulations,  winner is  ${winner}`;
   msgcontainer.classList.remove("hide");
   disableboxes();

}


const checkwinner = () => {
 for(pattern of winpatterns)
 {
    
    // console.log([pattern[0]], [pattern[1]], [pattern[2]]);
    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

   let pos1val=boxes[pattern[0]].innerText;
   let pos2val=boxes[pattern[1]].innerText;
   let pos3val=boxes[pattern[2]].innerText;
  
   if(pos1val!="" && pos2val!="" && pos3val!="")
   {
    if(pos1val===pos2val && pos2val===pos3val)
    {
    //  console.log("winner", pos1val);
     showwinner(pos1val);
    }
   }


 }
}

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

