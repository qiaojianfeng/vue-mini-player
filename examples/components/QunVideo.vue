<template>
  <div class="qun-video">
    <VueMiniPlayer ref="vueMiniPlayer"
                   :mutex="true"
                   :video="video"
                   @fullscreen="fullscreen" />
  </div>
</template>
<script>
export default {
  name: 'QunVideo',
  data() {
    return {
      video: {
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
        loop: true,
        autoplay: false,
        muted: true,
        playsinline: true,
        logo: 'VMPlayer'
        // cover: 'https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png'
      }
    };
  },
  watch: {},
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    }
  },
  filters: {},
  methods: {
    fullscreen(data) {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    }
  },
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.qun-video {
  max-width: 500px;
  width: 100%;
  min-width: 300px;
  height: 15em;
  margin: 0 auto;
}
</style>

