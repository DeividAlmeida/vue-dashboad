<template>
  <div id="menu">
    <div
      class="logo d-flex justify-content-center m-4 m-md-5 m-lg-5 m-lx-5 m-xxl-5"
    >
      <img
        alt="Vue logo"
        class="logo"
        src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/world-cup.png"
        width="125"
        height="125"
      />
    </div>
    <nav>
      <RouterLink
        class="item-menu d-flex d-md-block d-lg-block d-xl-block d-xxl-block justify-content-center text-white p-2"
        to="/"
      >
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex"
            >Início
          </span>
          <img
            width="40"
            height="40"
            src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/home.png"
            alt="home"
          />
        </div>
      </RouterLink>
      <RouterLink
        class="item-menu d-flex d-md-block d-lg-block d-xl-block d-xxl-block justify-content-center text-white p-2"
        to="/teams"
      >
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex"
            >Seleções
          </span>
          <img
            width="40"
            height="40"
            src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/pennant.png"
            alt="teams"
          />
        </div>
      </RouterLink>
      <RouterLink
        class="item-menu d-flex d-md-block d-lg-block d-xl-block d-xxl-block justify-content-center text-white p-2"
        to="/players"
      >
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex"
            >Jogadores
          </span>
          <img
            width="40"
            height="40"
            src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/kick-off.png"
            alt="players"
          />
        </div>
      </RouterLink>
      <RouterLink
        class="item-menu d-flex d-md-block d-lg-block d-xl-block d-xxl-block justify-content-center text-white p-2"
        to="/matchs"
      >
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-bold d-none d-md-flex d-lg-flex d-xl-flex d-xxl-flex"
            >Partidas
          </span>
          <img
            width="40"
            height="40"
            src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/football-field.png"
            alt="matchs"
          />
        </div>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
#menu {
  left: 0px;
  top: 0px;
  width: auto;
  height: 100%;
  background-color: var(--vt-c-indigo);
  box-shadow: 0px 0 5px 1px var(--vt-c-indigo);
}

.item-menu:hover {
  background: var(--vt-c-text-dark-2);
}

.router-link-active {
  background: var(--vt-c-text-dark-2);
}

@media screen and (max-width: 770px) {
  .logo > img {
    display: none !important;
  }
}
</style>
