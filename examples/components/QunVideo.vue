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
        url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
        loop: true,
        autoplay: false
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

