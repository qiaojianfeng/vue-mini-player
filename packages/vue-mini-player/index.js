import VuePlayer from './src/VuePlayer.vue';

VuePlayer.install = function(Vue) {
  Vue.component(VuePlayer.name, VuePlayer);
};

export default VuePlayer;
