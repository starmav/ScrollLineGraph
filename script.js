var c = document.getElementById("myChartAxis");
var k=0;
var ctx1=c.getContext("2d");
ctx1.lineWidth = 10;
 // set font for fillText()  
 ctx1.font = "16px Arial";  
       
 // draw X and Y axis  
 ctx1.beginPath();  
 ctx1.moveTo(0,0);  
 ctx1.lineTo(0,670);  
    
 ctx1.stroke();  
 
 // draw reference value for hours  
    k+=20;
    ctx1.fillText(100,15,k);  k+=60;
    ctx1.fillText(90,15,k); k+=60;
    ctx1.fillText(80,15,k); k+=60;
    ctx1.fillText(70,15,k); k+=60;
    ctx1.fillText(60,15,k); k+=60;
    ctx1.fillText(50,15,k); k+=70;
    ctx1.fillText(40,15,k); k+=70;
    ctx1.fillText(30,15,k); k+=70;
    ctx1.fillText(20,15,k); k+=70;
    ctx1.fillText(10,15,k); k+=70;
    ctx1.fillText(0,15,k);
