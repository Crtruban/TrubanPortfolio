<template>
  <Sidebar class="sidebar" />
  <router-view :class="`routerView ${viewState}`" :style="{ paddingLeft: (sidebarWidth) }" v-slot="{ Component }">
    <transition name="page-opacity" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import Sidebar from './components/Navigation/Sidebar/Sidebar.vue';
import { sidebarWidth } from './components/Navigation/Sidebar/state'


export default {
  name: 'App',
  title: 'Camryn Truban - Software Engineer',
  components: {
    Sidebar
  },

  data: function () {
    return {
      viewState: 'Home'
    };
  },
  setup() {
    return { sidebarWidth };
  },
  watch: {
    $route(to) {
      document.title = to.name;
      switch (to.name.toString().trim().toLowerCase()) {
        case 'home':
          return this.viewState = 'homeView';
        case 'projects': return this.viewState = 'projectView';
        case 'work history': return this.viewState = 'workHistoryView';
        case 'education': return this.viewState = 'educationView';
        case 'skills': return this.viewState = 'skillsView';
        case 'hobbies': return this.viewState = 'hobbiesView';
      }
    }
  }
}
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 300ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}


.header {
  padding-left: 15%;
  font-size: 550%;
}

:root {
  --sidebar-bg-color: hsl(0, 94%, 20%);
  --sidebar-item-hover: hsl(0, 94%, 60%);
  --sidebar-item-active: hsl(0, 94%, 40%);
}

.Home {
  transform: translateX(1.5%);
}

body {
  color: white;
  text-shadow: 0 0 3px #000000, 0 0 5px #c5c5c5;
  width: 88vw;
  height: 88vh;
  background: url('../src/assets/background-wallpaper.jpg');
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  text-shadow: 0 0 3px #000000, 0 0 5px #c5c5c5;
  margin-top: 60px;
}


.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 0.5em;

  transition: 0.3s ease;
  height: 99%;
  display: flex;
  flex-direction: column;
}</style>
