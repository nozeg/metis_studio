<script>
  import LogoGif from './LogoGIF.svelte';
  import LogoTexte from './LogoTexte.svelte';
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

  <a class="links" href="/projet"> projets </a>
  <a class="links" href="/projet"> outils </a>
  <a class="links" href="/about"> à propos </a>
  <a class="links" href="/contact"> contact </a>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
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
</style>
