<script setup>
import { ref, onMounted } from 'vue';
import FontChecker from 'font-load-check';

const loading = ref(true);
const result = ref(null);

const addFt = () => {
  // 创建自定义配置的字体检查器
// const checker = createFontChecker({ timeout: 5000 });
  const checker = new FontChecker();
// 添加字体 https://github.com/chao921125/vue-vite/raw/refs/heads/main/src/assets/fonts/NotoSans-Medium.ttf
// checker.addFont('NotoSans-Medium', 'https://github.com/chao921125/vue-vite/raw/refs/heads/main/src/assets/fonts/NotoSans-Medium.ttf');
checker.addFont('NotoSans-Medium', '/src/assets/NotoSans-Medium.ttf');
// 检查字体
checker.check('NotoSans-Medium').then(result => {
  console.log(result);
});

// 删除字体
// checker.deleteFont('CustomFont');
}

onMounted(async () => {
  addFt();
  const checker = new FontChecker();
  result.value = await checker.check(["NotoSans", "NotoSans-Medium"]);
  console.log(result.value)
  loading.value = false;

});
</script>

<template>
  <div class="test-pp">test-pp</div>
  <div class="test-rem">test-rem</div>

  <div>
    <div v-if="loading">正在检查字体...</div>
    <div v-else-if="result && result.success">所有字体已加载</div>
    <div v-else-if="result">
      <p>部分字体加载失败：</p>
      <ul>
        <li v-for="font in result.failedFonts" :key="font.name">
          {{ font.name }}: {{ font.status }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.test-pp {
  font-size: 12px;
  color: black;
  font-family: NotoSans;
}
</style>
