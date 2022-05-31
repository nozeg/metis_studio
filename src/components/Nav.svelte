<script>
  import LogoGif from './LogoGIF.svelte';
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
    <a href="https://www.linkedin.com/company/m%C3%A9tis-studio/" target="_blank"> <Imagebas /></a>
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

  .logo-gif-container {
    margin: 16px 16px 16px;
  }

  .logo-texte-container {
    margin: 50px 0px 56px 0px;
    display: flex;
    justify-content: center;
    font-weight: 1000;
  }

  .links {
    display: block;
    margin-left: 30px;
    text-decoration: none;
    color: #576775;
    font-size: 18;
  }

  .reseaux {
    position: fixed;
    bottom: 5px;
    left: 30px;
    width: 100%;
    height: 40px;
  }

  .reseaux2 {
    position: fixed;
    bottom: 12px;
    left: 60px;
    width: 100%;
    height: 40px;
  }

  .imagebas {
    position: fixed;
    bottom: 8%;
    left: -8%;
  }
</style>
