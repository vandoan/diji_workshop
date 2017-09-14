//
var secretNumber = 8373;

function bullCow(guess){
	if(guess == secretNumber) { return "won"; }
	var bull = 0;
	var cow = 0;
	var secret = ("" + secretNumber).split("");
	var guess = ("" + guess).split("");

	for(let i = 0; i < secret.length; i++){
		if(secret[i] == guess[i]){
			bull++;
		}
	}

	for(let i = 0; i < guess.length; i++){
	// take a letter from guess, for loop
		// see if there's a match, indexOf
		if(secret.indexOf(guess[i]) >= 0){ 
				console.log(secret);

			cow++; // if match, cow+ and delete letter from arr, split()
			secret.splice(secret.indexOf(guess[i]),1);
		}
	}

	return `${bull} bull and ${cow} cow.`

	// compare for exact matches


	// compare for number match

}


// console.log(bullCow(3333));




// remove duplicates

// var set = [3,4,2,3,3,1,5,6];

// function getUniqueSet(set){
// 	var unique = [];
	
// 	for(let i = 0; i < set.length; i++){ 	// for loop, got through each
// 		if(unique.indexOf(set[i]) == -1){ 	// if not in unique add
// 			unique.push(set[i])
// 		}
// 	}

// 	console.log(unique);
// 	return unique;
// }


// getUniqueSet(set);




var set = [3,4,2,3,3,1,5,6];

function getUniqueSet(set){
	
	for(let i = 0; i < set.length; i++){ 	// for loop, got through each

		for(let j = 0; j < set.length; j++){ 		// compare to all other letter
			if(j == i){ continue; }	// if same letter
			if(set[i] == set[j]){
				set.splice(j,1);
			}
		}


	}

	console.log(set);
	return set;
}


getUniqueSet(set);


