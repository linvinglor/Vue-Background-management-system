<template>
  <div class="login-container">
    <div class="content">
      <h2>用户登录</h2>
      <el-form
        label-position="top"
        label-width="80px"
        ref="formData"
        :rules="rules"
        :model="formData"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="formData.password"
          ></el-input>
        </el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          @click="submitForm('formData')"
        >登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-container",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 16 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 3, message: "密码要输入多点哦", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    submitForm(formData) {
      this.$refs[formData].validate(valid => {
        if (valid) {
          this.$axios.post("login", this.formData).then(res => {
            // console.log(res);
            if (res.data.meta.status === 200) {
              this.$message.success(res.data.meta.msg)
              // ({
              //   message: res.data.meta.msg,
              //   type: "success"
              // });
            }else if(res.data.meta.status === 400){
              this.$message.error(res.data.meta.msg);
            }
          });
        } else {
          this.$message.error("请输入完整哦~");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  background-color: #324154;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    background-color: #fff;
    width: 580px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
