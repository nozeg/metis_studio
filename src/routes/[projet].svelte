<script context="module" lang="ts">
  import type Projet from '$types/projet';
  import { loadProjet } from '$lib/projets';

  // la fonction de chargement des projets
  export const load = async ({ params }) => {
    try {
      const projet = await loadProjet(params.projet);
      return {
        props: {
          projet,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        status: 404,
        error: error.message,
      };
    }
  };
</script>

<script lang="ts">
  import RenderedProjet from '../components/Projet.svelte';
  export let projet: Projet;
</script>

<RenderedProjet {projet} />
