<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Description titre="La mer" wip>
    <p>
      En 1946, Charles Trenet décrivait la mer après avoir regardé le paysage défiler à sa fenêtre
      dans un train. Le premier couplet de sa chanson raisonne beaucoup avec la perception qu'on
      peut avoir de la Manche en Normandie. Les ciels très changeants transforment la mer et la côte
      à chaque instant. Les couleurs, les reflets décrits et la vie de ceux qui côtoient le bord de
      mer est ici rendu en dessin.
    </p>
    <p>"La mer</p>
    <p>Qu'on voit danser</p>
    <p>Le long des golfes clairs</p>
    <p>A des reflets d'argent</p>
    <p>La mer</p>
    <p>Des reflets changeants</p>
    <p>Sous la pluie"</p>

    <Tags>dessin à la main ; aquarelle ; illustrations pour enfant ;</Tags>
  </Description>
  <Content>
    <Image src="/mer/1.jpg" alt="Metis studio" />

    <Image src="/mer/2.jpg" alt="Metis studio" />
    <Image src="/mer/3.jpg" alt="Metis studio" />
  </Content>
</Layout>

<style>
  .couleur {
    background-color: #efeff0;
  }
</style>
