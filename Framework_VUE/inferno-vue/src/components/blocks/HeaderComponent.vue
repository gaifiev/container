<template>
    <div>
      <header class="header center">
        <div class="container">
          <div class="header__menu">
            <div class="header__left-item">
              <div class="header__logo">
                <a href="./index.html"
                  ><img src="/img/header/logo.png" alt="logo"
                /></a>
              </div>
              <div class="header__title-logo">
                <a href="index.html" class="header__link">
                  <h1 class="header__text-logo">Inferno</h1>
                </a>
              </div>
            </div>
            <div class="header__right-item">
              <a href="./index.html" class="header__link">
                <h1 class="header__text">Home</h1>
              </a>
              <a href="#" class="header__link">
                <h1 class="header__text">Project</h1>
              </a>
              <a href="./blog.html" class="header__link">
                <h1 class="header__text">Blog</h1>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: "WorkspaceJsonIndexComponent",
  
    data() {
      return {
        
      };
    },
  
    mounted() {},
  
    methods: {},
  };
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/style.scss";
  </style>
  