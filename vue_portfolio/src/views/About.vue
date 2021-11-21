<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>여기서 스토어를 불러올거야</p>

    {{item.title}}
  </div>
</template>

<script>

export default {
  
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
}
</script>
