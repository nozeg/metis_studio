<script>
  import 'normalize.css/normalize.css';
  import '../global.css';
  import Nav from '../components/Nav.svelte';
  import { Hamburger } from 'svelte-hamburgers';

  // mobile nav open
  let open = false;
</script>

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
  </div>

  <main>
    <slot />
  </main>
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
  }

  main {
    flex-grow: 1;
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
</style>
