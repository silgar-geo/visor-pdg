proj4.defs("EPSG:25830", "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

var etrs89 = new ol.proj.Projection({
  code: 'EPSG:25830',
  //global:false,
  extent: [-729785.83,3715125.82,940929.67,9518470.69],
  units: 'm'
});

var Pedreguer=[763500,4298200];
var scaleLineControl = new ol.control.ScaleLine();

//capa PNOA
var lyr_pnoa = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: "http://www.idee.es/wms/PNOA/PNOA?",
    params: {"LAYERS": "PNOA", "TILED": "true", "TYPE": 'base'},
  }),
  type: 'base',
  title: "Foto aérea (PNOA)"
});

var OSM =  new ol.layer.Tile({
  source: new ol.source.OSM(),
  type: 'base',
  title: "OSM"
});
    
var map = new ol.Map({
  layers: [OSM, lyr_pnoa],
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: new ol.View({
    projection: etrs89,
    center: Pedreguer,
    zoom: 12
  })
});

/* PROVISIONAL, EN CAS DE QUE NO FUNCIONE BÉ EN MOBILS, DEIXAR NOMÉS EL QUE ESTÀ DINS DE EXTEND */
var escala = new ol.control.ScaleLine({
  maxWidth:50
});
/*
      var layerSwitcher=new ol.control.LayerSwitcher({
        tipLabel:'Llistat de capes'
      });
      //adds the layer swicher to the map
*/

var layerSwitcher = new ol.control.LayerSwitcher({
  tipLabel: 'Leyenda',
  show_progress : true,
  extent : true,
  trash  : true,  //borrar capa
});

map.addControl(layerSwitcher);
map.addControl(escala);