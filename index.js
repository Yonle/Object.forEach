Object.prototype.forEach = function forEach ( c ) {
	var obj = this;
	
	if ( typeof c !== 'function' ) {
		let err = new TypeError('Callback is not a function');
		return err;
	}
	
	for ( var i in obj ) {
		c( obj[i] , i );
	}
}
