<template>
  <a-table
    :dataSource="workOrders"
    :columns="columns"
    :pagination="false"
    :row-key="record => record.id"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'overtime'">
        {{ record.overtime ? '是' : '否' }}
      </template>
      <template v-else-if="column.key === 'action'">
        <a-button
          v-if="isAdmin"
          type="link"
          danger
          size="small"
          @click="handleDelete(record.id)"
        >
          Delete
        </a-button>
      </template>
    </template>
  </a-table>
</template>

<script setup>
const props = defineProps({
  workOrders: {
    type: Array,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['delete'])

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Project', dataIndex: 'project', key: 'project' },
  { title: 'Overtime', key: 'overtime' },
  { title: 'Hours', dataIndex: 'hours', key: 'hours' },
  { title: 'Created At', dataIndex: 'created_at', key: 'created_at' },
  { title: 'Action', key: 'action', align: 'center' }
]

const handleDelete = (id) => {
  emit('delete', id)
}
</script>