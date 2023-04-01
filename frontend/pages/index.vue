<template>
    <div>
        <Video :videoList=videos />
      
    </div>
    </template>

    <script setup>
    import Video from "@/components/Video.vue"
      components: {
        Video
      }
    head: {
        title: "Home"
      }
       
       const { data:videos } = await useFetch('http:localhost:5000/videos')

    </script>
    <style>
  html{
    background-color: #98D4BB;
  }
  </style>