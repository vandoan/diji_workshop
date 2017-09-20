const dumiArray = [5,4,9,1,18,44,9,5];
var searching = true;
var currentIndex = 0;

// for each index
function getLowestNum(array){
	if(currentIndex == array.length - 1) {
		console.log('done.');
		return;
	}
	var lowestNum = array[currentIndex];
	var lowestNumIndex = currentIndex;
	// Loop through the remanding array
	for(let i = currentIndex + 1; i < array.length; i++){ 	
		if(array[i] < lowestNum){ 	// If current number is less than the current lowest
			lowestNum = array[i];	// Update lowestNum
			lowestNumIndex = i;		// Update highestNumIndex
		}
	}
	//console.log(lowestNumIndex);
	// K, got the highest number now
	lowestNum = array.splice(lowestNumIndex,1); 	// Remove that number from the array
	array.splice(currentIndex,0,lowestNum[0]);			// Insert it in for the current high index

	console.log(array);
	currentIndex++;										// Next loop
	return;
}

getLowestNum(dumiArray);
