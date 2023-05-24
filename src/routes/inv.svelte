<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
</script>

<Layout>
  <Description titre="Les villes invisibles" wip>
    Cette série d’illustrations s’inspire du livre Les Villes invisibles (Le città invisibili),
    roman d'Italo Calvino.
    <p>
      Des lieux utopiques et poétiques sont ici représentés sans personne afin que le spectateur
      puisse imaginer sa propre histoire grâce à son filtre personnel. Se projeter à travers
      l’écran, se demander à quoi mène cette succession d’échelles, ce qui se passe derrière les
      murs de cette maison inquiétante aux volets blancs ou encore ce que sont ces djinns qui
      semblent s’échapper d’une tente de bédouins au milieu du désert, tel est l’objectif de ce
      projet. Voyager à travers le monde, comme a pu le faire Marco Polo lors de sa découverte des
      villes, oui, mais aussi voyager en soi-même !
    </p>
  </Description>
  <Content>
    <div>
      <Image src="/inv-img/Ville.gif" alt="Metis studio" />
      <Image src="/inv-img/Cabane.jpg" alt="Metis studio" />
      <Image src="/inv-img/Maison.jpg" alt="Metis studio" />
    </div>

    <div>
      <Image src="/inv-img/Arche.jpg" alt="Metis studio" />
      <Image src="/inv-img/Cara-1.jpg" alt="Metis studio" />
      <Image src="/inv-img/Cara-2.jpg" alt="Metis studio" />
      <Image src="/inv-img/inv-1-01-01.jpg" alt="Metis studio" />
    </div>
  </Content>
</Layout>
