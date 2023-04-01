<template>
    <title>{{ vidName }}</title>
    <div class="player">
        <video controls muted autoPlay>
            <source :src="`http://localhost:5000/videos/video/${vidName}`" type="video/mp4">
        </video>
    </div>
    <Comments/>
    <title></title>
</template>

<script>

import Comments from "@/components/Comments.vue"

import Products from "@/components/Products.vue"
export default {
    components: {
        Comments,
        Products
    },
    data() {
      return {
        vidName: ''
      }
    },    
    mounted(){
    this.vidName = this.$route.params.name;

},
    methods:{

      
  }
}
</script>
<style scoped>
.player {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    }
</style>