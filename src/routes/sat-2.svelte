<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
  import Map from '$components/Map.svelte';
</script>

<Layout>
  <Description titre="Satimini, histoires courtes de Satigny - Ecole chantier" wip>
    <p>
      Peut-être l’avez-vous vu : fin septembre, les élèves de l’École-Mairie ont peint une fresque
      géante sur le chemin de leur école transitoire. Cette fresque fait écho à la belle vue et à
      l’ambiance de Satigny, propice à la contemplation.
    </p>

    <p>
      Vous pouvez toujours aller la découvrir entre le croisement de la route du Mandement et la
      Mairie de Satigny. Ce n’est pas tout ! Ils ont également enregistré des histoires touchantes
      et émouvantes, sous la forme de poèmes que vous pourrez directement écouter pendant votre
      balade grâce à des codes QR. Au total, ce sont sept classes d’élèves qui ont participé à cette
      magnifique exposition en plein air. Pour fêter cette occasion, nous avons organisé le samedi
      15 octobre à la salle Montfleury un apéritif «fresque mais en mini», où les convives pouvaient
      prendre un bout de trottoir (une focaccia onctueuse à la couleur noire) afin de réaliser et
      manger quelques fresques gourmandes.
    </p>

    <p>Un projet à linitative d'Irene Gil López, Yoana Milian Lucas et Cédric Muller.</p>
    <p>
      Suivez les actualités d'Ecole Chantier ici : <a
        href="https://www.ecolechantier.ch"
        target="_blank">www.ecolechantier.ch</a
      >
    </p>

    <Map
      mapCenter={[46.21803875669701, 6.030364858651818]}
      mapMarker={[46.21803875669701, 6.030364858651818]}
      mapZoom={17}
    />
  </Description>
  <Content>
    <Image src="/sat-2/01-2.jpg" alt="Metis studio" />
    <Image src="/sat-2/01-1.jpg" alt="Metis studio" />
    <Image src="/sat-2/01-3.jpg" alt="Metis studio" />
    <Image src="/sat-2/02-1.jpg" alt="Metis studio" />
    <Image src="/sat-2/02-2.jpg" alt="Metis studio" />
    <Image src="/sat-2/03-1.jpg" alt="Metis studio" />
    <Image src="/sat-2/02-4.jpg" alt="Metis studio" />
    <Image src="/sat-2/03-2.jpg" alt="Metis studio" />
    <Image src="/sat-2/03-3.jpg" alt="Metis studio" />
    <Image src="/sat-2/03-4.jpg" alt="Metis studio" />
    <Image src="/sat-2/03-5.jpg" alt="Metis studio" />
  </Content>
</Layout>
