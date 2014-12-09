/**
	Base class for all drawable objects, makes ordering automatic.
	
*/

Enjine.Drawable = function() {
    this.ZOrder = 0;
};

Enjine.Drawable.prototype = {
    Draw: function(context) { }
};