// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:32647",wgs84Center:{lat:12.8231478092,lon:102.088116809},proj:"+proj=utm +zone=47 +datum=WGS84 +units=m +no_defs",title:"ขอบเขต",baseExtent:[741010.333587,1353640.78046,929514.605265,1485529.43471],rotation:0,zShift:0.0,width:100.0,zExaggeration:6.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"dem_indochina_Thai"}));
