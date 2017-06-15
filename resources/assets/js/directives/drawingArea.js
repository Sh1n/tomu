/**
 * Created by shin on 27/01/17.
 */
import angular from 'angular';

function drawingArea(){

    return {
        restrict    : 'A',
        controller : ['$scope', function($scope){
            $scope.data = {
                canvas          : null,
                paint           : false,
                context         : null,
                clickX          : [],
                clickY          : [],
                canvasWidth     : 400,
                canvasHeight    : 600,
                clickTool       : [],
                clickColor      : [],
                clickSize       : [],
                clickDrag       : [],
                color           : "#FF0000",
                radius          : 4
            };

            $scope.addClick = function (x, y, dragging) {
                $scope.data.clickX.push(x);
                $scope.data.clickY.push(y);
                $scope.data.clickDrag.push(dragging);
            };

            $scope.release = function () {
                $scope.data.paint = false;
                $scope.redraw();
            };

            $scope.cancel = function () {
                $scope.data.paint = false;
            };

            $scope.drag = function (e) {
                var offsetX = e.target.offsetLeft;
                var offsetY = e.target.offsetTop;
                var mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - offsetX,
                    mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - offsetY;

                if ($scope.data.paint) {
                    $scope.addClick(mouseX, mouseY, true);
                    $scope.redraw();
                }
                // Prevent the whole page from dragging if on mobile
                e.preventDefault();
            };

            $scope.press = function (e) {
                var offsetX = e.target.offsetLeft;
                var offsetY = e.target.offsetTop;
                // Mouse down location
                var sizeHotspotStartX,
                    mouseX = (e.changedTouches ? e.changedTouches[0].pageX : e.pageX) - offsetX,
                    mouseY = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - offsetY;

                $scope.data.paint = true;
                $scope.addClick(mouseX, mouseY, false);
                $scope.redraw();
            };

            $scope.createUserEvents = function(){
                $scope.data.canvas.addEventListener("mousedown", $scope.press, false);
                $scope.data.canvas.addEventListener("mousemove", $scope.drag, false);
                $scope.data.canvas.addEventListener("mouseup",   $scope.release);
                $scope.data.canvas.addEventListener("mouseout",  $scope.cancel, false);

                // Add touch event listeners to canvas element
                $scope.data.canvas.addEventListener("touchstart",   $scope.press, false);
                $scope.data.canvas.addEventListener("touchmove",    $scope.drag, false);
                $scope.data.canvas.addEventListener("touchend",     $scope.release, false);
                $scope.data.canvas.addEventListener("touchcancel",  $scope.cancel, false);
            };

            $scope.clearCanvas = function () {
                $scope.data.context.clearRect(0, 0, $scope.data.canvasWidth, $scope.data.canvasHeight);
            };

            $scope.redraw =  function(){
                var locX, locY, radius = $scope.data.radius, i, selected;
                $scope.clearCanvas();

                for (i = 0; i < $scope.data.clickX.length; i += 1) {

                    // Set the drawing path
                    $scope.data.context.beginPath();
                    // If dragging then draw a line between the two points
                    if ($scope.data.clickDrag[i] && i) {
                        $scope.data.context.moveTo($scope.data.clickX[i - 1], $scope.data.clickY[i - 1]);
                    } else {
                        // The x position is moved over one pixel so a circle even if not dragging
                        $scope.data.context.moveTo($scope.data.clickX[i] - 1, $scope.data.clickY[i]);
                    }
                    $scope.data.context.lineTo($scope.data.clickX[i], $scope.data.clickY[i]);

                    // Set the drawing color
                    $scope.data.context.strokeStyle = $scope.data.color;

                    $scope.data.context.lineCap = "round";
                    $scope.data.context.lineJoin = "round";
                    $scope.data.context.lineWidth = radius;
                    $scope.data.context.stroke();
                }
                $scope.data.context.closePath();
                //context.globalCompositeOperation = "source-over";// To erase instead of draw over with white
                $scope.data.context.restore();
                $scope.data.context.globalAlpha = 1; // No IE support
            };

        }],
        link : function(scope, element, attr){
            scope.data.color  = attr.color || "#FF0000";
            scope.data.canvas = document.createElement('canvas');
            scope.data.canvas.setAttribute('width', scope.data.canvasWidth);
            scope.data.canvas.setAttribute('height', scope.data.canvasHeight);
            scope.data.canvas.setAttribute('id', 'canvas');
            element[0].appendChild(scope.data.canvas);
            if (typeof G_vmlCanvasManager !== "undefined") {
                scope.data.canvas = G_vmlCanvasManager.initElement(scope.data.canvas);
            }
            scope.data.context = scope.data.canvas.getContext("2d");
            scope.redraw();
            scope.createUserEvents();
        }
    }
}

export default angular.module('drawingArea', [])
    .directive('drawingArea', drawingArea)
    .name;