<template>
  <div class="icon">
    <section>
      <h5>默认icon-font图标</h5>
      <ul class="block">
        <li>
          <mw-icon name="settings"></mw-icon>
        </li>
        <li>
          <mw-icon name="addto"></mw-icon>
        </li>
        <li>
          <mw-icon name="delete"></mw-icon>
        </li>
        <li>
          <mw-icon name="edit"></mw-icon>
        </li>
        <li>
          <mw-icon name="cancel"></mw-icon>
        </li>
        <li>
          <mw-icon name="down"></mw-icon>
        </li>
        <li>
          <mw-icon name="prevent"></mw-icon>
        </li>
        <li>
          <mw-icon name="close"></mw-icon>
        </li>
        <li>
          <mw-icon name="selection"></mw-icon>
        </li>
        <li>
          <mw-icon name="previous"></mw-icon>
        </li>
        <li>
          <mw-icon name="prompt"></mw-icon>
        </li>
        <li>
          <mw-icon name="problem"></mw-icon>
        </li>
      </ul>
    </section>
    <section>
      <h5>更改icon-font大小</h5>
      <div class="block">
        <li>
          <mw-icon name="settings" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="information" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="addto" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="delete" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="edit" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="cancel" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="down" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="prevent" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="close" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="selection" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="previous" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="prompt" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="eye_protection" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="return" size="30"></mw-icon>
        </li>
        <li>
          <mw-icon name="problem" size="30"></mw-icon>
        </li>
      </div>
    </section>
    <section>
      <h5>更改icon-font颜色</h5>
      <div class="block">
        <li>
          <mw-icon name="settings" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="information" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="addto" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="delete" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="edit" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="cancel" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="down" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="prevent" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="close" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="selection" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="previous" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="prompt" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="eye_protection" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="return" size="30" color="#ff8200"></mw-icon>
        </li>
        <li>
          <mw-icon name="problem" size="30" color="#ff8200"></mw-icon>
        </li>
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
  padding: 30px 0;
}
ul,
li {
  list-style-type: none;
}
section {
  margin-bottom: 60px;
  overflow-x: hidden;
  h5 {
    margin-left: 30px;
    margin-bottom: 30px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
  .mw-icon {
    display: block;
  }
  .block {
    margin: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    li {
      margin: 15px 30px;
      justify-content: center;
    }
  }
}
</style>
