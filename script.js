const kmi = document.getElementById("kmiForm");
const formDOM = document.getElementById("form");
const resultKmi = document.getElementById("resultKmi");

let kmiFromInput = null;

formDOM.addEventListener("submit", (event) => {
  event.preventDefault();
  kmiFromInput = kmi.value;
  calculateKmi(kmiFromInput);
});

function calculateKmi(kmiFromInput) {
  const calculatedKmi = Number(kmiFromInput) * 5;
  return renderKmiResult(calculatedKmi);
}

function renderKmiResult(calculatedKmi) {
    const text = document.createTextNode("This just got added");

    const HTML = `<h2 class="title">${calculatedKmi}</h2>`;

    return resultKmi.innerHTML=HTML;
}
