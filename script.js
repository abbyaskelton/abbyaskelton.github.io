/* .js files add interaction to your website */
var factList = [
  "Speak up and educate others on global warming.",
  "Use renewable energy, like with solar panels, in your home.",
  "Make sure your home is properly insulated so energy isn't wasted.",
  "Buy energy-efficient appliances, like washing machines, dryers, and refrigerators.",
  "Reduce water waste by taking shorter showers, turning off the faucet when not using it, and use water-saving appliances.",
  "Only buy food you will eat, so energy used to proude it isn't wasted.",
  "Switch to LED lightbulbs in your home.",
  "Unplug devices when charged or when not being used.",
  "Drive a hybrid or electric vehicle.",
  "Keep your tires inflated so gas is not wasted.",
  "Take trains instead of airplanes.",
  "Ride your bicycle to work or school instead of driving your car.",
];

console.log(factList[0]);

var fact = document.getElementById("quicksolution");
var solutionButton = document.getElementById("solutionbutton");
var count = 0;
solutionButton.addEventListener("click", displayFact);
function displayFact() {
  quicksolution.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

