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
    <Tapis2 />
  </div>
</div>

<style>
  .flex {
    width: 100%;
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .flex {
      justify-content: space-evenly;
      flex-direction: row;
    }
  }

  .content {
    flex-grow: 1;
    flex-basis: 300px;
    justify-content: center;
    margin-top: 10px;
  }

  .description-fixed {
    max-width: 400px;
    margin-top: 50px;
    margin-left: 10px;
    margin-bottom: 2%;
    padding: 10px;
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
    padding: 10px;
    padding-top: 50px;
    padding-bottom: 30px;
  }
  .description-txt {
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
