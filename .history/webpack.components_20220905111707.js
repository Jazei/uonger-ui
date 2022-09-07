const glob = require( "glob")
const list = {};

// 手动写每个组件的地址path
// {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js'
// }
// 自动读取文件中index.js 的文件路径
async function makeList(dirPath,list){
  const files= glob.sync(`${dirPath}/**/index.js`)
  console.log(files)
  for(let file of files){
    const component = file.split(/[/.]/)[2];
    console.log('component:',component)
    list[component] = `./${file}`
  }
  console.log(list)
}
makeList('components/lib', list)

module.exports = {
  entry： list
}