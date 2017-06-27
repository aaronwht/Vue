<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader';
export default {
  name: 'app',
  components: {
    'nav-header': NavHeader
  }
}
</script>