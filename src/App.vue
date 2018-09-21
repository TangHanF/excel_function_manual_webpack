<template>

  <div id="app">
    <router-view></router-view>
    <div style="margin: 10px 0px 10px 0px">
      <h2>Excel函数帮助手册</h2>
    </div>
    <div class="input-search">
      <Input v-model="keyword" placeholder="全局搜索..." style="width: 300px"/>
      <Button type="primary" @click="clearSearch">清空搜索</Button>
      <DescriptionForm></DescriptionForm>
    </div>

    <Tabs>
      <TabPane v-for="(fenlei,key,index) in jsonData.sections"
               :key="key"
               :label="(index+1)+'、'+fenlei.name"
               icon="ios-pricetags">
        <!--<TabPane v-for="(fenlei,key,index) in jsonData.sections" :label="label">-->

        <FunctionForm
          :json-data="jsonData"
          :fenlei-children="fenlei.children"
          :fenlei-key="key"
          :fenlei-index="index"
          :sections-children="sectionsChildren" hildren>
        </FunctionForm>

      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  // 引入函数功能模块（分割面板区域）
  import FunctionForm from './components/FunctionForm'
  // 引入侧边抽屉描述组件
  import DescriptionForm from './components/DescriptionForm'
  import {navData} from '../static/js/nav_json.js'
  import {searchName} from '../static/js/search_json.js'
  import Vue from 'vue'

  let searchFunNameJsonData = $.parseJSON(navData);
  let searchDesJsonData = $.parseJSON(searchName);
  export default {
    name: 'App',
    data: function () {
      return {
        jsonData: searchFunNameJsonData,
        sectionsChildren: [],//全局搜索结果集合
        keyword: '',// 全局搜索关键词


        tmpIndex: '',
        tmpTabTitle: '',

        label: (h) => {
          debugger
          return h('div', [
            h('span', this.tmpTabTitle),
            h('Badge', {
              props: {
                count: 3
              }
            })
          ])
        }

      }
    },
    components: {FunctionForm, DescriptionForm},
    methods: {
      clearSearch: function () {
        this.sectionsChildren = [];
        // Vue.set(this.sectionsChildren, index, searchFunNameJsonData.topics[key]);
        this.keyword = '';
      }
    },
    watch: {
      // 对搜索框输入的内容进行实时搜索
      keyword: function (newKeyword) {

        //清空搜索框时直接return回去
        if ($.trim(newKeyword) === '')
          return;

        //匹配函数名搜索
        let tmpObj = [];
        let index = 0;
        let that = this;
        that.sectionsChildren = [];

        $.each(searchFunNameJsonData.topics, function (key, obj) {
          if (obj.name.toLowerCase().indexOf(newKeyword) != -1) {
            tmpObj.push(obj);
            Vue.set(that.sectionsChildren, index, obj);
            index++;
          }
        });

        //匹配描述搜索
        let searchDesObj = searchDesJsonData[newKeyword];
        if (searchDesObj) {
          index = 0;
          $.each(searchDesObj, function (key, val) {
            tmpObj.push(searchFunNameJsonData.topics[key]);
            Vue.set(that.sectionsChildren, index, searchFunNameJsonData.topics[key]);
            index++;
          })
        }
        // console.log("结果数：" + that.sectionsChildren.length)
      }
    }
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
