<template>
  <div class="my-split">


    <Split v-model="split3" min="150px">
      <!--左侧-->
      <div slot="left" class="my-split-pane no-padding">
        <Split v-model="split4" mode="vertical">

          <!--左侧上面板-->
          <div slot="top" class="my-split-pane_top">
            <div style="padding-bottom: 3px" v-if="sectionsChildren.length>0">
              共计搜索到{{sectionsChildren.length}}个函数：
            </div>
            <ul class="live" v-if="sectionsChildren.length>0">
              <li v-for="(childrenItem,index_item) in sectionsChildren">
                <a
                  @mouseenter="showSummary(childrenItem.summary)"
                  @click="showContent(childrenItem.href)"
                  href="#">
                  {{childrenItem.name}}
                </a>
              </li>
            </ul>

            <ul class="live" v-else>
              <li v-for="(childrenItem,index_item) in fenleiChildren">
                <a
                  @mouseenter="showSummary(jsonData.topics[childrenItem].summary)"
                  @click="showContent(jsonData.topics[childrenItem].href)"
                  href="#">
                  {{jsonData.topics[childrenItem].name}}
                </a>
              </li>
            </ul>
          </div>

          <!--左侧下面板-->
          <div slot="bottom" class="my-split-pane_bottom">
            {{summary}}
          </div>
        </Split>
      </div>

      <!--右侧面板-->
      <div slot="right" class="my-split-pane_right">
        <div style="padding: 30px;overflow: auto">
          <!--TODO 可使用 router-view方式-->
          <iframe :src="iframeSrc" width="100%" height="500px" frameborder=no border=0 marginwidth=0
                  marginheight=0></iframe>
        </div>
      </div>

    </Split>
  </div>
</template>

<script>
  export default {
    name: "FunctionForm",
    props: {
      jsonData: {
        type: Object,
        required: true
      },
      fenleiChildren: {
        type: Array,
        required: true
      },
      fenleiKey: {
        type: String,
        default: ''
      },
      fenleiIndex: {
        type: Number,
        required:true
      },
      sectionsChildren: {
        type:Array,
        required:true
      }
    },
    data: function () {
      return {
        split3: 0.2,
        split4: 0.8,
        summary: '',
        iframeSrc: '',
      }
    },
    methods: {
      showSummary: function (summary) {
        this.summary = summary;
      },
      showContent: function (url) {
        let path = 'static/html/' + url;
        this.iframeSrc = path;
      }
    },

  }
</script>

<style scoped>

  .my-split {
    height: 600px;
    border: 1px solid #dcdee2;
  }

  .my-split-pane_top {
    text-align: left;
    height: 400px;
    overflow: auto;
    padding: 10px;
    /*background-color: #2e2e41;*/
  }

  .my-split-pane_bottom {
    text-align: left;
    height: 200px;
    overflow: auto;
    padding: 20px 0px 0px 10px;
  }

  .my-split-pane.no-padding {
    height: 500px;
    padding: 0;
  }

  .live {
    overflow: hidden;
  }

  .live > li {
    list-style: none;
    position: relative;
    padding: 0 0 0 2em;
    margin: 0 0 .5em 10px;
    -webkit-transition: .12s;
    transition: .12s;
  }

  .live > li > a {
    color: #61697b;
    font-weight: bold;
    text-decoration: none;
  }

  .live > li::before {
    position: absolute;
    content: '\2022';
    font-family: Arial;
    color: #2d8cf0;
    top: 0;
    left: 0;
    text-align: center;
    font-size: 2em;
    opacity: .5;
    line-height: .75;
    -webkit-transition: .5s;
    transition: .5s;
  }

  .live > li:hover {
    color: #c1ffbe;
    /*font-size: 15px;*/
  }

  .live > li > a:hover {
    color: #98c6f8;
  }

  .live > li:hover::before {
    -webkit-transform: scale(2);
    -ms-transform: scale(2);
    transform: scale(2);
    opacity: 1;
    text-shadow: 0 0 4px;
    -webkit-transition: .1s;
    transition: .1s;
  }
</style>
