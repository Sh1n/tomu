/**
 * Created by shin on 08/02/17.
 */
import angular from 'angular';
import Chart from 'chart.js';

function gaugeChart(){

    return {
        restrict    : 'E',
        replace     : true,
        scope       : {
            value : '=',
            backgroundColor : '=?',
            foregroundColor : '=?'
        },
        template : '<div><canvas width="400" height="400"></canvas></div>',
        link : function(scope, element, attr){
            scope.$watch('value', function(){
                var foregroundColor = scope.foregroundColor || "#FF6384";
                var backgroundColor = scope.backgroundColor || "#36A2EB";
                var value = scope.value;
                var data = {
                    labels : ['Opere viste', 'Opere mancanti'],
                    datasets: [
                        {
                            data: [value, 100 - value],
                            backgroundColor: [foregroundColor, backgroundColor]
                        }]
                };

                var baseController = Chart.controllers.doughnut;
                Chart.defaults.mytype = Chart.defaults.doughnut;

                Chart.controllers.mytype = Chart.controllers.doughnut.extend({
                    draw: function (ease) {
                        baseController.prototype.draw.apply(this, arguments);

                        var me = this;
                        var chart = me.chart.chart;
                        var ctx     = chart.ctx;
                        var width   = chart.width,
                            height  = chart.height;

                        var fontSize = (height / 70).toFixed(2);
                        ctx.font         = fontSize + "em Muli";
                        ctx.fontWeight   = 300;
                        ctx.fillStyle    = foregroundColor;
                        ctx.textBaseline = "middle";
                        var text = value + "%",
                            textX = Math.round((width - ctx.measureText(text).width) / 2),
                            textY = height / 2;
                        ctx.fillText(text, textX, textY);
                    }
                });



                var chartOptions = {
                    type: 'mytype',
                    data: data,
                    options: {
                        legend : {
                            display: false
                        },
                        cutoutPercentage: 90
                    },
                    "title": {
                        display: true,
                        "text": value + "%",
                        "position": "bottom"
                    }
                };
                var context = element[0].children;
                var gaugeChart = new Chart(context, chartOptions);
            });
        }
    }
}

export default angular.module('gaugeChart', [])
    .directive('gaugeChart', gaugeChart)
    .name;