import VueMiniPlayer from './vue-mini-player';
const version = require('../package.json').version;
const components = [VueMiniPlayer];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  version,
  // 以下是具体的组件列表
  VueMiniPlayer
};
