<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Content>
    <Image src="/aqu-images/Montagne_2jpg.jpg" alt="Metis studio" />
    <Image src="/aqu-images/Montagne_1.jpg" alt="Metis studio" />
    <Image src="/aqu-images/Champ_1.jpg" alt="Metis studio" />
    <Image src="/aqu-images/Montagne_3jpg.jpg" alt="Metis studio" />
    <Image src="/aqu-images/Montagne_4.jpg" alt="Metis studio" />
    <Image src="/aqu-images/Lac_1.jpg" alt="Metis studio" />
  </Content>
  <Description titre="AQU - Aquarelles du territoire">
    Quelques extraits d'un cahier de croquis pour tenter de capter les changements de saison dans
    des paysages où l'homme n'est pas. La montagne est un formidable révélateur du temps qui passe,
    elle se fait le miroir de la lumière d'été ou d'hiver, des plantes qui se succèdent au cours de
    l'année...
    <Tags>carnet de croquis ; aquarelle ; dessins à la main ; réalisé</Tags>
  </Description>
</Layout>
