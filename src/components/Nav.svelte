<script>
  import LogoGif from './LogoGIF.svelte';
  import LogoTexte from './LogoTexte.svelte';
  import LogoInsta from './LogoInsta.svelte';
</script>

<nav>
  <div class="logo-gif-container">
    <a href="/">
      <LogoGif />
    </a>
  </div>
  <a class="logo-texte-container" href="/">
    <LogoTexte />
  </a>

  <a class="links" href="/"> projets </a>
  <a class="links" href="/projet"> outils </a>
  <a class="links" href="/about"> à propos </a>
  <a class="links" href="/contact"> contact </a>

  <a class="links" href="/boutique"> boutique </a>

  <div class="reseaux">
    <a href="https://www.instagram.com/metis.studio.ch/" target="_blank"> <LogoInsta /></a>
  </div>
</nav>

<style>
  nav {
    width: 264px;
    background-color: white;
  }

  .logo-gif-container {
    margin: 16px 16px;
  }

  .logo-texte-container {
    margin: -50px 0px 56px 0px;
    display: flex;
    justify-content: center;
    color: #37553e;
    font-weight: 800;
    padding: 0px 50px;
  }

  .links {
    display: block;
    margin-left: 30px;
    text-decoration: none;
    color: #37553e;
    font-weight: 800;
    font-size: small;
  }

  .reseaux {
    position: fixed;
    bottom: 5px;
    left: 30px;
    width: 100%;
    height: 40px;
  }
</style>
