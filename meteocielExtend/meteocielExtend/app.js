const App = {
    data() {
      return {
        message: "hello world !",
        images: [
          {key: "coucou", value: "coucou", lien:"Capture.png"},
          { key: "temperature", selected: false, url: "//meteociel.fr/cartes_obs/temp.png" },
          { key: "temperaturemin", selected: false, url: "//meteociel.fr/cartes_obs/tn.png" },
          { key: "temperaturemax", selected: false, url:"//meteociel.fr/cartes_obs/tx12.png" },
          { key: "temperaturemer", selected: false, url:"//meteociel.fr/cartes_obs/sst.gif" },
          { key: "pointrosée", selected: false, url:"//meteociel.fr/cartes_obs/pointrosee.png" },
          { key: "windchill", selected: false, url:"//meteociel.fr/temps-reel/obs_villes.php?code2=7207" },
          { key: "humidex", selected: false, url:"//meteociel.fr/observations-meteo/humidex.php?region=no" },
          { key: "isobares", selected: false, url:"//meteociel.fr/cartes_obs/pression.png" },
          { key: "pression", selected: false, url:"//meteociel.fr/cartes_obs/pression2.png" },
          { key: "ventmoy", selected: false, url:"//meteociel.fr/cartes_obs/vent.png" },
          { key: "ventrafales", selected: false, url:"//meteociel.fr/temps-reel/obs_villes.php?code2=121" },
          { key: "nebulositer", selected: false, url:"//meteociel.fr/cartes_obs/nebu.png" },
          { key: "humidite", selected: false, url:"//meteociel.fr/temps-reel/obs_villes.php?code2=69" },
          { key: "pluie", selected: false, url:"//meteociel.fr/observations-meteo/rr.php?region=no" },
          { key: "ensoleillement", selected: false, url:"//meteociel.fr/observations-meteo/enso.php?region=no" },
          { key: "satellite", selected: false, url:"//neige.meteociel.fr/satellite/anim_ir.gif" },
          { key: "foudre", selected: false, url:"//meteociel.fr/obs/foudre/latest2h.gif" },
          { key: "foudredirect", selected: false, url:"" },
          { key: "radarhd", selected: true, url:"Capture.jpeg" },
          { key: "precipitaion", selected: false, url:"//meteo60.fr/radars/animation-radar-france-simple.gif" },
          { key: "pluie/neige", selected: false, url:"//meteociel.fr/observations-meteo/radar2.php?region=no&mode=1" },
        ]
      }
    }
  }
  Vue.createApp(App).mount('#App')