<template>
  <div class="main-permission">
    <h1>5555</h1>
    <button
      @click="add"
    >
      tianjia
    </button>
  </div>
</template>

<script setup>
import request from '@/utils/request';
import { ref } from 'vue';
const formData = ref({
  id: null,
  username: '',
  name: '',
  phone: '',
  sex: '男',
  role_id: 2, // 默认普通管理员
  status: 'active',
  password: '',
  id_number: '',
  organization_id: null
});

const add = async () =>{
formData.value = {
    username: 'admin1',
    name: 'admin1',
    phone: '15215215215',
    sex: '男',
    role_id: 2,
    status: 'active',
    password: 'password',
    id_number: '11',
    organization_id: null
  };
  try{
    await request.post('/api/admin/manage/', formData.value);
  }catch(error){
    console.error('操作失败:', error);
  }
}
</script>

<style>
.main-permission{
margin-left: 256px;
}
</style>