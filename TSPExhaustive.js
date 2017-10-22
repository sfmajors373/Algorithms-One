const cities = [
  {name: 'Denver', x:500, y:500},
  {name: 'Salt Lake City', x:300, y:500},
  {name: 'Cheyenne', x:500, y:600},
  {name: 'Santa Fe', x:500, y:350}
];
let best_trip_length = Number.MAX_VALUE;
let best_trip = [];
// *******************************************
// Heap's Algorithm
const nextElement = (n, set) => {
  if(n === 1) {
    console.log(set);
    // put in the stuff for distance
    let k = 0;
    let current_trip_length = 0;
    for (let j = 0; j < set.length; j++) {
      if ((j + 1) > set.length) {
        k = 0;
      } else {
        k = j + 1;
      }
      let nextDist = distance(cities[j], cities[k]);
      console.log('J: ' + j);
      console.log('City j: ' + cities[j]);
      console.log('City k' + cities[k]);
      current_trip_length = current_trip_length + nextDist;
      if (current_trip_length < best_trip_length) {
        best_trip_length = current_trip_length;
        best_trip = set;
      }
    }
  }
  else {
    for(let i = 0; i < n-1 ; i++) {
      nextElement(n - 1, set);
      if(n%2===0) {
        let x = set[i];
        set[i] = set[n-1];
        set[n-1] = x;
      }
      else {
        let x = set[0];
        set[0] = set[n-1];
        set[n-1] = x;
      }
    }
    nextElement(n - 1, set);
  }
}

// call heap's algorithm using countSet, it invokes nextElement
const countSet = (set) => {
  let n = set.length;

  let array = [];
  set.forEach((each) => {
    array.push(each);
  });
  nextElement(array.length, array);
}
// *******************************************

// distance function
function distance(city1, city2) {

  const dist = Math.sqrt((Math.pow((city2.x - city1.x),2)) + (Math.pow((city2.y - city1.y),2)));
  return dist;
}



// ********************tests*******************************
// console.log(distance(cities[0], cities[1]));
// console.log(distance(cities[1], cities[2]));
// console.log(distance(cities[2], cities[3]));
// console.log(distance(cities[3], cities[0]));
// console.log(countSet([0, 1, 2, 3]));
countSet([0, 1, 2, 3]);
// console.log(cities[0]);
