import { Component, OnInit } from '@angular/core';
// Openlayers
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import XYZ from 'ol/source/XYZ';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    './map.component.scss'
  ]
})
export class MapComponent implements OnInit {
  public map;
  constructor() { }

  public ngOnInit(): void {
    const iconFeature = new Feature({
      geometry: new Point(olProj.fromLonLat([-1.665990, 48.106660])),
    });
    const iconStyle = new Style({
      image: new Icon({
        anchor: [128, 256],
        anchorXUnits: 'pixels',
        anchorYUnits: 'pixels',
        src: 'assets/map/marker.png',
        size: [256, 256],
        scale: 0.2
      }),
    });
    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    const rasterLayer = new TileLayer({
      source: new TileJSON({
        url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
        crossOrigin: '',
      }),
    });
    this.map = new Map({
      target: 'map',
      layers: [
        rasterLayer,
        new TileLayer({
          source: new XYZ({
            attributions:
              'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
              'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
            url:
              'https://server.arcgisonline.com/ArcGIS/rest/services/' +
              'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
          }),
        }),
        vectorLayer

      ],
      view: new View({
        center: olProj.fromLonLat([-1.665990, 48.106660]),
        zoom: 4
      })
    });


    const layer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point(olProj.fromLonLat([-1.665990, 48.106660]))
          })
        ]
      })
    });
    this.map.addLayer(layer);
  }

}
