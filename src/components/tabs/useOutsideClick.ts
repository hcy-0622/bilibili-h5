import { Ref, onMounted, onBeforeUnmount } from 'vue'

export default function useOutsideClick(ref: Ref<HTMLElement | undefined>, handler: () => void): void {
  const _handler = (ev: MouseEvent) => {
    if (ref.value && !ref.value.contains(ev.target as HTMLElement)) {
      // panelVisible.value = false
      handler()
    }
  }
  onMounted(() => {
    document.addEventListener('click', _handler)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('click', _handler)
  })
  return
}
