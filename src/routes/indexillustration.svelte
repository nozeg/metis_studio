<script lang="ts">
  import LogoTexte from '$components/LogoTexte.svelte';
  import LienProjet from '../components/LienProjet.svelte';
</script>

<div class="listeprojets">
  <div class="home-logo">
    <LogoTexte width="100%" />
  </div>
  <LienProjet titre="" lien="" image="/inv-img/Maison.jpg" colorbox="#576775" />
  <LienProjet titre="MER - La mer" lien="/mer" image="/mer/1.jpg" colorbox="#cbe0f3" />

  <LienProjet titre="" lien="" image="/inv-img/Cabane.jpg" colorbox="#f2c8bf" />

  <LienProjet titre="" lien="" image="/inv-img/Cara-1.jpg" colorbox="#f2c8bf" />

  <LienProjet
    titre="ITI - Les motifs itinérants"
    lien="/iti"
    image="/isl/01.jpg"
    colorbox="#576775"
  />
  <LienProjet titre="" lien="" image="/inv-img/Clos.png" colorbox="#cbe0f3" />
  <LienProjet
    titre="AQU - Aquarelles du territoire"
    lien="/aquarelle"
    image="/aqu-images/Montagne_2jpg.jpg"
    colorbox="#f2c8bf"
  />
  <LienProjet titre="" lien="" image="/inv-img/Mer_craie_1.jpg" colorbox="#cbe0f3" />

  <LienProjet
    titre="GRE - Une histoire de grenouilles"
    lien="/gre"
    image="/gre/08.jpg"
    colorbox="#576775"
  />
  <LienProjet titre="" lien="" image="/inv-img/cagette.png" colorbox="#cbe0f3" />

  <LienProjet titre="" lien="" image="/Icone_maison-infini.gif" colorbox="#cbe0f3" />
  <LienProjet titre="" lien="" image="/inv-img/inv-1-01-01.jpg" colorbox="#576775" />
</div>

<style>
  .listeprojets {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 16px 0px 16px 0px;
  }

  .home-logo {
    width: min(100%, 400px);
    margin-top: -16px;
  }
  @media (min-width: 1025px) {
    .home-logo {
      display: none;
    }
  }
</style>
