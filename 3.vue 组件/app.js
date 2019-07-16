Vue.component("greeting",{
    // 模板里有且只有一个根标签，这里的p标签相当于根标签，其他的标签都要放到p标签里面
    template:`
    <p>{{name}}：大家好，给大家介绍我的兰花
        <button @click="changeName">点击我更改名字</button>
    </p>`,
    data:function(){
        return{
            name:'鹿晗'
        }
    },
    methods:{
        changeName:function(){
            this.name = 'Tom'
        }
    }
})
// 两个实例出来的vue组件都可以使用组件
new Vue ({
    el:"#vue-app-one",

});
new Vue ({
    el:"#vue-app-two",
})