<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Description titre="MAS - A la découverte des clos-masure" wip>
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
  </Description>
  <Content>
    <Image src="/clos/Arbres-03.jpg" alt="Metis studio" />
  </Content>
</Layout>
