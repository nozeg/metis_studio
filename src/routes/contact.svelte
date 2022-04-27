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

<div class="flex milieu">
  <div class="boxtexte">
    <div class="titre">
      <TitreOrange backgroundColor="#fbf2ef">Contactez-moi !</TitreOrange>
    </div>
    <div class="texte bold">Métis studio</div>
  </div>

  <div class="texte2">
    Pour toute demande, information, ou collaboration, n'hésitez pas à écrire à :
  </div>
  <div class="texte2">
    {#if email !== hashedEmail}
      <a href={`mailto:${email}`}>{email}</a>
    {:else}
      <a href="#a">{' '}</a>
    {/if}
  </div>
  <img class="flex dessin2" src="/contact/lettre.svg" alt="Métis Studio" />
</div>

<style>
  .milieu {
    flex-grow: 1;
  }
  .boxtexte {
    width: 50%;
    margin-top: 10%;
    margin-left: 10%;
    position: relative;
  }

  .dessin2 {
    max-width: 100%;
    height: auto;
    display: block;
    margin-left: 55%;
    margin-top: -15%;
    padding: 20px;
  }

  .bold {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .texte2 {
    font-size: 14px;
    width: 50%;
    margin-top: 10px;
    margin-left: 10%;
  }
</style>
