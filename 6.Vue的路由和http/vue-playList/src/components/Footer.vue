<template>
  <footer class="footer">
    <p>{{txt}}-{{titleData}}</p>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      txt: "copyright 2019 Vue Demo"
    };
  },
  //接收组件的传过来的值 布尔类型 数字类型 字符串类型
  props: {
    titleData: {
      type: String,
      require: true
    }
  }
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 5px;
  text-align: center;
}
footer p {
  color: limegreen;
}
</style>
