<template>
    <div>
      <div class="container">
        <div v-for="(video,id) in videoList" :key="id" class="vid-con" >
        <NuxtLink :to="`/player/${video.id}`">
        <div :style="{backgroundImage: `url(${video.poster})`}" class="vid"></div>
        <div class="movie-info">
          <div class="details">
          <h2>{{video.name}}</h2>
          <p>{{video.duration}} mins</p>
          <p>Rating : {{ video.vidscore }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
      </div>
    </div>
    </template>

    <script>

    export default {
        props:['videoList'],
        
    }
    </script>

<style scoped>
.container {
      display:flex;
      flex-wrap: wrap;
      justify-content:space-evenly;
      align-items: center;
      margin-top: 2rem;
    }
    .vid-con {
      display: flex;
      flex-direction:column;
      flex-shrink: 0;
      justify-content: center;
      width: 100%;
      max-width: 20rem;
      margin: auto 2em;
    }
    .vid {
      height: 10rem;
      width: 100%;
      background-position: center;
      background-size: cover;
      padding-top: 10%;
    }
    .movie-info {
      background: #9AD9DB;
      color:#218B82;
      width: 100%;
      margin-bottom: 10%;
    }
    .details {
      padding: 12px 20px;
    }
    </style>