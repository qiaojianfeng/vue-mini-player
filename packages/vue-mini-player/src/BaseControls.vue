<template>
  <div class="qun-base-controls">
    <Volume :isMuted.sync="isMuted" />
    <Progress />
    <Fullscreen />
  </div>
</template>
<script>
import Volume from './controls/Volume';
import Progress from './controls/Progress';
import Fullscreen from './controls/Fullscreen';
export default {
  name: 'BaseControls',
  components: {
    Volume,
    Progress,
    Fullscreen
  },
  data() {
    return {
      isMuted: true,
      isFullscreen: false
    };
  },
  watch: {},
  computed: {},
  filters: {},
  methods: {
    handleClickVol() {},
    handleClickSlider() {},
    handleClickFullscreen() {}
  },
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
.qun-base-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2147483647;
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  user-select: none;
}
</style>

