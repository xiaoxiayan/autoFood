<template>
   <div class="validate-input-container pb-3">
        <input type="email" 
        :value="inputRef.val"
        @blur="validateEmail"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        @input="updateValue"
        >
   </div>
   <span v-if="inputRef.error" class="valid-feedback">{{inputRef.message}}</span>
</template>

<script lang="ts">
import { defineComponent , reactive ,PropType} from "vue";
const emailReg = /^([\w\.\-]+)\@(\w+)(\.([\w^\_]+)){1,2}$/
interface RuleProp {
    type: 'required' | 'email' | 'password';
    message: string;
}

export type RulesProp = RuleProp[]
export default defineComponent({
    props:{
        rules: Array as PropType<RulesProp>,
        modelValue: String
    },
    setup(props, context) {
         const inputRef = reactive({
            val:props.modelValue || '',
            error:false,
            message:''
        })
        const updateValue = (e: KeyboardEvent) =>{
            const targetValue = (e.target as HTMLInputElement).value
            inputRef.val = targetValue
            context.emit('update:modelVal',targetValue)
        }
        const validateEmail = () =>{
           if(props.rules) {
               const allPassed = props.rules.every(rule =>{
                   let passed = true
                   inputRef.message = rule.message
                   switch (rule.type) {
                        case 'required':
                            passed = ( inputRef.val.trim() !== '')
                            break;
                        case 'email':
                            passed = emailReg.test(inputRef.val)
                            break
                       default:
                           break;
                   }
                   return passed
               })
               inputRef.error = !allPassed
           }
        }
        return {
            inputRef ,
            validateEmail,
            updateValue
        }

    }
})
</script>

<style>

</style>