<template>

  <div id="app">

    <div style="margin: 10px 0px 10px 0px">
      <h2>Excel函数帮助手册</h2>
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
      }
    },
    components: {FunctionForm},


  }
</script>

<style>
  h1{
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
