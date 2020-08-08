import React from 'react'
import chart from '../Resources/Age-Chart.png'
import './Chart.css'

class Chart extends React.Component {
  
  render() {
    // var counts = [];

    //         var newCounts = counts;
    //         var ctx = $('#areas-of-interest-chart');
    //         var areasOfInterestChart = new Chart(ctx, {
    //             type: 'bar',
    //             // responsive: true,
    //             // maintainAspectRatio: true,
    //             data: {
    //                 labels: Object.keys(commentCounts),
    //                 datasets: [{
    //                     label: '# of Comments by Area Of Interest',
    //                     data: counts,
    //                     backgroundColor: colorPallete.slice(0, commentCounts.length),
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 onClick: function(evt, arr) {
    //                     // var clicked = arr[0];
    //                     // if (clicked) {
    //                     //     var areaOfInterestClicked = clicked._model.label;
    //                     //     var total = commentCounts[areaOfInterestClicked];
    //                     //     loadDashboardActions.handleAreaOfInterestEventListener(total, areaOfInterestClicked, pids);
    //                     // }
    //                 },
    //                 onHover: function(e, a) {
    //                     //$('#areas-of-interest-chart').css('cursor', a[0] ? 'pointer' : 'default');
    //                 },
    //                 scales: {
    //                     xAxes: [{
    //                         ticks: {
    //                             callback: function(value) {
    //                                 if (value.length > 21) {
    //                                     return value.substr(0, 22); //truncate
    //                                 } else {
    //                                     return value;
    //                                 }
    //                             }
    //                         }
    //                     }],
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero: true,
    //                             suggestedMax: 10
    //                         }
    //                     }]
    //                 }
    //             }
    //         });
    //     }
    return (
      <div className='chart-container'>
        <h2>Turnout By Age</h2>
        <img className='chart' src={chart} alt='turnout-by-age' />
      </div>
    )
  }
  
}

export default Chart