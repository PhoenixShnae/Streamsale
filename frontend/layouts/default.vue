// default.vue
<template>
 <div>
   <NavBar />
   <slot />
 </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue"
export default {
    head(){
      return{
        title: "StreamSale",
      }
    },
    components: {
        NavBar,
    }
}
</script>