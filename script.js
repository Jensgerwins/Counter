const scala = document.querySelector("main");
const resetButton = document.querySelector(".reset-button");
const counter = document.querySelector("label");
const body = document.querySelector("body");
let counterNumber= 0;
let colorWidth=0;
//article.style.width = "50%";


scala.addEventListener("click" , (countdown));
resetButton.addEventListener("click", (resetCountdown)  );
document.addEventListener("keypress", function (e) {
   console.log(EventTarget);
    console.log(e.key);
    if(["Enter", " "].includes(e.key)){
    countdown();
    }
});  

















function resetCountdown () {
    counterNumber = 0;
    counter.innerText = counterNumber;
    colorWidth=0;
    scala.style.setProperty("--counter", colorWidth + "%");

}





function countdown () {
counterNumber++;
counter.innerText = counterNumber;

colorWidth++;
if(colorWidth === 101){
    colorWidth =0;
}


scala.style.setProperty("--counter", colorWidth + "%");


}