<script>
  import { onMount } from 'svelte';
  import caesar from '$lib/caesar';
  import TitreOrange from '$components/TitreOrange.svelte';

  const hashedEmail = 'h`odn)nop_dj;bh\\dg)^jh';
  let email = hashedEmail;
  onMount(() => {
    email = caesar(email, 5);
  });
</script>

<div class="container">
  <div class="tout">
    <div class="titre">
      <TitreOrange backgroundColor="#fff">Contactez-moi !</TitreOrange>
    </div>

    <div class="texte bold">Métis studio</div>
    <div class="texte">
      {#if email !== hashedEmail}
        <a href={`mailto:${email}`}>{email}</a>
      {:else}
        <a href="#a">{' '}</a>
      {/if}
    </div>

    <div class="texte">Vous pouvez aussi me retrouver ici :</div>
  </div>
</div>

<img class="zigzag" src="/Vague.gif" alt="vague" />

<img class="zigzag" src="/Sparkle.gif" alt="vague" />

<style>
  .container {
    display: flex;
  }
  .tout {
    flex-grow: 0;
    flex-shrink: 0;
    background-color: #fcf3f0;
    padding: 10px;
    padding-right: 40px;
    margin-top: 100px;
  }
  .titre {
    font-weight: 800;
    font-size: 18px;
    margin-bottom: 30px;
    color: #c96f44;
  }

  .texte {
    font-weight: 100px;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .bold {
    font-weight: 600;
    font-size: 16px;
  }

  .zigzag {
    margin-top: 20px;
    max-width: 20%;
  }

  a::before {
    content: '\200b';
  }
</style>
