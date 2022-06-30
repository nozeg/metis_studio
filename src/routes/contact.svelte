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
    <div class="title-container">
      <TitreVert>Contactez-moi !</TitreVert>
    </div>

    <div class="texte">
      Pour toute demande, information, ou collaboration, n'hésitez pas à écrire à :
    </div>
    <div>
      <a class="texte" href={`mailto:${email}`}>{email}</a>
    </div>
    <div>
      <div class="anglais">We speak english ♥</div>
    </div>
  </div>
  <svg class="photo">
    <Tapis2 />
  </svg>
</div>

<style>
  .photo {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 5px;
  }

  .flex {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-grow: 1;
    align-items: left;
    text-align: left;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .flex {
      margin-top: 10%;
      justify-content: space-evenly;
      flex-direction: row;
    }
  }

  .content {
    max-width: 400px;
    padding: 10px;
    margin-top: 2%;
    margin-left: 10px;
    margin-bottom: 2%;
    font-size: 14px;
    color: #007d5e;
  }

  .title-container {
    margin-bottom: 32px;
  }

  .texte {
    max-width: 400px;

    text-align: justify;
    color: #0c795c;
    font-size: 14px;
  }

  .anglais {
    font-family: bakso;
    font-weight: 700;
    font-size: 14px;
    padding-top: 50px;
    padding-bottom: 30px;
  }

  svg {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 5px;
  }
</style>
