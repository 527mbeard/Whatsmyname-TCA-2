onclick: "GenerateName()"

function GenerateFunction() {

  getPrefix()
  getFirstName()
  getMiddlename()
  getLastname()
  getSuffix()


  NewName = `${prefix} + ${first} + ${middle} + ${last} + ${suffix}`

};


function getPrefix() {
  if (document.getElementById('1)').value === 'True') {
    prefix = "Agent";
  } else if (document.getElementById('2)').value === 'True') {
    prefix = "Sergeant";
  } else if (document.getElementById('3)').value === 'True') {
    prefix = "Captain";
  } else if (document.getElementById('4)').value === 'True') {
    prefix = "Officer";
  } else if (document.getElementById('5)').value === 'True') {
    prefix = "General";
  } else if (document.getElementById('6)').value === 'True') {
    prefix = "Private";
  } else if (document.getElementById('7)').value === 'True') {
    prefix = "Commander";
  } else if (document.getElementById('8)').value === 'True') {
    prefix = "Major";
  }
  return;
}
function getFirstName() {
  if (letter === 'a-e') {
    first = "Archer";
  } else if (letter === 'f-i') {
    first = "falcon";
  } else if (letter === 'j-n') {
    first = "jones";
  } else if (letter === 'o-r') {
    first = "orlando";
  } else if (letter === 's-z') {
    first = "sky";
  }
  return;
}


function getMiddlename() {
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
return;

function getPoints(value){
    switch(value){
        case 'glen':
            return 1;
        case 'miles':
            return 1;
        case 'anya':
            return 1;
        case 'jason':
            return 1;
        case 'john':
            return 1;
        case 'chris':
            return 1;
        case 'ryan':
            return 1;
        case 'idris':
            return 1;
        case 'ana':
            return 1;
        default:
            return 0;
    }
}

function getLastname() {
  if (actor === 'Glen Powell') {
    last = "Pheonix";
  } else if (actor === 'Miles Teller') {
    last = "Shadow";
  } else if (actor === 'Anya Taylor Joy') {
    last = "Powers";
  } else if (actor === 'Jason Statham') {
    last = "Hunter";
  } else if (actor === 'John Cena') {
    last = "Scorpian";
  } else if (actor === 'Chris Evans') {
    last = "Star";
  } else if (actor === 'Ryan Gosling') {
    last = "Metal";
  } else if (actor === 'Idris Elba') {
    last = "Echo";
  } else if (actor === 'Ana De Amras') {
    last = "Night";
  }
  return;
}

function getSuffix() {
  if (birth === 'January') {
    suffix = "Jr.";
  } else if (birth === 'February') {
    suffix = "Sr.";
  } else if (birth === 'March') {
    suffix = "PhD";
  } else if (birth === 'April') {
    suffix = "MD";
  } else if (birth === 'May') {
    suffix = "Jr.";
  } else if (birth === 'June') {
    suffix = "Sr.";
  } else if (birth === 'July') {
    suffix = "PhD";
  } else if (birth === 'August') {
    suffix = "MD";
  } else if (birth === 'September') {
    suffix = "Jr.";
  } else if (birth === 'October') {
    suffix = "Sr.";
  } else if (birth === 'November') {
    suffix = "PhD";
  } else if (birth === 'December') {
    suffix = "MD";
  }
  return;
}

