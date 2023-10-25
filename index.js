
function getRndInteger(min, max) {
    //get a random number
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function roll(){
    //get new images then update the src location for the images
    //finally declare the winner

    //array of all the file names
    let imagename = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]

    //small animation
    for(i=0;i<100;i++){
        document.querySelector(".img1").setAttribute("src","images/dice"+getRndInteger(1,6)+".png")
        document.querySelector(".img2").setAttribute("src","images/dice"+getRndInteger(1,6)+".png")
        await sleep(1);
    }
    
    //random numbers
    let firstnum = getRndInteger(1,6)
    let secondnum = getRndInteger(1,6)
    document.querySelector(".img1").setAttribute("src",imagename[firstnum-1])
    document.querySelector(".img2").setAttribute("src",imagename[secondnum-1])



    if(firstnum > secondnum){
        // player 1 is higher so edit the html to say that
        document.querySelector("div h1").textContent = "Player 1 has won!"

    }else if(firstnum< secondnum){
        document.querySelector("div h1").textContent = "Player 2 has won!"

    }else{
        document.querySelector("div h1").textContent = "Draw!"
    }

}   