<script lang="ts">
  import { browser } from '$app/env';
  // @ts-ignore
  import { LeafletMap, TileLayer, Marker } from 'svelte-leafletjs?client';
  import 'leaflet/dist/leaflet.css';

  export let mapCenter: [number, number];
  export let mapMarker: [number, number];
  export let mapZoom: number;

  const mapOptions = {
    center: mapCenter,
    zoom: mapZoom,
  };
  const tileUrl = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
  const tileLayerOptions = {
    minZoom: 0,
    maxZoom: 20,
    maxNativeZoom: 19,
    attribution: '© OpenStreetMap',
  };
</script>

<div class="map">
  {#if browser}
    <LeafletMap options={mapOptions}>
      <TileLayer url={tileUrl} options={tileLayerOptions} />
      <Marker latLng={mapMarker} />
    </LeafletMap>
  {/if}
</div>

<style>
  .map {
    aspect-ratio: 1.5;
  }
</style>
