<template>
  <div id="home">
    <!-- v-on简写成@ -->
    <app-header v-on:titleChanged="updateTitle($event)" :titleData="title"></app-header>
    <!-- usersData自定义属性，随便起；users是data里面的users数组 -->
    <users :usersData="users"></users>
    <users :usersData="users"></users>
    <app-footer :titleData="title"></app-footer>
  </div>
</template>

<script>
// 局部组件
import Users from "./Users";
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "home",
  data() {
    return {
      // 传值 number string boolean  父组件向子组件传值
      title: "传值 number string boolean",
      //传引用 object array类型的值 父组件向子组件传值
      users: [
      //   {
      //     name: "tom",
      //     position: "teacher",
      //     show: false
      //   },
      //   { name: "xioagang", position: "doctor", show: false },
      //   {
      //     name: "lily",
      //     position: "singer",
      //     show: false
      //   }
      ]
    };
  },
  // 注册局部组件
  components: {
    // 第一种方法
    // "users":Users
    // 第二种方法
    Users,
    "app-header": Header,
    "app-footer": Footer
  },
  methods: {
    updateTitle: function(paramsTitle) {
      this.title = paramsTitle;
    }
  },
  // 在页面加载之前 请求数据
  created: function() {
     this.$http.get("http://jsonplaceholder.typicode.com/users")
     .then((data)=>{
        // console.log(data)
        this.users = data.body
     })
  }
};
</script>

<style>
</style>
