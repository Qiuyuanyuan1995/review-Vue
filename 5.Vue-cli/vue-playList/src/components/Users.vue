<template>
  <div class="users">
    <ul>
      <li @click="user.show = !user.show" v-for="(user,index) in usersData" :key="index">
        <h3>{{index+1}}.姓名:{{user.name}}</h3>
        <h4 v-show="user.show">职位:{{user.position}}</h4>
      </li>
    </ul>
    <button @click="deleteUser">删除</button>
  </div>
</template>
<script>
export default {
  name: "users",
  //传值：string number boolean,只会影响单一的地方
  //传引用：array object，而传引用是会影响多个地方
  //接受父组件的传过来的值
  //   props:["usersData"],
  // 更加规范的写法
  props: {
    usersData: {
      //type类型
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods:{
      deleteUser:function(){
          this.usersData.pop()
      }
  }
};
</script>
<style scoped>
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 1.25rem;
  box-sizing: border-box;
  border: 1px solid red;
}
ul {
  display: flex;
  /* 强行拆行 */
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  /* 设置 弹性盒子的里元素宽度是其他元素的几倍，2：就是2倍，1就是按照1:1的比列*/
  flex-grow: 1;
  /* 设置弹性盒子的元素的初始长度为300px */
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
