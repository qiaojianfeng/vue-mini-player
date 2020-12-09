<template>
  <div class="_play-btn"
       @click.stop="handleClick">
    <svg v-if="isPlaying"
         viewBox="0 0 64 64"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none"
         stroke-width="1"
         fill="none"
         fill-rule="evenodd">
        <g>
          <path d="M64,32 C64,49.6733333 49.6733333,64 32,64 C14.3266667,64 0,49.6733333 0,32 C0,14.3266667 14.3266667,0 32,0 C49.6733333,0 64,14.3266667 64,32"
                fill-opacity="0.5"
                fill="#231F20"></path>
          <rect fill="#FFFFFF"
                fill-rule="nonzero"
                x="23"
                y="19"
                width="5"
                height="26"
                rx="2.5"></rect>
          <rect fill="#FFFFFF"
                fill-rule="nonzero"
                x="36"
                y="19"
                width="5"
                height="26"
                rx="2.5"></rect>
        </g>
      </g>
    </svg>
    <svg v-else
         viewBox="0 0 96 96"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none"
         stroke-width="1"
         fill="none"
         fill-rule="evenodd">
        <g>
          <path d="M96,48 C96,74.51 74.51,96 48,96 C21.49,96 0,74.51 0,48 C0,21.49 21.49,0 48,0 C74.51,0 96,21.49 96,48"
                fill-opacity="0.5"
                fill="#231F20"></path>
          <path d="M68.332,49.1162 L36.209,67.4722 C35.352,67.9622 34.286,67.3432 34.286,66.3552 L34.286,29.6442 C34.286,28.6572 35.352,28.0382 36.209,28.5272 L68.332,46.8842 C69.196,47.3772 69.196,48.6232 68.332,49.1162"
                fill="#FFFFFF"></path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isPlaying: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleClick() {
      this.$emit('update:isPlaying', !this.isPlaying);
    }
  }
};
</script>

<style lang="scss" scoped>
._play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3.5em;
  height: 3.5em;
  user-select: none;
  z-index: 2147483647;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
