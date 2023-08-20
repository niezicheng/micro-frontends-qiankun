<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router'
  import { qiankunWindow } from 'vite-plugin-qiankun/es/helper';
  import { menusList } from '../configs'
  import RootPage from '../pages/rootPage/index.vue'

  const route = useRoute()
  const isRootPage = computed(() => route.path === '/')
</script>

<template>
  <div className='layout'>
      <div className='layout-header' v-if="!qiankunWindow.__POWERED_BY_QIANKUN__">
        <router-link  :to="'/'">
          Vue 应用
        </router-link>
      </div>
      <div className="layout-container">
        <!-- qiankunWindow.__POWERED_BY_QIANKUN__ 为 true 时，不显示菜单 -->
        <div className='layout-left' v-if="!qiankunWindow.__POWERED_BY_QIANKUN__ ">
          <template v-for="(item) in menusList" :key="item?.id">
            <router-link  :to="item.path">
              {{ item.name }}
            </router-link>
          </template>
        </div>
        <div className='layout-right'>
          <root-page v-if="isRootPage" />
          <router-view />
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>