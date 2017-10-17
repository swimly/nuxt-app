export const layout = 'head' // 布局 aside 、 head
export const menu = [{
  text: '首页',
  icon: '',
  url: '/',
  children: null
}, {
  text: '用户管理',
  icon: '',
  url: '/user',
  children: null
}, {
  text: '统计',
  icon: '',
  url: '/count',
  children: [{
    text: '客户统计',
    url: '/count/customer'
  }, {
    text: '访问统计',
    url: '/count/visit'
  }, {
    text: '用户统计',
    url: '/count/user'
  }]
}, {
  text: '设置',
  icon: '',
  url: '/setting',
  children: [{
    text: '切换布局',
    url: '/setting/layout'
  }]
}]
