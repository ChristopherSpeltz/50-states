<!-- code for footer component, including export and styling -->


<template>
  <div>
    <div id="navigation-links">
      <span class="nav-link">
        <router-link to="/">Home</router-link>
      </span>

      <span class="nav-link">
        <router-link to="/about">About this site</router-link>
      </span>
    </div>
    <p>
      Header image by
      <a href="https://unsplash.com/photos/l68Z6eF2peA"
        >@Andrew Stutesman on Unsplash</a
      >
    </p>

    <p><a target="_blank" href="https://icons8.com/icon/43632/map">Map</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>

<style scoped>

.nav-link {
    margin: 1rem
}
</style>
