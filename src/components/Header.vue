<template>
  <div class="header"></div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style en="scss">
.header {
  position: fixed;
  width: 100%;
  height: 100px;
  background: $--color-primary;
  z-index: 99;
}
</style>
