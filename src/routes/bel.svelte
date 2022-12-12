<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
  import Map from '$components/Map.svelte';
</script>

<Layout>
  <Description titre="BEL - Il était une fois Bellegarde Art Déco" wip>
    Le centre-ville de Bellegarde-sur-Valserine regorge de trésors. Pourtant la plupart du temps, on
    passe devant sans les voir, sans leur prêter attention. Le projet propose de mettre en lumière
    les différents bâtiments Art Déco qui font, en partie, la singularité du centre-ville. Cet
    inventaire non exhaustif (et en cours !) recense les bâtiments connus comme l’Hôtel de ville, la
    Poste ou encore le cinéma mais pas que. Des bâtiments plus discrets, plus confidentiels, de
    l’ordre de l’usage quotidien sont ainsi révélés aux curieux. L’objectif du projet est de créer
    une cartographie de ces bâtiments en faisant figurer sur une carte un élément de décor
    identitaire et propre à chaque bâtiment. Une fois sur place il ne reste plus qu’à jouer à
    chercher et trouver cet élément !
    <Tags>
      outil de médiation ; centre-ville ; cartographie ; architecture ; dépliant ; affiches ; en
      cours
    </Tags>
    <div>
      <Map
        mapCenter={[46.107456478271715, 5.825928852265028]}
        mapMarker={[46.107456478271715, 5.825928852265028]}
        mapZoom={11}
      />
    </div>
  </Description>
  <Content>
    <Image src="/bel-images/DSC03922-web.jpg" alt="Metis studio" />
    <Image src="/bel-images/DSC03927-double.jpg" alt="Metis studio" />
    <Image src="/bel-images/DSC03928-web.jpg" alt="Metis studio" />
    <Image src="/bel-images/DSC03928-web2.jpg" alt="Metis studio" />
    <Image src="/bel-images/DSC03931-web.jpg" alt="Metis studio" />
    <Image src="/bel-images/Hotel-de-ville-bleu.gif" alt="Metis studio" />
  </Content>
</Layout>
