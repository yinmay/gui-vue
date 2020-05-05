<!-- Layput -->
<!-- props的参数，组件的引入, scss变量函数, style绑定 class绑定,  -->

<template>
  <div class="gui-vue">
    <Row gutter="60">
      <Col :span="2" :offset="2">123</Col>
      <Col span="5">341</Col>
      <!-- <Col>341</Col> -->
    </Row>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Row from './Row';
import Col from './Col';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Row, Col },

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
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
