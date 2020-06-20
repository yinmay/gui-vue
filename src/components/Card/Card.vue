<!--  -->
<template>
  <div class="gui-vue">
    <div class="gui-card">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.gui-card {
  width: 300px;
  background: "white";
  margin-top: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: 1px solid #e8e8e8;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-size: 18px;
  padding-top: 0;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 700;
  color: #333;
}
.content {
  padding-top: 12px;
  padding: 8px;
  color: grey;
}
</style>