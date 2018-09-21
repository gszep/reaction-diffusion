

Float32Array.prototype.mean = function (stride) {
	stride = stride ? stride : 1

	return this.reduce( (accumulator,value,index,array) => {
		if ( stride > array.length )
			return accumulator += value / array.length
		if ( index%stride==0 )
			return accumulator += value / Math.ceil(array.length/stride)
		else
			return accumulator
	},0)
}


Float32Array.prototype.var = function (stride) {
	stride = stride ? stride : 1

	return this.reduce( (accumulator,value,index,array) => {
		if ( stride > array.length )
			return accumulator += value*value / array.length
		if ( index%stride==0 )
			return accumulator += value*value / Math.ceil(array.length/stride)
		else
			return accumulator
	},0)
}


Float32Array.prototype.max = function (stride) {
	stride = stride ? stride : 1

	return this.reduce( (accumulator,value,index,array) => {
		if ( stride > array.length )
			return accumulator = Math.max(accumulator,value)
		if ( index%stride==0 )
			return accumulator = Math.max(accumulator,value)
		else
			return accumulator
	},-Infinity)
}


Float32Array.prototype.min = function (stride) {
	stride = stride ? stride : 1

	return this.reduce( (accumulator,value,index,array) => {
		if ( stride > array.length )
			return accumulator = Math.min(accumulator,value)
		if ( index%stride==0 )
			return accumulator = Math.min(accumulator,value)
		else
			return accumulator
	},Infinity)
}


Array.range = (start, end, delta) => Array.from(
	{length: (end - start) / delta}, (v, k) => (k * delta) + start
)
