/*
proj4.defs("EPSG:25830", "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

var etrs89 = new ol.proj.Projection({
      code: 'EPSG:25830',
      //global:false,
      extent: [-729785.83,3715125.82,940929.67,9518470.69],
      units: 'm'
  });

//      ol.proj.addProjection(etrs89);

var Pedreguer=[763500,4298200];
var scaleLineControl = new ol.control.ScaleLine();

    //capa PNOA
var lyr_pnoa = new ol.layer.Tile({
    source: new ol.source.TileWMS(({
      url: "http://www.idee.es/wms/PNOA/PNOA?",
      params: {"LAYERS": "PNOA", "TILED": "true", "TYPE": 'base'},
    })),
    type: 'base',
    title: "Foto aérea (PNOA)"
  });

var OSM =  new ol.layer.Tile({
      source: new ol.source.OSM(),
      type: 'base',
      title: "OSM"
    });
    */

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
    
/*
      var escala = new ol.control.ScaleLine({
          minWidth:128;
      });*/

/*
      var lyr_ign = new ol.layer.Tile({
          source: new ol.source.TileWMS(({
            url: "http://www.ign.es/wms-inspire/ign-base?SERVICE=WMS",
            params: {"LAYERS": "IGNBaseTodo", "TILED": "true", "TYPE": 'base'},
          })),
          title: "Cartografía base (IGN)",
          visible: false,
        });


      var vista = new ol.View({
        projection: etrs89,
        center: Pedreguer,
        zoom: 6
      });*/

      var map = new ol.Map({
        layers: [OSM, lyr_pnoa],
        target: 'map',
        controls: ol.control.defaults({
          attributionOptions: {
            collapsible: false
          }
        }).extend([
           /* scaleLineControl*/
            ]),
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
        /*oninfo: function (l) { 
          alert(l.get("title")); 
        }*/
      });

      map.addControl(layerSwitcher);
      map.addControl(escala);