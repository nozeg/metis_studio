<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Description titre="GRE – Une histoire de grenouilles" wip>
    <p>
      Des grenouilles de toutes sortes, de toutes tailles, de toutes les couleurs, tantôt
      anthropomorphes, tantôt sauvages, représentées à l’aquarelle.
    </p>

    <Tags>dessin à la main ; aquarelle ; illustrations pour enfant ;</Tags>
  </Description>
  <Content>
    <Image src="/gre/08.jpg" alt="Metis studio" />
    <Image src="/gre/9.jpg" alt="Metis studio" />
    <Image src="/gre/10.jpg" alt="Metis studio" />
    <Image src="/gre/11.jpg" alt="Metis studio" />
    <Image src="/gre/12.jpg" alt="Metis studio" />
    <Image src="/gre/13.jpg" alt="Metis studio" />
  </Content>
</Layout>
