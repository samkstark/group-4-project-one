//HTML selectors
const newCharacterBtn = document.getElementsByClassName('new-character');
const savedBtn = document.getElementsByClassName('saved');
const containerEl = document.getElementsByClassName('container');
const imgEl = document.getElementsByClassName('placeholder-Image');
const raceEl = document.getElementById('race');
const classEl = document.getElementById('class')
const alignmentEl = document.getElementById('alignment')
const statsContainerEl = document.getElementsByClassName('container-Stats');
const strengthEl = document.getElementById('strength');
const dexterityEl = document.getElementById('dexterity');
const constitutionEl = document.getElementById('constitution');
const intelligenceEl = document.getElementById('intelligence');
const wisdomEl = document.getElementById('wisdom');
const charismaEl = document.getElementById('charisma');
const statsEl = document.getElementsByClassName('stats');
const genBtn = document.getElementById('Gen-Btn');
const statId = document.getElementById('stat');


//DND5E API selectors
const apiServerUrl = `https://www.dnd5eapi.co`;
const apiClassUrl = `/api/classes/`;
const apiRaceUrl = `/api/races/`;
const apiAlignmentUrl = `/api/alignments/`;

//Dog API selectors
const dogApiUrl = `https://dog.ceo/api/breeds/image/random`



genBtn.addEventListener('click', statGen)


//random stats function
function statGen() {
  var statArray = [];
  for (i = 0; i < 6; i++) {
    var statNumber = Math.floor(Math.random() * 16) + 4
    statArray.push(statNumber); 
  }

  strengthEl.innerHTML = `<p id="strength"> Strength: ${statArray[0]}</p>`
  dexterityEl.innerHTML = `<p id="dexterity"> Dexterity: ${statArray[1]}</p>`
  constitutionEl.innerHTML = `<p id="constitution"> Constitution: ${statArray[2]}</p>`
  intelligenceEl.innerHTML = `<p id="intelligence"> Intelligence: ${statArray[3]}</p>`
  wisdomEl.innerHTML = `<p id="wisdom"> Wisdom: ${statArray[4]}</p>`
  charismaEl.innerHTML = `<p id="charisma"> Charisma: ${statArray[5]}</p>`
}





fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data));
  



//DnD5E API fetch
fetch('https://www.dnd5eapi.co/api/classes/')
  .then((response) => response.json())
  .then((data) => console.log(data));







  
  
  