<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
  import Map from '$components/Map.svelte';
</script>

<Layout>
  <Description titre="VAL - Au fil de la Valserine, une cartographie sensible" wip>
    Et si on découvrait autrement la vallée de la Valserine ? C’est la question à l’origine de cette
    cartographie qui prend le parti d’utiliser ses 5 sens pour essayer de sensibiliser le promeneur
    à son environnement, au-delà de ce qu’il peut voir. Les paysages de la Valserine sont divers et
    regorgent d’une multitude de richesses pour tous les sens. Ici, on peut deviner la puissance de
    la rivière sans la voir grâce à ses deux oreilles, là on peut sentir en été l’odeur des épicéas
    fraîchement coupés, etc. Cette carte se veut évolutive et collaborative, pourquoi pas imaginer
    une carte par saison, une carte pour les petits ou les grands, les possibilités sont presque
    infinies ! L'objectif de cette cartographie est de proposer des parcours aux promeneurs grâce à
    un dépliant ou une carte interactive (en cours de développement).
    <Tags>outil de médiation ; valserine ; cartographie ; paysages ; dépliant ; en cours</Tags>
    <Map
      mapCenter={[46.15120995438802, 5.804625817346062]}
      mapMarker={[46.15120995438802, 5.804625817346062]}
      mapZoom={11}
    />
  </Description>
  <Content>
    <Image src="/val-img/DSC03197-01.jpg" alt="Metis studio" />
    <Image src="/val-img/Carte-03.jpg" alt="Metis studio" />
    <Image src="/val-img/Carte-02.jpg" alt="Metis studio" />
  </Content>
</Layout>
