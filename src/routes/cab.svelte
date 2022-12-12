<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
  import Map from '$components/Map.svelte';
</script>

<Layout>
  <Description titre="CAB – Festival des Cabanes d’Annecy 2022 - Altitude">
    <p>
      Pour cette édition du festival des cabanes, l’équipe a imaginé une cabane adossée à la
      montagne du Charbon et à sa lisière forestière sur la commune de Chevaline au sud du lac
      d’Annecy. La cabane se découvre doucement au rythme d’une ascension depuis Doussard sur une
      route forestière. Des vues sur un paysage domestiqué puis plus naturel s’enchaînent au fur et
      à mesure du parcours. Le parcours s’achève finalement au sein du dispositif spatial de la
      cabane. Avec son oculus, elle guide le regard vers le versant de la montagne en face. Après
      quelques marches, la cabane se fait promontoire et tour d’observation : on redécouvre le lac
      sous un autre angle, on embrasse le village et les prés.
    </p>
    <p>
      Ce projet a été développé en collaboration avec Ariane Marty et Hugues Hernandez de <a
        href="https://http://replica-architecture.com"
      >
        REPLICA</a
      >.
    </p>

    <Tags>festival des cabanes ; architecture ; projet</Tags>
    <Map
      mapCenter={[45.75759438288195, 6.218488760617977]}
      mapMarker={[45.75759438288195, 6.218488760617977]}
      mapZoom={11}
    />
  </Description>
  <Content>
    <Image src="/cab/12.jpg" alt="Metis studio" />
    <Image src="/cab/1.jpg" alt="Metis studio" />

    <Image src="/cab/13.jpg" alt="Metis studio" />

    <Image src="/cab/14.jpg" alt="Metis studio" />

    <Image src="/cab/15.jpg" alt="Metis studio" />

    <Image src="/cab/16.jpg" alt="Metis studio" />

    <Image src="/cab/17.jpg" alt="Metis studio" />
  </Content>
</Layout>
