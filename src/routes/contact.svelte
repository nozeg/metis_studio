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

<div class="flex">
  <div class="description">
    <div class="description-fixed">
      <div>
        <div class="titre">Contactez-moi !</div>
      </div>
      <div class="description-txt">
        Pour toute demande, information, ou collaboration, n'hésitez pas à écrire à :
      </div>
      <div>
        <a class="description-txt" href="mailto:nour.metis.studio@gmail.com"
          >nour.metis.studio@gmail.com</a
        >
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
  }

  .content {
    flex-grow: 1;
    justify-content: center;
  }

  .description {
    width: 400px;
    flex-shrink: 0;
  }

  .description-fixed {
    position: fixed;
    top: 0;
    width: 400px;
    padding: 100px 30px 16px 30px;
    margin-bottom: 100px;
    text-align: justify;
    color: #0c795c;
    font-size: 14px;
    background-color: white;
  }

  .titre {
    font-family: bakso;
    font-weight: 700;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 30px;
    background-image: url('/contact/Texte-fond.svg');
    background-position: 0% -20%;
    background-size: 50%;
    background-repeat: no-repeat;
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
