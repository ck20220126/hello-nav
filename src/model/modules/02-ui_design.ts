import {
  requireImg,
} from '../utils'

const apps: AppItem[] = [{
  url: 'https://element.eleme.cn/',
  githubUrl: 'https://github.com/ElemeFE/element',
  imgSrc: requireImg('element-ui.png'),
  keyWords: ['饿了么', 'element-ui', 'vue'],
  label: 'Element UI',
}, {
  url: 'https://www.iviewui.com/',
  githubUrl: 'https://github.com/view-design/ViewUI',
  imgSrc: requireImg('iview.png'),
  keyWords: ['iview', 'view-ui', 'vue'],
  label: 'View UI',
}, {
  url: 'https://quasar.dev/',
  githubUrl: 'https://github.com/quasarframework/quasar',
  imgSrc: requireImg('quasar.png'),
  keyWords: ['quasar', 'vue'],
  label: 'Quasar',
}, {
  url: 'https://www.antdv.com/',
  githubUrl: 'https://github.com/vueComponent/ant-design-vue',
  imgSrc: requireImg('ant-design-vue.png'),
  keyWords: ['ant-design-vue', 'antdv', 'vue'],
  label: 'AntDesignVue',
}, {
  url: 'https://youzan.github.io/vant/',
  githubUrl: 'https://github.com/youzan/vant',
  imgSrc: requireImg('vant.png'),
  keyWords: ['vant', 'vue'],
  label: 'Vant',
}, {
  url: 'https://didi.github.io/cube-ui/',
  githubUrl: 'https://github.com/didi/cube-ui',
  imgSrc: requireImg('cube.png'),
  keyWords: ['cube', 'vue'],
  label: 'Cube UI',
}, {
  url: 'https://www.naiveui.com/',
  githubUrl: 'https://github.com/TuSimple/naive-ui',
  imgSrc: requireImg('naiveui.png'),
  keyWords: ['naiveui', 'vue'],
  label: 'NaiveUI',
}, {
  url: 'https://taro-ui.jd.com/',
  githubUrl: 'https://github.com/NervJS/taro-ui',
  imgSrc: requireImg('taro.png'),
  keyWords: ['taro ui', 'vue', 'react', 'nerv', '小程序'],
  label: 'Taro UI',
}, {
  url: 'https://at-ui.github.io/at-ui/',
  githubUrl: 'https://github.com/at-ui/at-ui',
  imgSrc: requireImg('at-ui.png'),
  keyWords: ['atui', 'vue'],
  label: 'At UI',
}, {
  url: 'https://vux.li/',
  githubUrl: 'https://github.com/airyland/vux',
  imgSrc: requireImg('vux.png'),
  keyWords: ['vux', 'vue'],
  label: 'VUX',
  darkInvert: true,
}, {
  url: 'https://muse-ui.org/',
  githubUrl: 'https://github.com/museui/muse-ui',
  imgSrc: requireImg('museui.png'),
  keyWords: ['museui', 'vue'],
  label: 'Muse UI',
}, {
  url: 'https://ant.design/',
  githubUrl: 'https://github.com/ant-design/ant-design/',
  imgSrc: requireImg('ant-design.png'),
  keyWords: ['ant-design', 'antd', 'react'],
  label: 'Ant Design',
}, {
  url: 'https://material-ui.com/',
  githubUrl: 'https://github.com/mui-org/material-ui',
  imgSrc: requireImg('material-ui.png'),
  keyWords: ['material-ui', 'react'],
  label: 'Material UI',
}, {
  url: 'https://antv.alipay.com/',
  githubUrl: 'https://github.com/antvis/',
  imgSrc: requireImg('antv.png'),
  keyWords: ['antv', 'charts'],
  label: 'AntV',
}, {
  url: 'https://rsuitejs.com/',
  githubUrl: 'https://github.com/rsuite/rsuite',
  imgSrc: requireImg('rsuite.png'),
  keyWords: ['rsuite', 'react suite'],
  label: 'React Suite',
}, {
  url: 'https://ng-alain.com/zh',
  githubUrl: 'https://github.com/ng-alain/ng-alain/',
  imgSrc: requireImg('ng-alain.png'),
  keyWords: ['ngalain', 'angular'],
  label: 'Ng Alain',
}, {
  url: 'https://getbootstrap.com/',
  githubUrl: 'https://github.com/twbs/bootstrap',
  imgSrc: requireImg('bootstrap.png'),
  keyWords: ['bootstrap'],
  label: 'Bootstrap',
}, {
  url: 'https://l-ui.com/',
  githubUrl: 'https://github.com/yued-fe/lulu',
  imgSrc: requireImg('luluui.png'),
  keyWords: ['luluui'],
  label: 'LuLu UI',
}, {
  url: 'https://flutter-go.pub/',
  githubUrl: 'https://github.com/alibaba/flutter-go/',
  imgSrc: requireImg('flutter-go.png'),
  keyWords: ['fluttergo'],
  label: 'Flutter Go',
}, {
  url: 'https://echarts.apache.org/',
  githubUrl: 'https://github.com/apache/incubator-echarts',
  imgSrc: requireImg('echarts.png'),
  keyWords: ['echarts'],
  label: 'ECharts',
}, {
  url: 'https://dribbble.com/',
  imgSrc: requireImg('dribbble.png'),
  keyWords: ['dribbble'],
  label: 'Dribbble',
}, {
  url: 'http://www.iconfont.cn/',
  imgSrc: requireImg('iconfont.png'),
  keyWords: ['iconfont'],
  label: 'IconFont',
}]

export default apps
