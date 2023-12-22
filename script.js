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

  if(kmiUgis.length && kmiSvoris.length && Number(kmiUgis) > 0 && Number(kmiSvoris) > 0){
      resetBtn.classList.remove('reset-btn-display-none')
      return calculateKmi(kmiUgis, kmiSvoris);
  }
    
  if(!kmiUgis && !kmiSvoris || Number(kmiUgis) <= 0 || Number(kmiSvoris) <= 0){
    resetBtn.classList.remove('reset-btn-display-none')
   return renderError('Prašom patikrinti įvestus skaičius');
  }

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
    text = `Jūs sveriate ${kmiSvoris} kg, sveriate per mažai, jūsų kūno masės indeksas
    yra: ${calculatedKmi}`;
  } else if (calculatedKmi > 18.5 && calculatedKmi <= 25) {
    spalva = 'green'
    text = `Jūs sveriate ${kmiSvoris} kg, jūsų svoris yra normalus, kūno masės indeksas
    yra: ${calculatedKmi}`;
  } else if (calculatedKmi > 25 && calculatedKmi <= 30) {
    spalva = 'orange'
    text = `Jūs sveriate ${kmiSvoris} kg, sveriate šiek tiek per daug, jūsų kūno masės indeksas
    yra: ${calculatedKmi}`;
  } else if (calculatedKmi > 30) {
    spalva = 'red'
    text = `Jūs sveriate ${kmiSvoris} kg, sveriate per daug, jūsų kūno masės indeksas
    yra: ${calculatedKmi}`;
  }
  return renderKmiResult(text, spalva);
}

function renderError(text){

    const HTML = `<h2 id='kmiDomRezultatas' style="color: red" class="title">${text}</h2>`;
    return (resultKmi.innerHTML = HTML);
}

function renderKmiResult(text, spalva) {
  const HTML = `<h2 id='kmiDomRezultatas' style="color: ${spalva}" class="title">${text}</h2>`;

  return (resultKmi.innerHTML = HTML);
}
