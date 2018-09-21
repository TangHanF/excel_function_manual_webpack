<template>
  <div style="display: inline-block">
    <Button @click="isOpen = true" type="primary">打开说明</Button>
    <Drawer :width="splitWidth" title="Excel函数帮助手册" :closable="false" v-model="isOpen">
      <div class="card_style">
        <Card :bordered="false">
          <p slot="title">介绍</p>
          <p> 欢迎各位Star、Fork进行完善。时间有限，没做细致优化，有意向者可以一起完善
            对外发布、提供服务请保留项目地址，谢谢合作</p>
          <p style="color: red">
            <strong>本项目（Excel_Function_Manual_Webpack）是基于原来的 <a href="https://tanghanf.gitee.io/excel_function_manual/">《Excel函数帮助手册》</a>
              进行的修改。目前样式、布局相较于之前可以说操作更加便捷。</strong>
          </p>
          <Divider>我是华丽分割线</Divider>
          <p class="text_indent">
            本手册分为10个大分类，涉及到常用Excel函数的方方面面，并且有详尽的描述和相关案例，学习起来很直观。
          </p>
          <p class="text_indent">
            支持函数全局模糊搜索，在搜索框输入函数名称或者相关函数描述即可，例如可以输入"日期"、"vl"等
          </p>
        </Card>
      </div>

      <div class="card_style">
        <Card :bordered="false">
          <p slot="title">本项目地址</p>
          <p>
            <a href="https://github.com/TangHanF/excel_function_manual_webpack" target="_blank">本项目的GitHub库</a>
          </p>
          <p>
            <a href="https://gitee.com/TangHanF/excel_function_manual_webpack">本项目的Gitee库</a>
          </p>
        </Card>
      </div>

      <div class="card_style">
        <Card :bordered="false">
          <p slot="title">补充说明</p>
          <strong>本项目可通过以下两个入口进行访问：</strong>
          <p>
            <a href="https://tanghanf.gitee.io/excel_function_manual_webpack/" target="_blank">Gitee入口（推荐，速度快）</a>
          </p>
          <p>
            <a href="https://tanghanf.github.io/excel_function_manual_webpack/" target="_blank">Github入口</a>
          </p>
        </Card>
      </div>

      <div class="card_style">
        <Card :bordered="false">
          <p slot="title">作者信息</p>
          <p>作 者：GuoFu</p>
          <p>邮 箱： guofu_gh@163.com</p>
          <p>创建日期：2018年09月19日</p>
          <p>GitHub地址：<a href="https://github.com/TangHanF" target="_blank">https://github.com/TangHanF</a></p>
          <p>Gitee地址：<a href="https://gitee.com/TangHanF" target="_blank">https://gitee.com/TangHanF</a></p>
        </Card>
      </div>


      <div class="card_style">
        <Card :bordered="false">
          <p slot="title">更新历史</p>
          <Timeline>
            <TimelineItem>
              <p class="time">2018年09月20日</p>
              <p class="content">第二版：发布</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2018年09月19日</p>
              <p class="content">第二版：开始构思，项目搭建</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2018年09月06日</p>
              <p class="content">第一版：发布</p>
            </TimelineItem>
            <TimelineItem>
              <p class="time">2018年09月05日</p>
              <p class="content">第一版：开始构思，项目搭建</p>
            </TimelineItem>
          </Timeline>
        </Card>
      </div>




    </Drawer>
  </div>
</template>

<script>
  export default {
    name: "DescriptionForm",
    data: function () {
      return {
        isOpen: false,
        splitWidth: '30'//左侧抽屉宽度
      }
    },

  }
</script>

<style scoped>
  .text_indent{
    text-indent: 2em;
  }
  .card_style{
    background:#eee;padding: 5px
  }
  .time {
    font-size: 14px;
    font-weight: bold;
  }

  .content {
    padding-left: 5px;
  }
</style>
