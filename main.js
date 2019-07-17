const rapperBox = document.getElementById("rapArtist").value;
const rapperList = document.getElementById("rappers");
var newRapperAdded = 1;

function addNew (){
  // let rapperBox innerHTML is what the user types in 
  // console.log(e);
  const rapperBox = document.getElementById("rapArtist").value;
  rapperList.innerHTML += "<li>  " + rapperBox + "</li>";
  newRapperAdded++;

};


const rapEvent = () =>{
const addRap = document.getElementById("addRap");
addRap.addEventListener('click',addNew);
};
rapEvent();



//   newRapperCounter++;



