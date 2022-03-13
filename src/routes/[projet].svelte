<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit';
  import type Projet from '../types/projet';
  import type { SvelteComponent } from 'svelte';
  export const load = async ({ params }): Promise<LoadOutput> => {
    try {
      const {default: projet}: SvelteComponent = await import(`../projets/${params.projet}.ts`);
      return {
        props: {
          projet
        }
      };
    } catch (error) {
      return {
        status: 404,
        error: error.message
      };
    }
  };
</script>

<script lang="ts">
  import RenderedProjet from '../components/Projet.svelte';
  export let projet: Projet;
</script>

<RenderedProjet {projet} />
