// visuals: cats with different colors



// Mozilla: The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.


// const arr = [6,8,3,9,3,12,5];

// arr.forEach(function(x){console.log(x)});


// function split(){

// }

// function merge(){

// }


function mergerSort(array){
// divide the array into two halves
// left and right half
var midpoint = Math.floor(array.length/2);

var leftArray = array.slice(0,midpoint);
var rightArray = array.slice(midpoint); // if not second argument, then go to the end
var leftArrays = [];
var rightArrays = [];

leftArrays = splitArray(leftArray);

// a tricky part is making arrays inside arrays

var loop = 1;
while( loop < 3 ){

	for(let i= 0; i < leftArrays.length; i++){
		if(leftArrays[i].length > 2){
			leftArrays[i] = splitArray(leftArrays[i]);
		}
	}



loop++;
}




	// var finalPairs = false;
	// while(finalPairs == false){
	// 		var arrayUpdate = [];
	// 	for(let i = 0; i < leftArrays.length; i++){	// for each Parent element

	// 		for(let j = 0; j < leftArrays[i]; j++){
	// 			if(leftArrays[i][j].length > 2){			// if length is greater than 2
	// 				arrayUpdate.push(splitArray(leftArrays[i][j]));			// split
	// 				//console.log('P' +arrayUpdate);
	// 			} else {
	// 				arrayUpdate.push(leftArrays[i][j]);
	// 			}
	// 		}
	// 		if(leftArrays[i].length < 3){ 					// check if parent is 2 or less, if so stop loop
	// 			finalPairs = true;
	// 		}
	// 	}
//console.log(arrayUpdate);
		// console.log(arrayUpdate + 'break');

	//	leftArrays = arrayUpdate;											
	//}

console.log(leftArrays);




var nestLoop = 0;
function getNested(obj) {
nestLoop++;
    return Array.isArray(obj)? getNested(obj[0]): obj;
}

getNested(leftArrays)
console.log(nestLoop);










function splitArray(parentArr){ // the magic
	if(parentArr.length < 2 ){ return false; } 			// if this array elements > 2, split it
	var arrayUpdate = [];								// temporary array to hold new arrays
	let midpoint = Math.floor(parentArr.length/2);		// get new midpoint of parent array
	arrayUpdate.push(parentArr.slice(0,midpoint));		// push one half
	arrayUpdate.push(parentArr.slice(midpoint));			// push other half
	parentArr = arrayUpdate;

	split = true;
//console.log(parentArr);

	return parentArr;
}

// go through a half and divide it down into pairs: 8 digits would return 4 pairs; 9, 5 pairs


// sort each pair

// divide all the pairs (arrays) in half
	// if odd pairs, add the odd to the second half

// check if the half has to set of arrays
	// if not, repeat, divide into halves until you get just two arrays


// now all arrays are boiled down to halves, time to merge
// basically, it's versing what we did
// in one half, compare the pairs and merge them
// do so until you're left with one array




// your arrays could be many levels deep, but the important part is that you have a bunch of halves
// basically, you're making arrays inside arrays inside arrays, and this is the magic. It boils the sorting into a binary step
// comparing pairs, reducing steps. You're cutting out the time of checking one to every other number. You're cutting out steps,
// and when you save steps, it shows when you're doing something biggggg, like sorting a list of thousands of entries and doing
// it several times. Think about all the steps cut out, and then you see see the importance and power of Merge Sort.


// hard part, how to tell the when loop to stop, each time you go one layer deeper
	// everytime you loop and you split, you call the for another loop
	// if there's no split, then you're done



// 



}

mergerSort([3,7,1,8,2,9,4,0,5,6,9,1,9,8,3,2,1,9,8,4,6,2,9,3]);








var j = [[[[[[["hey!"]]]]]]];

function getNested(obj) {
    return Array.isArray(obj)? getNested(obj[0]): obj;
}

//var str = getNested(j);
//console.log(str); // "hey!"




