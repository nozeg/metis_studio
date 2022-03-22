<script context="module" lang="ts">
  import { loadAllProjects } from '$lib/projets';

  // la fonction de chargement des projets
  export const load = async ({ params }) => {
    const projects = await loadAllProjects();
    return {
      props: {
        projects,
      },
    };
  };
</script>

<script lang="ts">
  import type Projet from '$types/projet';

  import LienProjet from '../components/LienProjet.svelte';
  export let projects: Projet[];
</script>

<div class="listeprojets">
  <LienProjet
    titre="INV - Villes invisibles"
    lien="/projet"
    image="/inv-img/inv-1-01-01.jpg"
    colorbox="#c96f44"
  />
  <LienProjet
    titre="Poubelle de table"
    lien="/projet"
    image="/inv-img/Cremaillere.gif"
    colorbox="#37553e"
  />
  <LienProjet
    titre="SAT - Ecole chantier"
    lien="/projet"
    image="/inv-img/Amin.jpg"
    colorbox="#e6b399"
  />

  <LienProjet
    titre="SAT - Ecole chantier"
    lien="/projet"
    image="/Icone_maison-infini.gif"
    colorbox="#e6b399"
  />

  <LienProjet
    titre="SAT - Ecole chantier"
    lien="/projet"
    image="/inv-img/CaraMockup.jpg"
    colorbox="#a7802e"
  />
  <LienProjet
    titre="SAT - Ecole chantier"
    lien="/projet"
    image="/Fleursbalcon-01-01.jpg"
    colorbox="#4d6e56"
  />

  {#each projects as project}
    <LienProjet
      titre={project.titre}
      lien={`/${project.lien}`}
      colorbox={project.color}
      image={project.thumbnail}
    />
  {/each}
</div>

<style>
  .listeprojets {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 16px 0px 16px 0px;
  }
</style>
