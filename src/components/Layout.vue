<template>
    <div>
     <div>
        <input type="text" v-model="id">
     </div>
     <div>{{ message }}</div>
     <div>
        <input type="password" v-model="password">
     </div>
     <div>
        <button v-show="isValid" @click="onClickBtn">클릭!!</button>
     </div>
    </div>
    
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Validation } from '../services/decoretor'

@Component
export default class Layout extends Vue {

    id = ''
    password = ''
    isValid = false
    message = ''

    @Watch('id')
    @Watch('password')
    @Validation()
    onClickBtn() :void {
       
    }

}
</script>

<style lang="sass">

</style>