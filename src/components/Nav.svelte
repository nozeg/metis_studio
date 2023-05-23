<script>
  import LogoInsta from './LogoInsta.svelte';
  import LogoL from './LogoL.svelte';
</script>

<nav>
  <a class="links" href="/" sveltekit:prefetch> projets </a>
  <a class="links" href="/about3"> a propos </a>
  <a class="links" href="/contact"> contact </a>
  <a class="links" href="/outils"> outils </a>

  <div class="reseaux">
    <a href="https://www.instagram.com/metis.studio.ch/" target="_blank"> <LogoInsta /></a>
  </div>

  <div class="reseaux2">
    <a href="https://www.linkedin.com/company/m%C3%A9tis-studio/" target="_blank"> <LogoL /></a>
  </div>
</nav>

<style>
  nav {
    width: 100%;
    background-color: white;
    margin-top: 4em;
  }

  @media (min-width: 1025px) {
    .logo-texte-container {
      margin: 0px 0px 70px 0px;
      display: flex;
      justify-content: center;
    }
  }

  .links {
    margin-top: 2em;
    margin-left: 30px;
    text-decoration: none;
    color: #0bac81;
    font-size: 4em;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-family: QanelasSoftDEMO-ExtraBold;
  }

  .reseaux {
    position: fixed;
    bottom: 25px;
    left: 30px;
    width: 25px;
    height: 25px;
  }

  .reseaux2 {
    position: fixed;
    bottom: 25px;
    left: 60px;
    width: 25px;
    height: 25px;
  }
</style>
