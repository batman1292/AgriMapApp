// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:32647",wgs84Center:{lat:12.8074742914,lon:102.118965573},proj:"+proj=utm +zone=47 +datum=WGS84 +units=m +no_defs",title:"การใช้ที่ดิน",baseExtent:[752740.444954,1357792.60911,924530.641798,1477987.11544],rotation:0,zShift:0.0,width:100.0,zExaggeration:6.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"dem_indochina_Thai"}));
