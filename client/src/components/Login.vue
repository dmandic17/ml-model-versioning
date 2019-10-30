<template>
<div>
<h1> Login </h1>

<input type="email" v-model="email" name="email" placeholder="email" />
<br>
<input type="password" v-model="password" name="password" placeholder="password" />
<br>
<button @click="login"> Login </button>
</div>
</template>

<script>
import Authentication from '@/services/Authentication'
export default {
data () {
return {
email:'',
password:''
}
},
methods: {
async login () { 
const response = await Authentication.login({
email: this.email,
password: this.password
})
console.log(response.data)
}
}
}
</script>

<style scoped>

</style>
