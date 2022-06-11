<script>
  import TitreOrange from '$components/TitreOrange.svelte';
</script>

<img class="imgWIP" src="/WIP2.svg" alt="Metis studio" />

<div class="flex">
  <div class="content">
    <div class="titre">Sérigraphie</div>

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
    <div class="titre">Risographie</div>
    <div class="texte">
      Procédé d'impression dérivé de l'offset, utilisant un système de stencil et permettant des
      tirages en couleur économiques.
    </div>
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

  .content {
    max-width: 400px;
    margin-top: 2%;
    margin-left: 10px;
    margin-bottom: 2%;
    font-size: 14px;
    color: #007d5e;
  }

  .titre {
    font-family: bakso;
    font-weight: 700;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 30px;
    background-image: url('/contact/Texte-fond.svg');
    background-position: -1% 0%;
    background-size: 30%;
    background-repeat: no-repeat;
  }

  .texte {
  }
</style>
