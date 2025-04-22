<template>
  <div>
    <Nav></Nav>
    <div class="bg">
      <search></search>
      <div class="bg1">
        <Content></Content>
        <ShopContent></ShopContent>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/views/components/Nav.vue";
import Search from "@/views/components/Search.vue";
import Content from "@/views/components/Content.vue";
import ShopContent from "@/views/components/ShopContent.vue";

export default {
  name: "JDVue",
  components: {ShopContent, Content, Search, Nav}
}
</script>

<style scoped>
.bg {
  background: linear-gradient(to right, rgb(249, 254, 255), rgb(253, 247, 250));
}

.bg1 {
  width: 1297px;
  background: white;
  margin: 0 auto;
  border-radius: 12px;
}
</style>