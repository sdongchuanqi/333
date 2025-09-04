<template>
  <div class="dashboard">
    <h1>工单管理面板</h1>
    <p>当前用户角色：{{ isAdmin ? '管理员' : '普通用户' }}</p>

    <h2>工单列表</h2>
    <WorkOrderTable
      :work-orders="workOrders"
      :is-admin="isAdmin"
      @delete="handleDelete"
    />

    <h2 style="margin-top: 40px;">图表展示</h2>
    <HoursChart :work-orders="workOrders" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { mockWorkOrders } from '@/mock/data'
import WorkOrderTable from '@/components/WorkOrderTable.vue'
import HoursChart from '@/components/HoursChart.vue'

const route = useRoute()
const userRole = localStorage.getItem('userRole') || 'user'
const isAdmin = computed(() => userRole === 'admin')

const workOrders = ref([...mockWorkOrders])

const handleDelete = (id) => {
  workOrders.value = workOrders.value.filter(item => item.id !== id)
}
</script>

<style lang="less">
.dashboard {
  h1, h2 {
    color: #333;
  }
}
</style>