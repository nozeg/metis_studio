<script>
  import Imagefond from '$components/imagefondpaysage.svelte';
  import Imagefondportrait from '$components/Imagefondportrait.svelte';
  import Imagefondportrait2 from '$components/Imagefondportrait2.svelte';
  import LienProjet from '$components/LienProjet.svelte';
  import Logonew from '$components/Logonew.svelte';
  import Urbanismeindex from '$components/Urbanismeindex.svelte';
</script>

<div class="header">
  <div class="logo">
    <Logonew />
  </div>
  <div class="boite-gros-titre" />
  <div class="gros-titre">Urbanisme et mediation</div>
  <div class="body">
    <a class="arrow" href="#next" />
  </div>
</div>
<div class="boite-choix" id="next" />
<div class="galerie">
  <div class="galerie-colonnes">
    <LienProjet
      image="/sat-2/01-2.jpg"
      titre="Satimini, histoires courtes de Satigny"
      lien="/sat-2"
    >
      <Imagefondportrait />
    </LienProjet>
    <LienProjet image="/val-img/27042022-DSC03941.jpg" titre="Le long de la Valserine" lien="/val">
      <Imagefond />
    </LienProjet>
    <LienProjet
      image="/cab/02.jpg"
      titre="Festival des Cabanes d’Annecy 2022, Altitude"
      lien="/cab"
    >
      <Imagefondportrait />
    </LienProjet>
  </div>
  <div class="galerie-colonnes">
    <LienProjet image="/sat-img/06.jpg" titre="Ecole chantier, Billard Fin !" lien="/sat">
      <Imagefondportrait />
    </LienProjet>
    <LienProjet image="/bel-images/Hotel-de-ville-bleu.gif" titre="Bellegarde Art Deco" lien="/bel">
      <Imagefondportrait />
    </LienProjet>
    <Urbanismeindex />
    <LienProjet titre="" image="/coll/Collage-GP.jpeg" />
  </div>
</div>

<!-- <span class="arrowAni">up</span> -->
<style>
  .logo {
    max-width: 50px;
  }
  .header {
    padding-top: 8.5em;
    padding-left: 4em;
    padding-right: 4em;
    margin-top: -5.5em;
    z-index: 2;
    position: relative;
    border: 0 solid #333;
    background-repeat: no-repeat;
  }
  .image {
    display: block;
    z-index: 2;
    position: relative;
    border: 0 solid #333;
    background-repeat: no-repeat;
    max-width: 100%;
  }
  .boite-gros-titre {
    position: relative;
    background-color: #fff;
    background-position: 50%;
    background-size: 100%;
    background-size: cover;
  }

  .petit-titre {
    font-family: SuisseIntl-Book;
    color: #0bac81;
    line-height: 1em;
    display: block;
    font-size: 1em;
    font-weight: 50;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-decoration: none;
  }

  .gros-titre {
    font-family: QanelasSoftDEMO-ExtraBold;
    color: #0bac81;
    padding-bottom: 10px;
    line-height: 1em;
    font-weight: 500;
    display: block;
    font-size: 4em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .boite-choix {
    border-bottom: 0.05em solid #0bac81;
    width: auto;
    padding-left: 4em;
    padding-right: 4em;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .deux-colonnes {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  .texte-aligne-droite {
    justify-self: right;
  }

  .galerie {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2em;
    padding: 4em;
  }

  .galerie-colonnes {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .body {
    transform: rotate(-90deg);
    margin-bottom: 1em;
  }

  .arrow {
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    /*   border:solid 1px white; */
    transition: 0.5s;
    overflow: hidden;
  }

  .arrow:hover {
    /*  animation:borderAni 5s cubic-bezier(0, 0.6, 1, 0.4); */
    border: solid 2px none;
    border-radius: 50%;
  }
  .arrow:after {
    position: absolute;
    display: block;
    content: '';
    color: #007d5e;
    width: 20px;
    height: 15px;
    /*   border:solid 1px;  */
    top: -1px;
    border-bottom: solid 2px;
    transform: translatex(4px);
  }

  .arrow:before {
    position: absolute;
    display: block;
    content: '';
    color: #007d5e;
    width: 6px;
    height: 6px;

    /*   border:solid 1px;  */
    border-top: solid 2px;
    border-left: solid 2px;
    top: 50%;
    left: 2px;
    transform-origin: 0% 0%;
    transform: rotate(-45deg);
  }
  .arrow:hover:before {
    animation: aniArrow01 1s cubic-bezier(0, 0.6, 1, 0.4) infinite 0.5s;
  }

  .arrow:hover:after {
    animation: aniArrow02 1s cubic-bezier(0, 0.6, 1, 0.4) infinite 0.5s;
  }

  @keyframes aniArrow01 {
    0% {
      transform: rotatez(-45deg) translateY(30px) translateX(30px);
    }
    100% {
      transform: rotatez(-45deg) translateY(-35px) translateX(-35px);
    }
  }

  @keyframes aniArrow02 {
    0% {
      transform: translateX(45px);
    }
    100% {
      transform: translateX(-44px);
    }
  }

  @keyframes borderAni {
    0% {
      border: solid 0px none;
    }
    100% {
      border: solid 0px none;
      border-radius: 50%;
    }
  }

  .souligne {
    position: relative;
    text-decoration: none;
  }

  .souligne::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 3px;
    background-color: #0bac81;
    bottom: -0.5em;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .souligne:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
</style>
