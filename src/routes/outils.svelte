<script>
  import TitreOrange from '$components/TitreOrange.svelte';
</script>

<img class="imgWIP" src="/WIP2.svg" alt="Metis studio" />

<div class="flex">
  <TitreOrange backgroundColor="#fbf2ef">Sérigraphie</TitreOrange>

  <div class="texte">
    Procédé d'impression à l'aide d'un écran constitué par un cadre sur lequel est tendu un tissu à
    mailles, permettant l'impression sur de multiples surfaces.
  </div>
  <img class="photo" src="/outils-img/ser1.jpg" alt="Metis studio" />
  <img class="photo" src="/outils-img/ser2.jpg" alt="Metis studio" />
  <img class="photo" src="/outils-img/ser3.jpg" alt="Metis studio" />
</div>

<div class="flex">
  <TitreOrange backgroundColor="#fbf2ef">Risographie</TitreOrange>
  <div class="texte">
    Procédé d'impression dérivé de l'offset, utilisant un système de stencil et permettant des
    tirages en couleur économiques.
  </div>
  <img class="photo" src="/outils-img/riso.jpg" alt="Metis studio" />
</div>

<style>
  .imgWIP {
    margin-left: 70%;
    margin-top: 5%;
    margin-bottom: -10%;
  }

  .photo {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 5px;
  }

  .flex {
    margin-top: 10%;
    margin-bottom: 10%;
  }

  .texte {
    margin-top: 2%;
    margin-bottom: 2%;
    max-width: 50%;
    font-size: 14px;
  }
</style>
