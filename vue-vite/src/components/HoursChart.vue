<template>
  <div ref="chartRef" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import { groupHoursByProject } from '@/utils/chartUtils'

const chartRef = ref(null)
const chartInstance = ref(null)

const props = defineProps({
  workOrders: {
    type: Array,
    required: true
  }
})

const initChart = () => {
  if (chartInstance.value) {
    chartInstance.value.dispose()
  }
  chartInstance.value = echarts.init(chartRef.value)
  updateChart()
}

const updateChart = () => {
  const { projects, hours } = groupHoursByProject(props.workOrders)
  const option = {
    title: {
      text: 'Project Hours Distribution',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    xAxis: {
      type: 'category',
      data: projects
    },
    yAxis: {
      type: 'value',
      name: 'Hours'
    },
    series: [{
      name: 'Total Hours',
      type: 'bar',
      data: hours,
      itemStyle: {
        color: '#1890ff'
      }
    }]
  }
  chartInstance.value.setOption(option)
}

watch(() => props.workOrders, () => {
  updateChart()
}, { deep: true })

onMounted(() => {
  initChart()
})

onUnmounted(() => {
  if (chartInstance.value) {
    chartInstance.value.dispose()
  }
})
</script>