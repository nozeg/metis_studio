<script context="module" lang="ts">
  import type Projet from '$types/projet';

  // la fonction de chargement des projets
  export const load = async ({ params }) => {
    try {
      const { default: projet } = await import(`../projets/${params.projet}.ts`);
      return {
        props: {
          projet,
        },
      };
    } catch (error) {
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
