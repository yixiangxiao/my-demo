<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6" v-for="(item,i) in items" :key="i">
        <el-image :src="item"></el-image>
      </el-col>
      <el-col :span="24">
        <div id="chart" style="width: 100%;height:300px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'home',
  data(){
    return {
      items:[
        require('../assets/1.jpg'),
        require('../assets/2.jpg'),
        require('../assets/1.jpg'),
        require('../assets/2.jpg')]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  }

}
</script>
