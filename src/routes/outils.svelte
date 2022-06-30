<script>
  import TitreVert from '$components/TitreVert.svelte';
  import Wip from '$components/Wip.svelte';
</script>

<Wip />
<div class="flex">
  <div class="content">
    <div class="title-container">
      <TitreVert>Sérigraphie</TitreVert>
    </div>

    <div class="texte">
      Procédé d'impression à l'aide d'un écran constitué par un cadre sur lequel est tendu un tissu
      à mailles, permettant l'impression sur de multiples surfaces.
    </div>
  </div>
  <img class="photo" src="/outils-img/ser1.jpg" alt="Metis studio" />
  <img class="photo" src="/outils-img/ser2.jpg" alt="Metis studio" />
  <img class="photo" src="/outils-img/ser3.jpg" alt="Metis studio" />
</div>

<div class="flex">
  <div class="content">
    <div class="title-container">
      <TitreVert>Risographie</TitreVert>
    </div>
    <div class="texte">
      Procédé d'impression dérivé de l'offset, utilisant un système de stencil et permettant des
      tirages en couleur économiques.
    </div>
  </div>
  <img class="photo" src="/outils-img/riso.jpg" alt="Metis studio" />
</div>

<style>
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

  .content {
    max-width: 400px;
    margin-top: 2%;
    margin-left: 10px;
    margin-bottom: 2%;
    font-size: 14px;
    color: #007d5e;
  }

  .title-container {
    margin-bottom: 32px;
  }
</style>
