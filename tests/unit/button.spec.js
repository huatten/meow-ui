import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import MButton from "packages/button/button.vue";

describe("button.vue", () => {
  // 挂载组件，得到这个包裹器
  // 包裹器的作用是Vue为其添加了方便的方法
  // 也可以通过wrapper.vm获取实例进行原生操作
  // https://vue-test-utils.vuejs.org/zh/api/wrapper/#%E5%B1%9E%E6%80%A7
  const wrapper = shallowMount(MButton);
  it("测试是否是<button>", () => {
    expect(wrapper.contains("button")).to.eq(true);
  });

  it("测试type是否生效", () => {
    const type = "info";
    wrapper.setProps({ type });
    expect(wrapper.classes()).contain(`mw-button--${type}`);
  });

  it("测试可以禁用按钮", () => {
    const disabled = true;
    wrapper.setProps({ disabled });
    expect(wrapper.attributes("disabled")).to.eq("disabled");
  });
});
