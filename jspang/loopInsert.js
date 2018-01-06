var startTime = (new Date()).getTime()
var db = connect('log')

for(var i = 0; i < 1000; i++){
	db.test.insert({num: i})
}

var runTime = (new Date()).getTime() - startTime
print('[demo]This run is ' + runTime + 'ms') // => 495ms

/*循环插入效率较低*/