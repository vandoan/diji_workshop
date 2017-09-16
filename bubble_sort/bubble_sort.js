// BUBBLE SORT
var testArray = [3,9,5,3,2,11,42,5,9,22,4,8];
var bubbling = true;


function sortByBubble(array){
	var sorting = true;
	var tempHolder = "";

	do{
		sorting = false;					// For each new while loop, a clean start 
		for(let i = 0; i < array.length - 1; i++){// Loop through each digit but the last
			if(array[i] > array[i + 1]){	// If the 1st digi is greater than the 2nd
				tempHolder = array[i]; 		// Record the 1st digit
				array[i] = array[i + 1];	// Replace the 1st with the 2nd digit
				array[i + 1] = tempHolder;	// Replace the 2nd with the 1st
				sorting = true;				// Checks if a switch occured
			}
		}									// if no for-loop trigger a i > i + 1 case, sorting is false and we're done
		console.log(array);
	} while(sorting); 						//
}

sortByBubble(testArray);


function sortByBubbleOnce(array){
	if(bubbling == false){
		return console.log('Bubbling completed');
	}
	bubbling = false;

	for(let i = 0; i < array.length - 1; i++){
		if(array[i] > array[i + 1]){
			tempHolder = array[i];
			array[i] = array[i + 1];
			array[i + 1] = tempHolder;
			bubbling = true;			
		}
	}	
	console.log(array);	
}



// take array and insert into target div








