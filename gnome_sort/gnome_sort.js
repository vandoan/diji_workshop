const dumiArray = [5,4,9,1,18,44,9,5];

function sortByGnome(array){
	var i = 1;
	var swapInt;
	var loop = 0;
	var highestIndex = 1;

	while(i < array.length){		// While you haven't reached the last index
		loop++;

		if(i == 0) { i = highestIndex; } 
		// If i is 0, jump back up to the last highest place
		if(array[i - 1] > array[i]){ 	// If b is less than a, swap them
			swapInt = array[i]; 			// Hold on to b
			array.splice(i,1);				// Delete a
			array.splice(i-1,0,swapInt);	// Add b one position back
			i--;							// move the loop back one to check the previous
		} else {						// If a is less b
			i++;							// Move to the next loop
			highestIndex++;					// Record your highest loop
		}   
	}	//console.log(array);

	console.log(`final loop: ${loop} and ${array}`);
	return array;
}

sortByGnome(dumiArray);