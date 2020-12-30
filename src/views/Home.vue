<template>
  <div class="p-5">
    <h1 class="text-lg">Vue with tailwindCSS</h1>
    <div class="grid grid-cols-3 gap-4 max-w-xl mx-auto mt-4">
      <CardItem
        v-for=" i in 10"
        :key="i"
        :text="`${i}`"
      />
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem';

export default {
  components: {
    CardItem,
  },
  data() {
    return {
      cardList: [
        {
          text: '123',
        },
      ],
    };
  },
};
</script>