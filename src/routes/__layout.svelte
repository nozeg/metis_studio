<script>
  import 'normalize.css/normalize.css';
  import '../global.css';
  import Nav from '../components/Nav.svelte';
  import { Hamburger } from 'svelte-hamburgers';
  import { afterNavigate } from '$app/navigation';
  import Footer from '$components/Footer.svelte';

  // mobile nav open
  let open = false;
  const closeMenu = () => {
    if (open) {
      open = false;
    }
  };
  // close the menu on navigation
  afterNavigate(closeMenu);
  // close the menu on click outside of the menu
</script>

<svelte:head>
  <title>Métis Studio | Urbanisme & illustration</title>
</svelte:head>

<div class="layout" class:open>
  <div class="mobile-menu-toggle">
    <Hamburger
      bind:open
      type="minus"
      --color="#37553e"
      --layer-width="20px"
      --layer-spacing="4px"
      --layer-height="1.5px"
    />
  </div>
  <div class="nav-spacer">
    <div class="nav-container">
      <Nav />
    </div>
    <div class="nav-clickaway" on:click={closeMenu} />
  </div>
  <div class="main">
    <main>
      <slot />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</div>

<style>
  .nav-container {
    background-color: white;
    position: fixed;
    z-index: 10000;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 264px;
  }
  .nav-spacer {
    width: 264px;
    min-height: 264px;
    flex-shrink: 0;
  }

  .layout {
    display: flex;
    min-height: 100vh;
  }
  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    .nav-spacer {
      width: 0px;
    }
    .nav-container {
      background-color: white;
      position: fixed;
      z-index: 10000;
      top: 0px;
      bottom: 0px;
      left: -264px;
      width: 264px;
      transition: transform 0.2s ease-in-out;
      transform: translate3d(0, 0, 0);
    }
    .open .nav-container {
      transform: translate3d(264px, 0, 0);
    }

    .nav-clickaway {
      pointer-events: none;
      position: fixed;
      z-index: 9999;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      background-color: #555;
      opacity: 0;
      transition-property: opacity;
      transition-duration: 200ms;
    }
    .open .nav-clickaway {
      pointer-events: all;
      opacity: 0.7;
    }
    .mobile-menu-toggle {
      position: fixed;
      top: 16px;
      left: 16px;
      z-index: 11000;
      transition: all 0.2s ease-in-out;
      transform: translate3d(0, 0, 0);
      background-color: white;
      border-radius: 40px;
    }

    .open .mobile-menu-toggle {
      transform: translate3d(264px, 0, 0);
    }
  }

  @media (min-width: 1025px) {
    .nav-container {
      width: 264px;
      min-height: 264px;
      flex-shrink: 0;
    }
    .mobile-menu-toggle {
      display: none;
    }
  }

  footer {
    max-width: 100%;
    bottom: 0;
  }
</style>
