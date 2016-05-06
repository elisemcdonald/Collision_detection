/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

var puck_x = 210;
var puck_y = 210;

document.getElementById('puck') .style.left = puck_x+'px';
document.getElementById('puck') .style.top = puck_y+'px';

document.getElementById('right').addEventListener('click', function() {
	document.getElementById('puck').style.left = '350px';
});