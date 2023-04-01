<template>

    </template>

  <script>
    export default {
        props:['productList'],
    }
    </script>

<style scoped>
.container {
      display:flex;
      justify-content:space-evenly;
      align-items: center;
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
    </style>