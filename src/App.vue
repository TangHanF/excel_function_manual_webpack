<template>

  <div id="app">
    <div style="margin: 10px 0px 10px 0px">
      <h2>Excel函数帮助手册</h2>
    </div>
    <div class="input-search">
      <Input v-model="keyword" placeholder="全局搜索..." style="width: 300px"/>
      <Button type="primary" @click="clearSearch">清空搜索</Button>

      <Button @click="value1 = true" type="primary">打开说明</Button>
      <Drawer width="20" title="说明" :closable="false" v-model="value1">
        <div class="content-des">
          <h4>介绍</h4>
          <ul>
            <li>全局搜索待开发...</li>
          </ul>
        </div>

        <div class="content-des">
          <h4>更新历史</h4>
          <p>22222</p>
        </div>

        <div class="content-des">
          <h4>其它说明</h4>
          <p>22222</p>
        </div>
      </Drawer>
    </div>


    <Tabs>
      <TabPane v-for="(fenlei,key,index) in jsonData.sections" :label="(index+1)+'、'+fenlei.name" icon="ios-pricetags">
        <!--{{fenlei.name}}分类下面有{{fenlei.children.length}}个函数-->
        <FunctionForm :json-data="jsonData" :fenlei-children="fenlei.children" :fenlei-key="key"
                      :fenlei-index="index"></FunctionForm>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import FunctionForm from './components/FunctionForm'
  import {navData} from '../static/js/nav_json.js'

  let searchFunNameJsonData = $.parseJSON(navData);

  export default {
    name: 'App',
    data: function () {
      return {
        jsonData: searchFunNameJsonData,
        sectionsChildren: [],
        keyword: '',
        value1: false,
      }
    },
    components: {FunctionForm},
    methods: {
      clearSearch: function () {
        this.keyword = '';
      }
    },

  }
</script>

<style>
  .content-des {
    padding: 5px 0px 5px 5px;
  }

  .input-search {
    padding: 20px 0px 10px 10px;
    text-align: left;
  }

  h1 {
    color: red;
    font-size: 30px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
