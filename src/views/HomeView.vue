<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard>
        {{ item }}
      </AppCard>
    </AppGrid>
  </div>
  <hr class="my-4" />
  <p>{{ x }}, {{ y }}</p>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log('route.path: ', route.path);

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

const position = reactive({
  x: 100,
  y: 1000,
});

const { x, y } = toRefs(position);
</script>

<style lang="scss" scoped></style>
