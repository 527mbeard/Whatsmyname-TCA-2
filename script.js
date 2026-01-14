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
  if (document.getElementById('1').value === 'True') {return  "Agent";} 
  else if (document.getElementById('2').value === 'True') {return  "Sergeant";} 
  else if (document.getElementById('3').value === 'True') {return  "Captain";} 
  else if (document.getElementById('4').value === 'True') {return  "Officer";} 
  else if (document.getElementById('5').value === 'True') {return  "General";} 
  else if (document.getElementById('6').value === 'True') {return  "Private";} 
  else if (document.getElementById('7').value === 'True') {return  "Commander";} 
  else if (document.getElementById('8').value === 'True') {return  "Major";}
 
}
function getFirstName() {
  if (document.getElementById('9').value === 'True'){ return  "Archer";} 
  else if (document.getElementById('10').value === 'True') {return  "falcon";} 
  else if (document.getElementById('11').value === 'True') {return  "jones";} 
  else if (document.getElementById('12').value === 'True') {return  "orlando";} 
  else if (document.getElementById('13').value === 'True') {return  "sky";}
 
}


function getMiddlename() {
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
  if (document.getElementById('14').value === 'True') {return  "Pheonix";} 
  else if (document.getElementById('15').value === 'True') {return  "Shadow";} 
  else if (document.getElementById('16').value === 'True') {return  "Powers";} 
  else if (document.getElementById('17').value === 'True') {return  "Hunter";} 
  else if (document.getElementById('18').value === 'True') {return  "Scorpian";} 
  else if (document.getElementById('19').value === 'True') {return  "Star";} 
  else if (document.getElementById('20').value === 'True') {return  "Metal";} 
  else if (document.getElementById('21').value === 'True') {return  "Echo";} 
  else if (document.getElementById('22').value === 'True') {return  "Night";}

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


