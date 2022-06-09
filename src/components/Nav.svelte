<script>
  import LogoTexte from './LogoTexte.svelte';
  import LogoInsta from './LogoInsta.svelte';
  import LogoL from './LogoL.svelte';
  import Imagebas from './Imagebas.svelte';
</script>

<nav>
  <a class="logo-texte-container" href="/">
    <LogoTexte />
  </a>

  <a class="links" href="/"> projets </a>

  <a class="links" href="/about"> à propos </a>
  <a class="links" href="/contact"> contact </a>
  <a class="links" href="/outils"> outils </a>

  <div class="imagebas">
    <Imagebas />
  </div>

  <div class="reseaux">
    <a href="https://www.instagram.com/metis.studio.ch/" target="_blank"> <LogoInsta /></a>
  </div>

  <div class="reseaux2">
    <a href="https://www.linkedin.com/company/m%C3%A9tis-studio/" target="_blank"> <LogoL /></a>
  </div>
</nav>

<style>
  nav {
    width: 264px;
    background-color: white;
  }

  .logo-texte-container {
    margin: 0px 0px 70px 0px;
    display: flex;
    justify-content: center;
    font-weight: 1000;
  }

  .links {
    display: block;
    margin-left: 30px;
    text-decoration: none;
    color: #007d5e;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
    letter-spacing: 1.5px;
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

  .imagebas {
    position: fixed;
    bottom: -5px;
    left: 0px;
  }
</style>
