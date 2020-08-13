<template>
  <div id="app">
    <h1 style="font-family:'微軟正黑體'">輔大資訊中心－午餐地圖</h1>
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

      <div class="select-wrap">
        <div class="input-group shadow">
          <select class="custom-select" v-model="selectMark">
            <option value="null" disabled>--選擇地點--</option>
            <option v-for="item in markers" :key="item.id" :value="item">{{item.name}}</option>
          </select>
          <div class="input-group-append">
            <button class="btn btn-dark" type="button" @click="location">定位</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectMark: null,
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
      icon: "http://fjwaa.fju.edu.tw/images/icon-marker.png",
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
          id: 1,
          name: "輔大資訊中心",
          position: {
            lat: 25.03549,
            lng: 121.431698,
          },
          infoText: `
            <div class="title">輔大資訊中心</div>
            <div class="text">辦公室在這裡唷！(揮手)</div>
            <div class="expression">( ﾟ∀ﾟ)o彡ﾟ</div>
          `,
        },
        {
          id: 2,
          name: "7-11 輔明門市",
          position: {
            lat: 25.034715,
            lng: 121.430408,
          },
          infoText:
            `
             <div class="title">7-11 輔明門市</div>
            <div class="text">拉肚子的人只能吃這間，好可憐~!</div>
          ` + '<div class="expression"> ( ´･･)ﾉ(._.`) </div>',
        },
        {
          id: 3,
          name: "晨間廚房",
          position: {
            lat: 25.03303,
            lng: 121.432869,
          },
          infoText: `
             <div class="title">晨間廚房</div>
            <div class="text">一不小心就踩雷的地方...</div>
            <div class="expression">(╯‵□′)╯︵┴─┴</div>
          `,
        },
        {
          id: 4,
          name: "低GI",
          position: {
            lat: 25.031695,
            lng: 121.433785,
          },
          infoText: `
             <div class="title">低GI</div>
            <div class="text">怎樣！雞胸肉就是吃不膩辣!!</div>
            <div class="expression"> (╯✧∇✧)╯</div>
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
    location() {
      this.toggleInfoWindow(this.selectMark, this.selectMark.id);
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
  font-family: "微軟正黑體";
}

.title {
  font-weight: bold;

  font-size: 18px;
  text-align: left;
}
.text {
  font-size: 14px;
  font-weight: bold;
  color: blue;
  text-align: left;
}
.expression {
  margin: 10px 0px;
  font-weight: bold;

  text-align: left;
  font-size: 20px;
}

.container {
  width: 60vw;
  margin: 0 auto;
  position: relative;
}

.select-wrap {
  width: 200px;
  position: absolute;
  top: 10px;
  left: 30px;
}
</style>
