<template>
  <div style="display: inline-block">
    <Button @click="isOpen = true" type="primary">打开说明</Button>
    <Drawer :width="splitWidth" title="Excel函数帮助手册" :closable="false" v-model="isOpen">
      <div class="content-des">
        <h4>介绍</h4>
        欢迎各位Star、Fork进行完善。时间有限，没做细致优化，有意向者可以一起完善

        对外发布、提供服务请保留项目地址，谢谢合作
      </div>

      <div class="content-des">
        <h4>补充说明</h4>
        <strong>本项目可通过以下两个入口进行访问：</strong>
        <p>
          <a href="https://tanghanf.gitee.io/excel_function_manual_webpack/" target="_blank">Gitee入口（推荐，速度快）</a>
        </p>
        <p>
          <a href="https://tanghanf.github.io/excel_function_manual_webpack/" target="_blank">Github入口</a>
        </p>

        <hr>
        <p>作       者：GuoFu</p>
        <p>邮       箱： guofu_gh@163.com</p>
        <p>创建日期：2018年09月19日</p>
        <p>GitHub地址：<a href="https://github.com/TangHanF" target="_blank">https://github.com/TangHanF</a></p>
        <p>Gitee地址：<a href="https://gitee.com/TangHanF" target="_blank">https://gitee.com/TangHanF</a></p>
      </div>

      <div class="content-des">
        <h4>更新历史</h4>
        <Timeline>
          <TimelineItem>
            <p class="time">2018年09月20日</p>
            <p class="content">完成第一版开发</p>
          </TimelineItem>
          <TimelineItem>
            <p class="time">2018年09月19日</p>
            <p class="content">开始构思，项目搭建</p>
          </TimelineItem>
        </Timeline>
      </div>


    </Drawer>
  </div>
</template>

<script>
  export default {
    name: "DescriptionForm",
    data:function () {
      return{
        isOpen: false,
        splitWidth:'30'//左侧抽屉宽度
      }
    },

  }
</script>

<style scoped>
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    padding-left: 5px;
  }
</style>
