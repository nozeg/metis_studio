<script>
  import Urbanismeindex from '$components/Urbanismeindex.svelte';
  import Fenetrebourdons from '$components/Fenetrebourdons.svelte';
</script>

<div class="flex">
  <div>
    <a href="/indexurbanisme/"> <Urbanismeindex /></a>
    <h2 class="titre">Urbanisme et médiation</h2>
  </div>
  <div>
    <a href="/indexillustration/"> <Fenetrebourdons /></a>
    <h2 class="titre">Illustration</h2>
  </div>
</div>

<style>
  .flex {
    width: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .flex {
      justify-content: space-evenly;
      flex-direction: row;
    }
  }

  .titre {
    font-family: bakso;
    font-weight: 700;
    font-size: 18px;
    color: #007d5e;
    padding-top: 10px;
    padding-bottom: 30px;
  }
</style>
