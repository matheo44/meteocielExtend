const settingsDiv = document.querySelector(".settings");
const toggleSettings = document.querySelector("#toggleSettings");

const settings = [
  { key: "temperature", value: "Température" },
  { key: "temperaturemin", value: "Température min" },
  { key: "temperaturemax", value: "Temperature max" },
  { key: "temperaturemer", value: "Temperature mer" },
  { key: "pointrosée", value: "Point de rosée" },
  { key: "windchill", value: "Windchill - ressenti" },
  { key: "humidex", value: "Humidex" },
  { key: "isobares", value: "Isobares" },
  { key: "pression", value: "Pression" },
  { key: "ventmoy", value: "vent moyen" },
  { key: "ventrafales", value: "Valeurs vent rafales" },
  { key: "nebulositer", value: "Nébulosité" },
  { key: "humidite", value: "Humidité" },
  { key: "pluie", value: "pluie 24h" },
  { key: "ensoleillement", value: "Ensoleillement" },
  { key: "satellite", value: "Satellite" },
  { key: "foudre", value: "Impacts de foudre" },
  { key: "foudredirect", value: "Impacte en direct" },
  { key: "radarhd", value: "Radar HD zoom" },
  { key: "precipitaion", value: "Radar précipitation" },
  { key: "pluie/neige", value: "Radar pluie/neige" },
];

toggleSettings.addEventListener("change", () => {
  document.querySelectorAll("input").forEach(input => {
    if (input.type === "checkbox") {
      input.checked = toggleSettings.checked;
    }
  });
});

settings.forEach(setting => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const labelText = document.createTextNode(setting.value);

  input.setAttribute("type", "checkbox");
  input.addEventListener("change", () => {
    console.log(`${setting.value} Is ${input.checked}`);
  });

  label.appendChild(input);
  label.appendChild(labelText);
  settingsDiv.appendChild(label);
});

settings.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e)
});