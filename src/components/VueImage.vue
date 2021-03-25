<template>
  <div class="vue-image">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: 'VueImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>
