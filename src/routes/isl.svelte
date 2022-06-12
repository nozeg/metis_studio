<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Description titre="ISL - Islande, terre de contraste" wip>
    A venir !

    <Tags>illustration ; islande ; carnet de voyage ; en cours</Tags>
  </Description>
  <Content>
    <Image src="/isl/ISL-02.svg" alt="Metis studio" />
    <Image src="/isl/Photos.png" alt="Metis studio" />
    <Image src="/isl/Photos2.png" alt="Metis studio" />
    <Image src="/isl/Photos3.png" alt="Metis studio" />
    <Image src="/isl/Photos4.png" alt="Metis studio" />
    <Image src="/isl/03.jpg" alt="Metis studio" />
    <Image src="/isl/01.jpg" alt="Metis studio" />
    <Image src="/isl/02.jpg" alt="Metis studio" />
  </Content>
</Layout>

<style>
  .couleur {
    background-color: #efeff0;
  }
</style>
