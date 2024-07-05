var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteMunicipaldeCuritiba_1 = new ol.format.GeoJSON();
var features_LimiteMunicipaldeCuritiba_1 = format_LimiteMunicipaldeCuritiba_1.readFeatures(json_LimiteMunicipaldeCuritiba_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipaldeCuritiba_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipaldeCuritiba_1.addFeatures(features_LimiteMunicipaldeCuritiba_1);
var lyr_LimiteMunicipaldeCuritiba_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipaldeCuritiba_1, 
                style: style_LimiteMunicipaldeCuritiba_1,
                popuplayertitle: "Limite Municipal de Curitiba",
                interactive: true,
                title: '<img src="styles/legend/LimiteMunicipaldeCuritiba_1.png" /> Limite Municipal de Curitiba'
            });
var format_Ocupaesirregulares_2 = new ol.format.GeoJSON();
var features_Ocupaesirregulares_2 = format_Ocupaesirregulares_2.readFeatures(json_Ocupaesirregulares_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ocupaesirregulares_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ocupaesirregulares_2.addFeatures(features_Ocupaesirregulares_2);
var lyr_Ocupaesirregulares_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ocupaesirregulares_2, 
                style: style_Ocupaesirregulares_2,
                popuplayertitle: "Ocupações irregulares",
                interactive: true,
                title: '<img src="styles/legend/Ocupaesirregulares_2.png" /> Ocupações irregulares'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LimiteMunicipaldeCuritiba_1.setVisible(true);lyr_Ocupaesirregulares_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LimiteMunicipaldeCuritiba_1,lyr_Ocupaesirregulares_2];
lyr_LimiteMunicipaldeCuritiba_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TIPO': 'TIPO', 'NOME': 'NOME', 'FONTE': 'FONTE', 'CD_REGIONA': 'CD_REGIONA', 'NM_REGIONA': 'NM_REGIONA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Ocupaesirregulares_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'COD_IPPUC': 'COD_IPPUC', 'COD_SISPEH': 'COD_SISPEH', 'NOME': 'NOME', 'NOME_COMPL': 'NOME_COMPL', 'CATEGORIA': 'CATEGORIA', 'BAIRRO': 'BAIRRO', 'REGIONAL': 'REGIONAL', 'QUADRICULA': 'QUADRICULA', 'OBS': 'OBS', 'FONTE': 'FONTE', 'CATEG_2000': 'CATEG_2000', 'CATEG_2005': 'CATEG_2005', 'CATEG_2010': 'CATEG_2010', 'CATEG_2012': 'CATEG_2012', 'CATEG_2014': 'CATEG_2014', 'INFO_EDIT_': 'INFO_EDIT_', 'CATEG_2016': 'CATEG_2016', 'INFO_EDIT1': 'INFO_EDIT1', 'NOME_ANTER': 'NOME_ANTER', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_LimiteMunicipaldeCuritiba_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'FONTE': 'TextEdit', 'CD_REGIONA': 'TextEdit', 'NM_REGIONA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Ocupaesirregulares_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'COD_IPPUC': 'TextEdit', 'COD_SISPEH': 'TextEdit', 'NOME': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'CATEGORIA': 'TextEdit', 'BAIRRO': 'TextEdit', 'REGIONAL': 'TextEdit', 'QUADRICULA': 'TextEdit', 'OBS': 'TextEdit', 'FONTE': 'TextEdit', 'CATEG_2000': 'TextEdit', 'CATEG_2005': 'TextEdit', 'CATEG_2010': 'TextEdit', 'CATEG_2012': 'TextEdit', 'CATEG_2014': 'TextEdit', 'INFO_EDIT_': 'TextEdit', 'CATEG_2016': 'TextEdit', 'INFO_EDIT1': 'TextEdit', 'NOME_ANTER': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_LimiteMunicipaldeCuritiba_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'TIPO': 'no label', 'NOME': 'no label', 'FONTE': 'no label', 'CD_REGIONA': 'no label', 'NM_REGIONA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Ocupaesirregulares_2.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'COD_IPPUC': 'no label', 'COD_SISPEH': 'no label', 'NOME': 'no label', 'NOME_COMPL': 'no label', 'CATEGORIA': 'no label', 'BAIRRO': 'no label', 'REGIONAL': 'no label', 'QUADRICULA': 'no label', 'OBS': 'no label', 'FONTE': 'no label', 'CATEG_2000': 'no label', 'CATEG_2005': 'no label', 'CATEG_2010': 'no label', 'CATEG_2012': 'no label', 'CATEG_2014': 'no label', 'INFO_EDIT_': 'no label', 'CATEG_2016': 'no label', 'INFO_EDIT1': 'no label', 'NOME_ANTER': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Ocupaesirregulares_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});