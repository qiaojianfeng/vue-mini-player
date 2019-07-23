<template>
  <div class="qun-player"
       ref="container">
    <div class="_poster"
         :style="{backgroundImage:`url(${options.cover})`}"
         v-show="!isPlaying&&isStart"></div>
    <template v-show="isPlaying">
      <video class="_video-ref"
             webkit-playsinline
             playsinline
             x5-video-player-fullscreen
             crossorigin="anonymous"
             ref="video"
             preload="auto"
             :poster="options.cover">
        <source v-for="(item, index) in vUrl"
                :key="index"
                :src="item"
                :type="`audio/${getUrlType(item)}`">
        Your browser does not support the video element.
      </video>
      <PlayBtn :isPlaying.sync="isPlaying" />
      <BaseControls />
    </template>
  </div>
</template>
<script>
import BaseControls from './BaseControls';
import PlayBtn from './PlayBtn';
const VERSION = require('../../../package.json').version;

export default {
  name: 'VueMiniPlayer',
  components: {
    BaseControls,
    PlayBtn
  },
  props: {
    video: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        width: '100%',
        height: '200px',
        muted: false,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      },
      $video: null,
      $container: null,
      isStart: true,
      isPlaying: false
    };
  },
  watch: {
    isPlaying() {
      this.isStart = false;
      this.play();
    }
  },
  computed: {
    vUrl() {
      let url = this.video.url || [];
      if (typeof url === 'string') {
        url = [url];
      } else if (Object.prototype.toString.call(url) === '[object Object]') {
        console.warn(new Error('视频URL只接受String或者Array'));
        return [];
      }
      return url;
    },
    // 合并默认和用户自定义属性配置
    options() {
      return Object.assign({}, this.baseVideo, this.video);
    }
  },
  methods: {
    getUrlType(url) {
      return url.match(/[^\.]+$/);
    },
    init() {
      this.$video = this.$refs.video;
      this.$container = this.$refs.container;
      this.initPlayer();
      if (this.options.autoplay) this.play();
      // document.body.addEventListener('mousemove', this.mouseMoveAction, false);
      // document.body.addEventListener('mouseup', this.mouseUpAction, false);
      // document.body.addEventListener('keydown', this.keydownAction, false);
      window.addEventListener('resize', this.resizeAction, false);
    },
    initPlayer() {
      const vol = this.options.volume;
      this.$video.volume = vol;
    },
    play() {
      if (this.isPlaying) {
        this.$video.play();
      } else {
        this.$video.pause();
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.init();
    });
  },
  mounted() {
    console.log(
      '\n' + ' %c vue-mini-player v' + VERSION + ' %c https://github.com/webweifeng/vue-mini-player ' + '\n' + '\n',
      'color: #fadfa3; background: #030307; padding:5px 0;',
      'background: #fadfa3; padding:5px 0;'
    );
  },
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.qun-player {
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
  &:fullscreen,
  &:-webkit-full-screen,
  &:-moz-full-screen,
  &:-ms-fullscreen {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100000;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    transform: translate(0, 0);
  }
  ._poster {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  ._video-ref {
    background: #000;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    &::-webkit-media-controls,
    &::-webkit-media-controls-enclosure {
      display: none !important;
    }
  }
}
</style>

