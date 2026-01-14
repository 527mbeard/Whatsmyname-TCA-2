function generateName() {
 
  // getMiddlename()
  let actor = document.getElementById("lastName").value 
  // getLastname()
  // let month = document.getElementById("suffix").value 
  // getSuffix()

  const NewName = `${getPrefix()} + ${getFirstName()} + ${getMiddlename()} + ${getLastname()} + `
  document.getElementById('result').innerText = NewName

  // 1. Access the input element using its ID
const dateInput = document.getElementById('birthday');

// 2. Get the value of the input
const selectedDateString = dateInput.value;

// Log the result to the console
console.log(selectedDateString); 
};


function getPrefix() {
  if (document.getElementById('one').value === 'true') {return  "Agent";} 
  else if (document.getElementById('two').value === 'true') {return  "Sergeant";} 
  else if (document.getElementById('three').value === 'true') {return  "Captain";} 
  else if (document.getElementById('four').value === 'true') {return  "Officer";} 
  else if (document.getElementById('five').value === 'true') {return  "General";} 
  else if (document.getElementById('six').value === 'true') {return  "Private";} 
  else if (document.getElementById('seven').value === 'true') {return  "Commander";} 
  else if (document.getElementById('eight').value === 'true') {return  "Major";}
 
}
function getFirstName() {
  if (document.getElementById('nine').value === 'true'){ return  "Archer";} 
  else if (document.getElementById('ten').value === 'true') {return  "falcon";} 
  else if (document.getElementById('eleven').value === 'true') {return  "jones";} 
  else if (document.getElementById('twelve').value === 'true') {return  "orlando";} 
  else if (document.getElementById('thirteen').value === 'true') {return  "sky";}
 
}


function getmiddleName() {
   let color = document.getElementById("middleName").value.toLowerCase     
  switch (color) {
    case 'red': middleName = 'crazy'; break;
    case 'orange': middleName = 'sneaky'; break;
    case 'yellow': middleName = 'fast'; break;
    case 'green': middleName = 'quiet'; break;
    case 'blue': middleName = 'dark'; break;
    case 'purple': middleName = 'mysterious'; break;
    case 'pink': middleName = 'hidden'; break;
    case 'black': middleName = 'secret'; break;
    case 'brown': middleName = 'sinister'; break;
  }
}


// function getPoints(value){
//     switch(value){
//         case 'glen':
//             return 1;
//         case 'miles':
//             return 1;
//         case 'anya':
//             return 1;
//         case 'jason':
//             return 1;
//         case 'john':
//             return 1;
//         case 'chris':
//             return 1;
//         case 'ryan':
//             return 1;
//         case 'idris':
//             return 1;
//         case 'ana':
//             return 1;
//         default:
//             return 0;
//     }
// }

function getLastname() {
  if (document.getElementById('fourteen').value === 'true') {return  "Pheonix";} 
  else if (document.getElementById('fifthteen').value === 'true') {return  "Shadow";} 
  else if (document.getElementById('sixteen').value === 'true') {return  "Powers";} 
  else if (document.getElementById('seventeen').value === 'true') {return  "Hunter";} 
  else if (document.getElementById('eighteen').value === 'true') {return  "Scorpian";} 
  else if (document.getElementById('nineteen').value === 'true') {return  "Star";} 
  else if (document.getElementById('twenty').value === 'true') {return  "Metal";} 
  else if (document.getElementById('twentyone').value === 'true') {return  "Echo";} 
  else if (document.getElementById('twentytwo').value === 'true') {return  "Night";}

}
/* 
function getSuffix() {
  if (document.getElementById('23)').value === 'True') {return  "Jr.";} 
  else if (document.getElementById('24)').value === 'True') {return  "Sr.";} 
  else if (document.getElementById('25)').value === 'True') {return "PhD";} 
  else if (document.getElementById('26)').value === 'True') {return "MD";} 
  else if (document.getElementById('27)').value === 'True') {return  "Jr.";} 
  else if (document.getElementById('28)').value === 'True') {return  "Sr.";} 
  else if (document.getElementById('29)').value === 'True') {return  "PhD";} 
  else if (document.getElementById('30)').value === 'True') {return  "MD";} 
  else if (document.getElementById('31)').value === 'True') {return  "Jr.";}
  else if (document.getElementById('32)').value === 'True') {return  "Sr.";} 
  else if (document.getElementById('33)').value === 'True') {return  "PhD";} 
  else if (document.getElementById('34)').value === 'True') {return  "MD";}
}

 
 */


