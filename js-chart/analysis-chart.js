var data = {
    type: "sankey",
    orientation: "h",
    node: {
      pad: 15,
      thickness: 20,
      line: {
        color: "black",
        width: 0
      },
      label: ["Huawei", "Nokia", "Ericsson", "ZTE", "Other", "Regional", "National", "International", "Africa", "Asia", "Latin America", "Central and Eastern Europe"],
      color: ["rgb(255, 36, 0)", "rgb(0, 128, 0)", "rgb(0, 0, 139)", "rgb(255, 255, 0)", "rgb(255, 165, 0)", "black", "black", "black", "blue", "orange", "grey", "green"]
         },
   
     link: {
       source: [5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4],
       target: [0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,8,9,10,11,8,9,10,11,8,9,10,11,8,9,10,11,8,9,10,11],
       value:  [15,16,20,4,8,32,24,27,7,6,8,36,30,3,9,14,25,10,4,9,31,10,12,7,29,7,12,3,8,2,1,6,9,4,2]
     
    }
  }
  
  var data = [data]
  
  var layout = {
    title: "Basic Sankey",
    width: 1000,
    height: 900,
    font: {
      size: 16
    }
  }
  
Plotly.react('myDiv', data, layout)