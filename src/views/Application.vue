<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <el-carousel :interval="3000" arrow="hover " direction="vertical">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        require("../assets/img/1.jpg"),
        require("../assets/img/2.jpg"),
        require("../assets/img/3.jpg"),
        require("../assets/img/4.jpg"),
        require("../assets/img/5.jpg"),
        require("../assets/img/6.jpg"),
      ],
    };
  },
};
</script>
<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
