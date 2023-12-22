const kmiFormSvoris = document.getElementById("kmiFormSvoris");
const kmiFormUgis = document.getElementById("kmiFormUgis");
const formDOM = document.getElementById("form");
const resultKmi = document.getElementById("resultKmi");
const resetBtn = document.getElementById("resetBtn");

let kmiFromInput = null;

formDOM.addEventListener("submit", (event) => {
  event.preventDefault();
  kmiUgis = kmiFormUgis.value;
  kmiSvoris = kmiFormSvoris.value;

  resetBtn.classList.remove('reset-btn-display-none')
  calculateKmi(kmiUgis, kmiSvoris);

});

resetBtn.addEventListener('click', (event)=>{
    resetBtn.classList.add('reset-btn-display-none')
    const kmiDomRezultatas = document.getElementById('kmiDomRezultatas')
    kmiDomRezultatas.remove();
    formDOM.reset();
    
})

function calculateKmi(kmiUgis, kmiSvoris) {
  const calculatedKmi = ((kmiSvoris / (kmiUgis * kmiUgis)) * 10000).toFixed(2);
  let text = "";
  let spalva = "";

  if (calculatedKmi <= 18.5) {
    spalva = 'yellow'
    text = `Jus sveriate ${kmiSvoris}, sveriate per mazai, jusu kuno mases indeksas
    yra: ${calculatedKmi}`;
  } else if (calculatedKmi > 18.5 && calculatedKmi <= 25) {
    spalva = 'green'
    text = `Jus sveriate ${kmiSvoris}, jusu svoris yra normalus, kuno mases indeksas
    yra: ${calculatedKmi}`;
  } else if (calculatedKmi > 25 && calculatedKmi <= 30) {
    spalva = 'orange'
    text = `Jus sveriate ${kmiSvoris}, sveriate siek tiek per daug, jusu kuno mases indeksas
    yra: ${calculatedKmi}`;
  } else if (calculatedKmi > 30) {
    spalva = 'red'
    text = `Jus sveriate ${kmiSvoris}, sveriate per daug, jusu kuno mases indeksas
    yra: ${calculatedKmi}`;
  }
  return renderKmiResult(text, spalva);
}

function renderKmiResult(text, spalva) {
  // const text = document.createTextNode("This just got added");

  const HTML = `<h2 id='kmiDomRezultatas' style="color: ${spalva}" class="title">${text}</h2>`;

  return (resultKmi.innerHTML = HTML);
}
