<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import mapboxgl from 'mapbox-gl';

// 设置 Mapbox 访问令牌
mapboxgl.accessToken = 'pk.eyJ1IjoiY3lkbmpieWEiLCJhIjoiY21jOGsyeWxjMHhxbjJtcGtibWZkajN1OCJ9.XExH8yQEkVPQ6VI1y8bIuQ'; // 请替换为您的访问令牌

const mapContainer = ref(null);
let map = null;
let userInteracting = false;
let spinEnabled = true;

const secondsPerRevolution = 120;
const maxSpinZoom = 5;
const slowSpinZoom = 3;

function spinGlobe() {
  const zoom = map.getZoom();
  if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
    let distancePerSecond = 360 / secondsPerRevolution;
    if (zoom > slowSpinZoom) {
      const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
      distancePerSecond *= zoomDif;
    }
    const center = map.getCenter();
    center.lng -= distancePerSecond;
    map.easeTo({ center, duration: 1000, easing: (n) => n });
  }
}

onMounted(() => {
  if (mapContainer.value) {
    map = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      projection: 'globe',
      center: [116.4, 39.9],
      zoom: 1.5,
    });

    map.on('style.load', () => {
      map.setFog({});
    });

    map.on('mousedown', () => {
      userInteracting = true;
    });

    map.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.on('dragend', () => {
      userInteracting = false;
      spinGlobe();
    });
    map.on('pitchend', () => {
      userInteracting = false;
      spinGlobe();
    });
    map.on('rotateend', () => {
      userInteracting = false;
      spinGlobe();
    });

    map.on('moveend', () => {
      spinGlobe();
    });

    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
        .setHTML('<h3>北京</h3><p>中国首都</p>');

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat([116.4, 39.9])
      .setPopup(popup)
      .addTo(map)
      .getElement().addEventListener('mouseenter', () => {
        if (map) {
          popup.setLngLat([116.4, 39.9]).addTo(map);
        }
      });

    map.on('mouseleave', 'points', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });


    spinGlobe();
  }
});

onUnmounted(() => {
  if (map) {
    map.remove();
  }
});
</script>

<style>
.mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
  display: none;
}
</style>
<style scoped>
.map-container {
  width: 100%;
  height: 600px;
  border-radius: 8px;
}
</style>