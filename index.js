//l refers to x-axis labels, y1 refers to first dataset values, y2 refers to second dataset values.
var l= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
var y1=[65, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81,5, 59, 80, 10, 56, 55, 40,43,56,81];
var y2=[12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44,12,34,63,78,23,56,78,94,76,44];		
		
var ctx = document.getElementById("myChart");
	
var chart = {
        options: {
          responsive: true,
		  scales: {
		 
        yAxes: [{
            display: false,
            ticks: {

                beginAtZero: true ,  // minimum value will be 0.
				steps: 10,
                stepValue: 5,
                max: 100
            }
        }]
    },
          maintainAspectRatio: false,
          
      },
        type: 'line',
        data: {
            labels: [0,1,2,3,4,5,6,7,8,9,10],
            datasets: [
                {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [],
        },
		{
            label: "My second dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(225,192,192,0.4)",
            borderColor: "rgba(225,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(225,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(225,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [],
        }
            ]
        }};

var myLiveChart = new Chart(ctx, chart);

var k=0;
function advance(){
	if(k<100){
//updating the graph with data points from t=0 to t=100
	  myLiveChart.data.datasets[0].data.push(y1[k]);
  myLiveChart.data.datasets[1].data.push(y2[k]);
  if(k>10){
	myLiveChart.data.labels.push(l[k]);
  }

	k++;
  myLiveChart.update();
  
//graph starts scrolling once t reaches 10
if(k>10){
	var newwidth = $('.chartAreaWrapper2').width() +60;
  $('.chartAreaWrapper2').width(newwidth);
   $('.chartAreaWrapper').animate({scrollLeft:newwidth});
  
		
}
//should plot the grapgh until t reaches 100.
   
  setTimeout(function() {
    requestAnimationFrame(advance);
  }, 250);
  }
	
}
function refreshPage(){
    window.location.reload();
} 
//when the button is clicked 
const button = document.getElementById('Run');
button.onclick = function () {
	
	advance();
	
    return false;
  
};  
const button1 = document.getElementById('Reset');
button1.onclick = function () {
	refreshPage();
    return false;
  
};


