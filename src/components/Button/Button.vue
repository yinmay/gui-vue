<!-- slot，props[默认值，validator] 以及class绑定，代码模板[vue tab键]，可惜v-modal不能用 -->
<template>
  <div>
    <button :class="{ [iconPosition]: true }">
      <div v-if="icon">
        <img class="icon" src="../../assets/logo.png" />
      </div>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  //   props: ['icon', 'iconPosition'],
  //默认值写法
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value !== "left" || value !== "right";
      }
    }
  },
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
<style lang="scss" scoped>
button {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
}
.icon {
  height: 1em;
  width: 1em;
  display: inline-block;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
.left {
  flex-direction: row;
}
.right {
  flex-direction: row-reverse;
}
</style>


