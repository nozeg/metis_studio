<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Description titre="ITI - Les motifs itinérants" wip>
    Une collection de motifs réalisés à la suite de promenades ou voyages. Tout est source
    d’inspiration et particulièrement la faune et la flore qu’on peut trouver dans les lieux du
    quotidien : une fissure dans le goudron accueillera quelques tiges de pissenlit, une
    anfractuosité dans un mur abritera une nichée de mésanges… Il suffit juste d'ouvrir les yeux !

    <p>Et puisqu'il est important de se projeter, les motifs se font aussi support.</p>
    <Tags>illustration ; islande ; carnet de voyage ; en cours</Tags>
  </Description>
  <Content>
    <Image src="/isl/Fleurs-motifs-02.jpg" alt="Metis studio" />
    <Image src="/isl/Fleurs-motifs-livre.jpg" alt="Metis studio" />
    <Image src="/isl/03.jpg" alt="Metis studio" />
    <Image src="/isl/02-livre.jpg" alt="Metis studio" />
    <Image src="/isl/01.jpg" alt="Metis studio" />
    <Image src="/isl/03-livre.jpg" alt="Metis studio" />
  </Content>
</Layout>

<style>
  .couleur {
    background-color: #efeff0;
  }
</style>
