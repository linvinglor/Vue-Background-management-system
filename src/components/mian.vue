<template>
    <div>
    main        
    </div>
</template>
<script>
export default {
    beforeCreate() {
        //判断是否有token
        let token = window.sessionStorage.getItem('token')
        if(token){

        }else {
            this.$router.push('login')
        }
    },
}
</script>
<style lang="">
    
</style>
