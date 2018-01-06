var startTime = (new Date()).getTime()
var db = connect('log')
var tempArray = []

for(var i = 0; i < 1000; i++){
	tempArray.push({num: i})
}
db.test.insert(tempArray)

var runTime = (new Date()).getTime() - startTime
print('[demo]This run is ' + runTime + 'ms') // => 19ms

/*批量插入效率更高*/