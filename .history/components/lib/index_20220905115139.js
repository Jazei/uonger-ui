import Demo from './demo';
import Card from './card';

const components ={
  Demo,
  Card
};

const install = function (vue) {
  if(install.installed) return;
  Object.keys(components).forEach(key => {
    vue.component(components[key].name.components[key]);
  })
}
const API = {
  
}