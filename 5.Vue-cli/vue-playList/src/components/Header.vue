<template>
  <header class="header" @click="changeTitle">
    <h1>
      {{title}}
      {{titleData}}
    </h1>
  </header>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      title: "Vue.js Demo"
    };
  },
  // 接受组件的传过来的值 布尔类型 数字类型 字符串类型
  props: {
    titleData: {
      type: String,
      require: true
    }
  },
  methods: {
    changeTitle: function() {
      // this.titleData = "changed"
      // 子组件向父组件传值 事件传值法
      this.$emit("titleChanged", "子组件向父组件传值,swdk");
    }
  },
  //   钩子函数
    beforeCreate: function() {
             alert("beforeCreate 组件实例化之前执行的函数")
    },
    created: function() {
             alert("created 组件实例化完毕，但页面还未显示执行的函数")
    },
    beforeMount: function() {
             alert("beforeMount 组件挂载前，页面仍未展示，但虚拟DOM已经配置执行的函数")
    },
    mounted:function(){
        alert("组件挂载后，此方法执行后,页面显示")
    },
    beforeUpdate:function(){
        alert("mounted 组件更新前，页面仍未更新，但虚拟dom已经配置")
    },
     updated:function(){
        alert("updated 组件更新，此方法执行后,页面显示")
    },
    beforeDestroy:function(){
         alert("beforeDestroy 组件销毁前")
    },
    destroyed:function(){
         alert("destroyed 组件销毁")
    }
};
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 6px;
  text-align: center;
}
</style>
