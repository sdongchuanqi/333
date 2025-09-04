<template>
  <div class="login-container">
    <a-card title="用户登录" style="max-width: 400px; margin: 100px auto; padding: 20px">
      <a-form
        layout="vertical"
        :model="formState"
        @finish="handleLogin"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <a-input v-model:value="formState.username" placeholder="请输入用户名" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 表单数据必须是 reactive，而不是两个单独的 ref
const formState = reactive({
  username: '',
  password: ''
})

const handleLogin = (values) => {
//   alert('登录方法已触发！')
  console.log('表单提交数据:', values)

  const role = formState.username === 'admin' ? 'admin' : 'user'
  localStorage.setItem('userRole', role)

  router.push('/dashboard').catch(() => {})
}
</script>
