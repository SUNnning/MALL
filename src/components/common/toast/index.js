import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {
  console.log("执行obj的install函数", Vue)
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.new的方式，根据组件构造器创建组件
  const toast = new toastConstructor()

  //3.手动的将组件挂在到元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  
  Vue.prototype.$toast = toast
}
export default obj