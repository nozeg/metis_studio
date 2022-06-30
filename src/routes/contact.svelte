<script>
  import { onMount } from 'svelte';
  import caesar from '$lib/caesar';
  import TitreVert from '$components/TitreVert.svelte';

  const hashedEmail = 'ijpm)h`odn)nop_dj;bh\\dg)^jh';
  let email = hashedEmail;
  onMount(() => {
    email = caesar(email, 5);
  });
</script>

<div class="flex">
  <div class="description">
    <div class="description-fixed">
      <div class="title-container">
        <TitreVert>Contactez-moi !</TitreVert>
      </div>
      <div class="description-txt">
        Pour toute demande, information, ou collaboration, n'hésitez pas à écrire à :
      </div>
      <div>
        <a class="description-txt" href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <div class="titre2">We speak english ♥</div>
      </div>
    </div>
  </div>
  <div class="content">
    <img src="/contact/Dessin-contact.jpg" alt="Metis studio" />
  </div>
</div>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .content {
    flex-grow: 1;
    flex-basis: 300px;
    justify-content: center;
  }

  .description {
    flex-basis: 400px;
  }

  .description-fixed {
    padding: 100px 30px 16px 30px;
    text-align: justify;
    color: #0c795c;
    font-size: 14px;
  }

  .title-container {
    margin-bottom: 32px;
  }

  .titre2 {
    font-family: bakso;
    font-weight: 700;
    font-size: 14px;
    padding-top: 50px;
    padding-bottom: 30px;
  }
  .description-txt {
    margin-bottom: 10px;
  }

  img {
    margin: 0;
    padding: 0;
    max-width: 100%;
    max-height: 100vh;
  }
</style>
