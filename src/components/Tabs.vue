<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { getCategories, Category } from '@/apis'
import Icon from './Icon.vue'

const panelVisible = ref(false)
const tabsRef = ref<HTMLDivElement>()
const activeIdx = ref(0)
const data = reactive<{ categories: Category[] }>({
  categories: [],
})

getCategories().then((res) => {
  data.categories = res.data
})
const handler = (ev: MouseEvent) => {
  if (tabsRef.value && !tabsRef.value?.contains(ev.target as HTMLElement)) {
    panelVisible.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handler)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handler)
})
</script>
<template>
  <div ref="tabsRef" class="tabs-container">
    <div class="tabs-wrapper">
      <ul class="tabs">
        <li
          v-for="(c, i) of data.categories"
          :key="c.id"
          :class="{ tab: true, active: i === activeIdx }"
          @click="activeIdx = i"
        >
          {{ c.name }}
          <div v-show="activeIdx === i && c.children.length" class="tabs-wrapper sub-tabs-wrapper">
            <ul class="tabs">
              <li v-for="child of c.children" :key="child.id" class="tab">
                {{ c.name }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="tabs-more">
      <Icon icon="arrow-down" class="tabs-icon" @click="panelVisible = true" />
    </div>

    <transition
      name="fade"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
    >
      <div v-if="panelVisible" class="tabs-panel">
        <ul class="tabs panel-tabs">
          <li v-for="c of data.categories" :key="c.id" class="tab panel-tab">
            {{ c.name }}
          </li>
        </ul>
        <div class="panel-collapse">
          <Icon icon="arrow-down" class="tabs-icon panel-collapse-icon" @click="panelVisible = false" />
        </div>
      </div>
    </transition>
  </div>
</template>
<style scoped>
.tabs-container {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.tabs-wrapper {
  flex: auto;
  overflow-x: auto;
}
.tabs-wrapper::-webkit-scrollbar {
  display: none;
}
.tabs-more {
  padding: 0 20px;
}
.tabs-icon {
  color: #ccc;
  font-size: 48px;
}
.tabs {
  display: inline-flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.tabs-wrapper.sub-tabs-wrapper {
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
}
.tab {
  padding: 16px 30px;
  white-space: nowrap;
  color: #505050;
  font-size: 28px;
}
.tab.active {
  border-bottom: 5px solid var(--primary-color);
  color: var(--primary-color);
}

.tabs-panel {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
}
.panel-tabs {
  display: flex;
  flex-wrap: wrap;
}
.panel-collapse {
  text-align: center;
}
.panel-collapse-icon {
  transform: rotate(180deg);
}

.tabs-enter-active,
.tabs-leave-active {
  transition: all 1s ease;
}
.tabs-enter-from,
.tabs-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
