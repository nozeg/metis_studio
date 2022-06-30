<script>
  import { onMount } from 'svelte';
  import caesar from '$lib/caesar';
  import TitreVert from '$components/TitreVert.svelte';
  import Tapis2 from '$components/Tapis2.svelte';

  const hashedEmail = 'ijpm)h`odn)nop_dj;bh\\dg)^jh';
  let email = hashedEmail;
  onMount(() => {
    email = caesar(email, 5);
  });
</script>

<div class="flex">
  <div class="content">
    <h1 class="title-container">
      <TitreVert>Contactez-moi !</TitreVert>
    </h1>

    <p class="texte">
      Pour toute demande, information, ou collaboration, n'hésitez pas à écrire à :
    </p>

    <a class="texte" href={`mailto:${email}`}>{email}</a>

    <p class="anglais">We speak english ♥</p>
  </div>
  <Tapis2 />
</div>

<style>
  svg {
    display: flex;
    height: auto;
    display: block;
    margin-top: 5px;
  }

  .flex {
    width: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    text-align: left;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .flex {
      justify-content: space-evenly;
      flex-direction: row;
    }
  }

  .content {
    max-width: 400px;
    margin-top: 2%;
    margin-left: 10px;
    margin-bottom: 2%;
    font-size: 14px;
    color: #007d5e;
  }

  .title-container {
    padding-left: 10px;
  }

  .anglais {
    max-width: 400px;
    padding: 10px;
    text-align: justify;
    font-family: bakso;
    font-weight: 700;
    font-size: 14px;
    padding-top: 50px;
    padding-bottom: 30px;
  }
</style>
