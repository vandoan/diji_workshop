const testArray = [12, 11, 13, 5, 6];

function sortByInsertion(array){
  for( let i = 1; i < array.length; i++){  // for each number after the first
    for(let j = 0; j < i; j++){ 	   //   compare it to the previous numbers
      if(array[i] < array[j]){		  //    if it's less, add it before		
	// Move i to j's spot
	array.splice(j,0,array[i]);
	array.splice(i+1,1);
      }
    }

console.log(array);
  }
}

sortByInsertion(testArray);



