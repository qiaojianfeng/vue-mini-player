<template>
  <div class="_progress">
    <span class="_time-current">{{currentTime}}</span>
    <div class="_slider">
      <div class="_slider-cur"
           :style="{width:offsetLeft}"></div>
      <i class="_slider-btn"
         :style="{left:offsetLeft}"></i>
    </div>
    <span class="_time-amount">{{totalTime}}</span>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      totalTime: '00:00',
      currentTime: '00:00',
      offsetLeft: 0
    };
  },
  computed: {
    $video() {
      return this.$parent.$parent.$video;
    }
  },
  watch: {},
  methods: {
    formatTime(time) {
      let m = ~~(time / 60);
      let s = ~~(time % 60);
      m = m > 9 ? m : `0${m}`;
      s = s > 9 ? s : `0${s}`;
      return `${m}:${s}`;
    },
    // initLoadingTimer() {
    //   const timer = setInterval(() => {
    //     const currentTime = this.$video.currentTime;
    //     this.currentTime = this.formatTime(currentTime);
    //   }, 100);
    //   this.$once('hook:beforeDestroy', () => {
    //     clearInterval(timer);
    //   });
    // },
    updateSlider() {
      const ratio = (this.$video.currentTime / this.$video.duration) * 100;
      this.offsetLeft = `${ratio}%`;
    },
    initVideoEvents() {
      const events = ['pause', 'play', 'waiting', 'timeupdate', 'durationchange'];
      events.forEach(e => {
        this.$video.addEventListener(e, this[`handle${e.toLowerCase().replace(/^./, f => f.toUpperCase())}`]);
      });
    },
    handleDurationchange() {
      const totalTime = this.$video.duration;
      this.totalTime = this.formatTime(totalTime);
    },
    handleTimeupdate() {
      const currentTime = this.$video.currentTime;
      this.currentTime = this.formatTime(currentTime);
      this.updateSlider();
    },
    handlePause() {},
    handlePlay() {},
    handleWaiting() {}
  },
  mounted() {
    this.$nextTick(() => {
      this.initVideoEvents();
    });
  }
};
</script>

<style lang="scss" scoped>
._progress {
  color: #fff;
  width: 100%;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  box-sizing: border-box;
  ._time-current,
  ._time-amount {
    font-size: 1em;
  }
  ._slider {
    width: 100%;
    height: 0.4em;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    position: relative;
    margin: 0 1em;
    ._slider-cur {
      width: 0;
      height: 100%;
      border-radius: 4px;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }
    ._slider-btn {
      width: 1em;
      height: 1em;
      display: inline-block;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
}
</style>

