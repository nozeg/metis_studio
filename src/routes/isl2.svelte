<script>
  import Content from '$components/projets/Content.svelte';
  import Description from '$components/projets/Description.svelte';
  import Tags from '$components/projets/Tags.svelte';
  import Layout from '$components/projets/Layout.svelte';
  import Image from '$components/projets/Image.svelte';
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
  </Description>
  <Content>
    <div class="page flex">
      <input type="radio" id="trigger1" name="slider" />
      <label for="trigger1" />
      <div class="slide bg1" />

      <input type="radio" id="trigger2" name="slider" checked autofocus />
      <label for="trigger2" />
      <div class="slide bg2" />

      <input type="radio" id="trigger3" name="slider" />
      <label for="trigger3" />
      <div class="slide bg3" />

      <input type="radio" id="trigger4" name="slider" />
      <label for="trigger4" />
      <div class="slide bg4" />

      <a target="_blank" href="https://twitter.com/kamildyrek"
        ><svg
          style="width:2em;height:2em;position:fixed;top:1em;left:1em;opacity:.8;"
          viewBox="0 0 24 24"
          ><path
            fill="#fff"
            d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"
          /></svg
        ></a
      >
    </div>
  </Content>
</Layout>

<style>
  .flex {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .flex {
      flex-direction: row;
    }
  }
  .page {
    flex-grow: 1;
    max-width: 600px;
  }
  body,
  html {
    padding: 0;
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    flex-grow: 1;
    text-align: center;
    overflow: hidden;
  }

  input {
    position: absolute;

    opacity: 0;

    cursor: pointer;
  }

  label {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: solid 1px #d7ead8;
    border-radius: 999px;
    background-color: transparent;
    margin: 95vh 6px 0 6px;
    z-index: 2;
    cursor: pointer;
    transition-duration: 0.4s;
  }

  input:checked + label {
    background-color: #d7ead8;
  }

  input:focus + label {
    box-shadow: 0 0 18px rgb(255, 255, 255);
  }

  .slide {
    position: absolute;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 0px;
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0;
    z-index: -1;
    transform: translateX(-100%);
    transition-duration: 0.4s;
    opacity: 1;
  }

  input:checked ~ .slide {
    transform: translateX(100%);
  }

  input:checked + label + .slide {
    transform: translateX(0);
    opacity: 1;
  }

  .bg1 {
    background-image: url('/isl/05.jpg');
  }
  .bg2 {
    background-image: url('/isl/06.jpg');
  }
  .bg3 {
    background-image: url('/isl/07.jpg');
  }
  .bg4 {
    background-image: url('/isl/08.jpg');
  }
</style>
