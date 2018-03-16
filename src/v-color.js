import Vue from 'vue'

Vue.directive('color', {
  inserted: function (el, binding, vnode) {
    el.style.backgroundColor = binding.arg
    if (!!binding.value){
      const val = binding.value.split('.')
      el.style[val[0]] = parseFloat('0.' + val[1])
    }
  }
})
