<template>
  <div id="app">
    <h1>輔大資訊中心－午餐地圖</h1>
    <div class="container">
      <gmap-map :center="center" :zoom="16" style="width: 100%; height: 450px" :options="options">
        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
        ></gmap-info-window>

        <gmap-marker
          :key="i"
          v-for="(m,i) in markers"
          :draggable="false"
          :position="m.position"
          :clickable="true"
          :icon="icon"
          :animation="1"
          @click="toggleInfoWindow(m,i)"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
        gestureHandling: "cooperative",
      },
       icon: 'http://fjwaa.fju.edu.tw/images/icon-marker.png',
      center: {
        lat: 25.03429,
        lng: 121.432598,
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,

      infoOptions: {
        content: "",
        pixelOffset: {
          width: 0,
          height: -45,
        },
        maxWidth: 500,
      },
      markers: [
        {
          position: {
            lat: 25.03549,
            lng: 121.431698,
          },
          infoText: `
            <div class="title">輔大資訊中心</div>
            <div class="text">辦公室在這裡唷！(揮手)</div>
          `,
        },
        {
          position: {
            lat: 25.034715,
            lng: 121.430408,
          },
          infoText: `
             <div class="title">7-11 輔明門市</div>
            <div class="text">拉肚子的人只能吃這間，好可憐~!</div>
          `,
        },
        {
          position: {
            lat: 25.033030,
            lng: 121.432869,
          },
          infoText: `
             <div class="title">晨間廚房</div>
            <div class="text">一不小心就踩雷的地方...</div>
          `,
        },
         {
          position: {
            lat: 25.031695,
            lng: 121.433785,
          },
          infoText: `
             <div class="title">低GI</div>
            <div class="text">怎樣！雞胸肉就是吃不膩辣!!</div>
          `,
        },
      ],
    };
  },
  methods: {
    toggleInfoWindow(marker, idx) {
      console.log(this.infoWindowPos);
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;

      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  font-weight: bold;
  font-family: "微軟正黑體";
  font-size: 18px;
  text-align: left;
}
.text {
  font-family: "微軟正黑體";
  font-size: 14px;
  font-weight: bold;
  color: blue;
  text-align: left;
}

.container{
  width: 80vw;
  margin: 0 auto;
}

h1{
  font-family: "微軟正黑體";
}
</style>
