<script>
  import CourbeLogoTexte from './CourbeLogoTexte.svelte';
  import LogoGif from './LogoGIF.svelte';
  import LogoTexte from './LogoTexte.svelte';
</script>

<nav>
  <div class="logo-gif-container">
    <LogoGif />
  </div>
  <div class="logo-texte-container">
    <LogoTexte />
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 264px;
  }

  .logo-gif-container {
    margin: 16px 16px;
  }

  .logo-texte-container {
    margin: -16px 20px 20px 20px;
    display: flex;
    justify-content: center;
  }
</style>
