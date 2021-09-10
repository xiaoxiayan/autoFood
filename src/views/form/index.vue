<template>
    <form>
  <div class="form-group">
    <div class="mb-3">
        <label for="exampleInputEmail1">Email address</label>
        <validate-input v-model="Edata.emailVal" :rules="emailRules"></validate-input>
        {{Edata.emailVal}}
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script lang="ts">
import { reactive , ref, toRefs } from '@vue/reactivity'
import validateInput, { RulesProp } from './validateInput.vue'
export default {
    name:'myform',
    components: {
        validateInput
    },
    setup(){
        const emailRules :RulesProp =[
            { type: 'required', message: '电子邮箱地址不能为空'},
            { type: 'email', message: '请输入正确的电子邮箱格式'}
        ]

        const formData = reactive({
                emailVal:'dddd',
                password:''
        })
        const Edata = toRefs(formData)
        const emailReg = /^([\w\.\-]+)\@(\w+)(\.([\w^\_]+)){1,2}$/
      
      
        return {
            Edata,
            emailRules

        }

    }

}
</script>

<style>

</style>