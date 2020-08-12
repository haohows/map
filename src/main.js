import Vue from 'vue'
import App from './App.vue'


import * as VueGoogleMaps from 'vue2-google-maps'
import infoWindow from 'vue2-google-maps/dist/components/infoWindow' 

Vue.component('GmapInfoWindow', infoWindow)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCW7VmJqJDy2bNmbf8g-Xsb1LHEF8fbzzc',
    libraries: 'places',
  },
})


new Vue({
  el: '#app',
  render: h => h(App)
})
