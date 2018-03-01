

Float32Array.prototype.mean = function (stride) {
  var stride = stride ? stride : 1

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
  var stride = stride ? stride : 1

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
  var stride = stride ? stride : 1

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
  var stride = stride ? stride : 1

  return this.reduce( (accumulator,value,index,array) => {
    if ( stride > array.length )
      return accumulator = Math.min(accumulator,value)
    if ( index%stride==0 )
      return accumulator = Math.min(accumulator,value)
    else
      return accumulator
  },Infinity)
}


Float32Array.prototype.convolve = function (g,stride) {
  var stride = stride ? stride : 1

  return this.map( (_,i,f) => {
    var convolution = 0

    g.forEach( (_,j,g) => { convolution += g[j]*f[(i+j)*stride] })
    return convolution

  }).filter( function(value){
    return !isNaN(value)
  })
}


Float32Array.prototype.convolve2d = function (g) {

  var fSize = Math.sqrt(this.length)
  var gSize = Math.sqrt(g.length)

  if ( fSize%1 != 0 || gSize%1 != 0)
    throw 'convolve2d: non-square arrays not supported'

  return this.map( (_,i,f) => {
    var convolution = 0

    g.forEach( (_,j,g) => {
      let k = Math.floor(j/gSize)

      if (i%fSize+gSize>fSize)
        convolution = NaN

      convolution += g[j]*f[i+j%gSize+k*fSize]

    })
    return convolution

  }).filter( function(value){
    return !isNaN(value)
  })
}

Array.range = (start, end, delta) => Array.from(
    {length: (end - start) / delta}, (v, k) => (k * delta) + start
  )
