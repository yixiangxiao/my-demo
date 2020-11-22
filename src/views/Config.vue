<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="300"
        :filters="dataList"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import axios from 'axios'

    export default {
      data() {
        return {
          tableData: [],
          dataList:[]
        }
      },
      methods:{
        getData(){  //请求数据
          axios.get('http://127.0.0.1:3333/tablist').then(res=>{ //res后端返回的数据
            console.log(res)
            if(res.data.code=='200'){
              this.tableData = res.data.result;
              for(var i=0;i<this.tableData.length;i++){
                this.dataList.push({text: this.tableData[i].date, value: this.tableData[i].date})
              }
            }
          },error=>{

          })
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) { 
         return row.date ===value
          //var obj = {id:1};
          //对象中取值的方式有.  []   区别
          // obj.id ;
          // var a = 'id';
          // obj[a]
        }
      },
      mounted(){  //挂载完成
        this.getData();
      }
    }
  </script>
