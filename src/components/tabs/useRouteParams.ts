import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default function useRouteParams() {
  const route = useRoute()
  const routeId = computed(() => route.params.id)
  const routeSubId = computed(() => route.params.subId)
  return { routeId, routeSubId }
}
