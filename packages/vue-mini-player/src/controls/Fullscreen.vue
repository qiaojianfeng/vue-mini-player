<template>
  <div class="_fullscreen"
       @click.stop="handleClickToggle">
    <svg viewBox="0 0 40 40"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none"
         stroke-width="1"
         fill="none"
         fill-rule="evenodd"
         stroke-linecap="round"
         stroke-linejoin="round">
        <g transform="translate(-670.000000, -354.000000)"
           stroke="#FFFFFF"
           stroke-width="5">
          <g transform="translate(670.000000, 354.000000)">
            <path d="M35,20 L35,34 C35,34.5522847 34.5522847,35 34,35 L20,35 M5,20 L5,6 C5,5.44771525 5.44771525,5 6,5 L6,5 L20,5"></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isFullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    $video() {
      return this.$parent.$parent.$video;
    },
    $container() {
      return this.$parent.$parent.$container;
    }
  },
  watch: {},
  methods: {
    handleClickToggle() {
      if (this.isFullscreen) {
        this.resetFullScreen();
      } else {
        this.reqFullScreen(this.$container);
      }
    },
    setFullscreenState() {
      const fullEle =
        document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
      this.$emit('update:isFullscreen', !!fullEle);
    },
    reqFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.webkitEnterFullscreen) {
        element.webkitEnterFullscreen();
      } else if (this.$video.webkitEnterFullscreen) {
        // Safari for iOS
        this.$video.webkitEnterFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        console.log('进入全屏失败');
      }
    },
    resetFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    },
    docfullscreenchange() {
      this.setFullscreenState();
    },
    fullscreenchange() {
      this.setFullscreenState();
    },
    unbindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.removeEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$container.removeEventListener('fullscreenchange', this.fullscreenchange);
        this.$container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
      }
    },
    bindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.addEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$container.addEventListener('fullscreenchange', this.fullscreenchange);
        this.$container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.addEventListener('msfullscreenchange', this.docfullscreenchange);
        document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.bindChangeEvent();
    });
  },
  beforeDestroy() {
    if (this.$container) {
      this.unbindChangeEvent();
    }
  }
};
</script>

<style lang="scss" scoped>
._fullscreen {
  width: 1.5em;
  width: 1.5em;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
