<template>
  <div class="hello">
    <div class="item" v-for="(item, index) in suggestionData" :key="index">
      <div class="title">{{ item.title }}</div>
      <div class="des">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hello',
  data() {
    return {
      suggestionData: [
        {
          title: 'title1',
          desc: 'desc1',
        },
        {
          title: 'title2',
          desc: 'desc2',
        },
      ],
    };
  },
});
</script>
