<template>
          <div class="container">
        <div v-for="(product,name) in products" :key="name" class="product-con" >
        <NuxtLink :to="`${product.link}`">
        <div :style="{backgroundImage: `url(${product.poster})`}" class="product"></div>
        <div class="product-info">
          <div class="details">
          <h2>{{product.name}}</h2>
          </div>
        </div>
      </NuxtLink>
    </div>
      </div>
    <button style="width: 50cm; height: 2.5cm;" id="Analyze-button" @click="Analyze()">ANALYZE</button>
    <div class="comment-box">
        <div class="comment-field">
            <label class="comment-text" for="comment">Comment:</label>
            <textarea class="comment-text" id="comment" rows="4" cols="100" required></textarea>
        </div>
        <button style="width: 15cm; height: 2.5cm;" type="submit" id="Submit-button" @click="insertComment()">Post Comment!</button>
    </div>
    <div v-for="(Comment_text,id) in commentItems" :key="Comment_text" class="vid-con" >
        <div id="Comment-Area">{{Object.values(Comment_text)[0]}}</div>
    </div>
</template>

<script>

    export default{
        
        data() {
            return {
                vidName: '',
                commentItems: {},
                products: {}
            }
        },
        mounted(){
            this.vidName=this.$route.params.name;
            this.getData();
            this.LoadProducts();
        },

        methods:{
                async getData() {
                const res = await $fetch('http://localhost:5000/videos/comments/'+this.vidName);
                this.commentItems = res;
                },

        async insertComment(){
            var msg=document.getElementById("comment").value;
            var name=this.vidName;
            await $fetch( 'http://localhost:5000/videos/comment', {
                method: 'POST',
                body: {'msg': msg, 'name': name}
            } );
        },
        async Analyze(){
            var name=this.vidName;
            await $fetch( 'http://localhost:5000/videos/analyze', {
                method: 'POST',
                body: {'name': name}
            } );
        },

        async LoadProducts(){   
        const res = await $fetch('http://localhost:5000/videos/products/'+this.vidName);
        this.products = res;
        console.log(this.products);
    }
    }
}
</script>

<style>
.container {
        display: flex;
      justify-content:space-evenly;
      align-items:center;
      margin-top: 2rem;
    }
    .product-con {
      display: flex;
      flex-direction:column;
      flex-shrink: 0;
      justify-content: center;
      width: 50%;
      max-width: 16rem;
      margin: auto 2em;
    }
    .product {
      height: 10rem;
      width: 100%;
      background-position: center;
      background-size: cover;
      padding-top: 10%;
    }
    .product-info {
      background: aquamarine;
      color: #FD95C9;
      width: 100%;
      margin-bottom: 10%;
    }
    .details {
      padding: 12px 20px;
    }
.comment-text{
    display: block;
    font-size:xx-large;
    margin: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#Comment-Area{
    display: block;
    font-size:x-large;
    background-color:gainsboro;
    margin: 5px;
    padding: 10px;
    border: 2 px;
    border-color: black;
    border-style: inset;
    font-family: Cambria, Cochin, Georgia, Times, serif;
}
#Submit-button{
    background-color:#B9F3E4;
    font-style: italic;
    font-size: larger;
    border: 3px dashed #93BFCF;  
    margin-left: .5cm;
}
#Submit-button:hover{
    background-color: #F1F7B5;
    border:6px inset #93BFCF;
}
</style>