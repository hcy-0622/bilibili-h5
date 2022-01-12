<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '../Icon.vue'
import TabsPanel from './TabsPanel.vue'
import useTabsData from './useTabsData'
import useOutsideClick from './useOutsideClick'
import useRouteParams from './useRouteParams'

const panelVisible = ref(false)
const tabsRef = ref<HTMLDivElement>()
const router = useRouter()
const data = useTabsData()
const { routeId, routeSubId } = useRouteParams()

const tabItemClick = (id: number) => {
  let path = `/channel/${id}`
  if (id === -1) path = '/'
  router.push(path)
}
const subTabItemClick = (id: number, pid: number) => {
  let path = `/channel/${pid}/${id}`
  if (id === -1) path = `/channel/${pid}`
  router.push(path)
}

useOutsideClick(tabsRef, () => {
  // panelVisible.value = false
})
</script>
<template>
  <div ref="tabsRef" class="tabs-container">
    <div class="tabs-wrapper">
      <transition-group name="list" tag="ul" class="tabs">
        <li
          v-for="c of data.categories"
          :key="c.id"
          :class="{ tab: true, active: routeId ? c.id.toString() === routeId : c.id === -1 }"
          @click="tabItemClick(c.id)"
        >
          {{ c.name }}
          <div
            v-show="c.id.toString() === routeId && c.children && c.children.length"
            class="tabs-wrapper sub-tabs-wrapper"
          >
            <ul class="tabs">
              <li
                v-for="child of c.children"
                :key="child.id"
                :class="{ tab: true, active: routeSubId ? child.id.toString() === routeSubId : child.id === -1 }"
                @click.stop="subTabItemClick(child.id, c.id)"
              >
                {{ child.name }}
              </li>
            </ul>
          </div>
        </li>
      </transition-group>
    </div>
    <div class="tabs-more">
      <Icon icon="arrow-down" class="tabs-icon" @click="panelVisible = true" />
    </div>
    <TabsPanel v-model:visible="panelVisible" :categories="data.categories" />
  </div>
</template>
<style scoped>
.tabs-container {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  position: relative;
}
.tabs-wrapper {
  flex: auto;
  overflow-x: auto;
}
.tabs-wrapper::-webkit-scrollbar {
  display: none;
}
.tabs-wrapper.sub-tabs-wrapper {
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  border-bottom: 1px solid var(--border-color);
}
.tabs-more {
  padding: 0 20px;
}
.tabs-more .tabs-icon {
  color: #ccc;
  font-size: 48px;
}
.tabs {
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.tab {
  padding: 16px 30px;
  white-space: nowrap;
  color: #505050;
  font-size: 28px;
  border-bottom: 5px solid transparent;
  transition: color, border-color 0.4s ease-out;
}
.tab.active {
  border-bottom-color: var(--primary-color);
  color: var(--primary-color);
}
</style>
