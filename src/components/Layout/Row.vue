<!-- Layput -->
<template>
  <div class="row" :style="rowStyle">
    <slot />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    //一个data属性根据另一个data属性改变，不能放在data里面
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px"
      };
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.$children); //没有儿子，相当于createElement
  },
  //生命周期 - 挂载完成（可以访问DOM元素）相当于mounted
  mounted() {
    console.log(this.$children);
    this.$children.forEach(vm => {
      vm.gutter = this.gutter;
    });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="scss">
.row {
  display: flex;
  margin: 0 -10px;
}
</style>
