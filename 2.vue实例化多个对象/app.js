// 第一个实例对象
var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: '第一个实例化vue对象'

    },
    computed: {
         greet:function(){
              return "Hell App one"
         }

    }
})
// 第二个实例对象
var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: '第二个实例化vue对象'
    },
    computed: {
        greet:function(){
            return "Hell App two"
       }
    },
    methods:{
        // 第二个实例对象改变第一个实例对象的title
        changeTitle:function(){
            one.title = '我已经被第二个实例对象改名了'
        }
    }
})
// 改变第二个实例vue对象的title
two.title = 'APP Two'
// one.title= "la la la "