<template>
  <div class="icon">
    <section>
      <h5>默认icon-font图标</h5>
      <div class="block">
        <mw-icon name="settings"></mw-icon>
        <mw-icon name="information"></mw-icon>
        <mw-icon name="addto"></mw-icon>
        <mw-icon name="delete"></mw-icon>
        <mw-icon name="edit"></mw-icon>
        <mw-icon name="cancel"></mw-icon>
        <mw-icon name="down"></mw-icon>
        <mw-icon name="prevent"></mw-icon>
        <mw-icon name="close"></mw-icon>
        <mw-icon name="selection"></mw-icon>
        <mw-icon name="previous"></mw-icon>
        <mw-icon name="prompt"></mw-icon>
      </div>
    </section>
    <section>
      <h5>更改icon-font大小</h5>
      <div class="block">
        <mw-icon name="settings" size="30"></mw-icon>
        <mw-icon name="information" size="30"></mw-icon>
        <mw-icon name="addto" size="30"></mw-icon>
        <mw-icon name="delete" size="30"></mw-icon>
        <mw-icon name="edit" size="30"></mw-icon>
        <mw-icon name="cancel" size="30"></mw-icon>
        <mw-icon name="down" size="30"></mw-icon>
        <mw-icon name="prevent" size="30"></mw-icon>
        <mw-icon name="close" size="30"></mw-icon>
        <mw-icon name="selection" size="30"></mw-icon>
        <mw-icon name="previous" size="30"></mw-icon>
        <mw-icon name="prompt" size="30"></mw-icon>
      </div>
    </section>
    <section>
      <h5>更改icon-font颜色</h5>
      <div class="block">
        <mw-icon name="settings" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="information" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="addto" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="delete" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="edit" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="cancel" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="down" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="prevent" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="close" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="selection" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="previous" size="30" color="#ff8200"></mw-icon>
        <mw-icon name="prompt" size="30" color="#ff8200"></mw-icon>
      </div>
    </section>
    <section>
      <h5>svg图标</h5>
      <div class="block">
        <mw-icon name="setting" svg></mw-icon>
        <mw-icon name="info" svg></mw-icon>
        <mw-icon name="info" svg></mw-icon>
        <mw-icon name="close" svg></mw-icon>
        <mw-icon name="time" svg></mw-icon>
        <mw-icon name="star" svg></mw-icon>
        <mw-icon name="notification" svg></mw-icon>
      </div>
    </section>
    <section>
      <h5>更改svg图标大小</h5>
      <div class="block">
        <mw-icon name="setting" svg size="30"></mw-icon>
        <mw-icon name="info" svg width="24"></mw-icon>
        <mw-icon name="info" svg width="24"></mw-icon>
        <mw-icon name="close" svg width="24"></mw-icon>
        <mw-icon name="time" svg width="24"></mw-icon>
        <mw-icon name="star" svg width="24"></mw-icon>
        <mw-icon name="notification" svg width="24"></mw-icon>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.icon {
  background: #fff;
  padding: 20px 0;
}
section {
  margin-bottom: 30px;
  h5 {
    margin-bottom: 15px;
    margin-left: 15px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  .block {
    margin-left: 10px;
  }
}
</style>