<template>
    <el-dialog v-model="dialogVisible" title="管理员信息" width="50%" :before-close="handleClose">
        <el-form ref="formRef" :model="localFormData" label-width="140px" size="small" :rules="formRules">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="localFormData.username" autocomplete="off" placeholder="请输入3-20位用户名" />
            </el-form-item>

            <el-form-item label="姓名" prop="name">
                <el-input v-model="localFormData.name" autocomplete="off" placeholder="请输入2-10位中文名" />
            </el-form-item>

            <el-form-item label="手机号" prop="phone">
                <el-input v-model="localFormData.phone" type="tel" placeholder="请输入11位手机号" />
            </el-form-item>

            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="localFormData.sex">
                    <el-radio :label="'男'">男</el-radio>
                    <el-radio :label="'女'">女</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="角色" prop="role_id">
                <el-select v-model="localFormData.role_id" placeholder="请选择角色" clearable>
                    <el-option v-for="role in roleOptions" :key="role.id" :label="role.name" :value="role.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="状态" prop="status">
                <el-select v-model="localFormData.status" placeholder="请选择状态" clearable>
                    <el-option label="启用" value="active" />
                    <el-option label="禁用" value="inactive" />
                </el-select>
            </el-form-item>

            <el-form-item label="身份证号" prop="id_number">
                <el-input v-model="localFormData.id_number" type="text" placeholder="请输入18位身份证号" />
            </el-form-item>

            <el-form-item label="所属机构" prop="organization_id">
                <el-select v-model="localFormData.organization_id" placeholder="请选择所属机构" clearable>
                    <el-option v-for="org in organizationOptions" :key="org.id" :label="org.name" :value="org.id" />
                </el-select>
            </el-form-item>

            <el-form-item label="密码" prop="password" v-if="isCreate">
                <el-input v-model="localFormData.password" type="password" placeholder="请输入6-16位密码"
                    autocomplete="new-password" />
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleSubmit" :loading="formLoading">
                {{ isCreate ? "创建" : "更新" }}
            </el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { ElMessage } from "element-plus";
import request from "@/utils/request";

const props = defineProps({
    visible: { type: Boolean, default: false },
    formData: {
        type: Object,
        default: () => ({
            id: null,
            username: "",
            name: "",
            phone: "",
            sex: "男",
            role_id: 2,
            status: "active",
            id_number: "",
            organization_id: null,
        }),
    },
    isCreate: { type: Boolean, default: true },
});

const emit = defineEmits(["update:visible", "close", "success"]);

const formRef = ref(null);
const formLoading = ref(false);
const roleOptions = ref([
    { id: 1, name: "超级管理员" },
    { id: 2, name: "普通管理员" },
    { id: 3, name: "内容审核员" },
]);
const organizationOptions = ref([]);

// 创建表单数据的本地副本，避免直接修改prop
const localFormData = ref({ ...props.formData });
const dialogVisible = ref(props.visible);

// 监听prop变化，同步本地状态
watch(
    () => props.visible,
    (newVal) => {
        dialogVisible.value = newVal;
    }
);

watch(
    () => props.formData,
    (newVal) => {
        localFormData.value = { ...newVal };
    }
);

// 表单验证规则
const formRules = ref({
    username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 20, message: "长度在 3-20 个字符", trigger: "blur" },
    ],
    name: [
        { required: true, message: "请输入姓名", trigger: "blur" },
        {
            pattern: /^[\u4e00-\u9fa5]{2,10}$/,
            message: "请输入2-10位中文名",
            trigger: "blur",
        },
    ],
    phone: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确", trigger: "blur" },
    ],
    id_number: [
        { required: true, message: "请输入身份证号", trigger: "blur" },
        {
            pattern: /^\d{17}[\dXx]$/,
            message: "身份证号格式不正确",
            trigger: "blur",
        },
    ],
    organization_id: [
        { required: true, message: "请选择所属机构", trigger: "change" },
    ],
    password: [
        { required: props.isCreate, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 16, message: "密码长度6-16位", trigger: "blur" },
    ],
});

// 提交表单
const handleSubmit = async () => {
    if (!formRef.value) return;

    await formRef.value.validate((valid) => {
        if (!valid) return false;
    });

    formLoading.value = true;

    try {
        if (props.isCreate) {
            await request.post("/api/admin/manage/", localFormData.value);
        } else {
            await request.put(
                `/api/admin/manage/${localFormData.value.id}`,
                localFormData.value
            );
        }

        ElMessage.success(props.isCreate ? "管理员创建成功" : "管理员更新成功");
        emit("success");
        handleClose();
    } catch (error) {
        console.error("操作失败:", error);
        ElMessage.error(error.response?.data?.detail[0]?.msg || "操作失败，请重试");
    } finally {
        formLoading.value = false;
    }
};

// 关闭对话框
const handleClose = () => {
    emit("update:visible", false);
    emit("close");
};
</script>