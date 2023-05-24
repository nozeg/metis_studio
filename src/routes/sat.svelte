<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
  import Map from '$components/Map.svelte';
</script>

<Layout>
  <Description titre="Ecole chantier, Billard Fin !" wip>
    Tout est mouvement. Tout se réinvente. Notre école va changer ! Aborder son futur, c’est avant
    tout s’intéresser, participer et contribuer à sa construction. Transformons notre école, comme
    nous nous transformons. En développant notre conscience de ce lieu que nous habitons la plupart
    du temps. Allons-y ! Devenons les créateurs et mettons en perspective nos propres envies et
    obligations. Civisme social, amical, généreux et collaboratif, avec nos amis et nos parents.
    C’est comme cela que la vie en société se fait, c’est pourtant simple, vous comprenez ?
    <p>Un projet à linitative d'Irene Gil López, Yoana Milian Lucas et Cédric Muller.</p>
    <p>
      Suivez les actualités d'Ecole Chantier ici : <a
        href="https://www.ecolechantier.ch"
        target="_blank">www.ecolechantier.ch</a
      >
    </p>

    <p>Photographies de Paola Corsini.</p>

    <Map
      mapCenter={[46.21803875669701, 6.030364858651818]}
      mapMarker={[46.21803875669701, 6.030364858651818]}
      mapZoom={17}
    />
  </Description>
  <Content>
    <Image src="/sat-img/01.jpg" alt="Metis studio" />
    <Image src="/sat-img/02.jpg" alt="Metis studio" />
    <Image src="/sat-img/05.jpg" alt="Metis studio" />

    <Image src="/sat-img/03.jpg" alt="Metis studio" />
    <Image src="/sat-img/04.jpg" alt="Metis studio" />
    <Image src="/sat-img/06.jpg" alt="Metis studio" />
  </Content>
</Layout>
