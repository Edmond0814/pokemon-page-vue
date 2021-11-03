<template>
  <nav class="nav-bar">
    <ul>
      <li class="navlink">
        <router-link to="/Home">
          <span
            class="iconify"
            data-icon="ant-design:home-outlined"
            data-width="35"
            data-height="35"
          ></span>
          Home
        </router-link>
      </li>
      <li class="navlink">
        <router-link to="/pokemon">
          <span
            class="iconify"
            data-icon="mdi:pokeball"
            data-width="35"
            data-height="35"
          ></span>
          Pokemon
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
span {
  height: 100px;
}

.nav-bar {
  position: fixed;
  width: 100%;
  z-index: 10001;
}

ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: red;
  color: white;
  list-style-type: none;
}

a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  padding: 0 25px;
  color: wheat;
  text-decoration: none;
}

a:hover {
  background-color: rgba(200, 0, 0, 0.5);
}
</style>
