<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Description titre="MER - La mer" wip>
    A venir !

    <Tags>illustration ; islande ; carnet de voyage ; en cours</Tags>
  </Description>
  <Content>
    <Image src="/mer/02.jpg" alt="Metis studio" />

    <Image src="/mer/01.jpg" alt="Metis studio" />
    <Image src="/mer/03.jpg" alt="Metis studio" />
  </Content>
</Layout>

<style>
  .couleur {
    background-color: #efeff0;
  }
</style>
