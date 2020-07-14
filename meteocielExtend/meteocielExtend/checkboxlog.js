
const settingsDiv = document.querySelector(".settings");
const toggleSettings = document.querySelector("#toggleSettings");

const settings = [
  {key: "coucou", value: "coucou", lien:"Capture.png"},
  { key: "temperature", value: "Température", lien: "//meteociel.fr/cartes_obs/temp.png" },
  { key: "temperaturemin", value: "Température min", lien: "//meteociel.fr/cartes_obs/tn.png" },
  { key: "temperaturemax", value: "Temperature max", lien:"//meteociel.fr/cartes_obs/tx12.png" },
  { key: "temperaturemer", value: "Temperature mer", lien:"//meteociel.fr/cartes_obs/sst.gif" },
  { key: "pointrosée", value: "Point de rosée", lien:"//meteociel.fr/cartes_obs/pointrosee.png" },
  { key: "windchill", value: "Windchill - ressenti", lien:"//meteociel.fr/temps-reel/obs_villes.php?code2=7207" },
  { key: "humidex", value: "Humidex", lien:"//meteociel.fr/observations-meteo/humidex.php?region=no" },
  { key: "isobares", value: "Isobares", lien:"//meteociel.fr/cartes_obs/pression.png" },
  { key: "pression", value: "Pression", lien:"//meteociel.fr/cartes_obs/pression2.png" },
  { key: "ventmoy", value: "vent moyen", lien:"//meteociel.fr/cartes_obs/vent.png" },
  { key: "ventrafales", value: "Valeurs vent rafales", lien:"//meteociel.fr/temps-reel/obs_villes.php?code2=121" },
  { key: "nebulositer", value: "Nébulosité", lien:"//meteociel.fr/cartes_obs/nebu.png" },
  { key: "humidite", value: "Humidité", lien:"//meteociel.fr/temps-reel/obs_villes.php?code2=69" },
  { key: "pluie", value: "pluie 24h", lien:"//meteociel.fr/observations-meteo/rr.php?region=no" },
  { key: "ensoleillement", value: "Ensoleillement", lien:"//meteociel.fr/observations-meteo/enso.php?region=no" },
  { key: "satellite", value: "Satellite", lien:"//neige.meteociel.fr/satellite/anim_ir.gif" },
  { key: "foudre", value: "Impacts de foudre", lien:"//meteociel.fr/obs/foudre/latest2h.gif" },
  { key: "foudredirect", value: "Impacte en direct", lien:"" },
  { key: "radarhd", value: "Radar HD zoom", lien:"" },
  { key: "precipitaion", value: "Radar précipitation", lien:"//meteo60.fr/radars/animation-radar-france-simple.gif" },
  { key: "pluie/neige", value: "Radar pluie/neige", lien:"//meteociel.fr/observations-meteo/radar2.php?region=no&mode=1" },
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
    if(input.checked){
      var element = document.createElement("iframe");
      element.setAttribute("class","vueCarte");
      element.src = setting.lien;
      var block = document.getElementById("x");
      block.appendChild(element);
    }
  });

  label.appendChild(input);
  label.appendChild(labelText);
  settingsDiv.appendChild(label);
});


