/**************
  Question 1
**************/
function reverseString (string, reversedString) {
  if( string.length ) {
    return reverseString( string.slice(1), string.charAt(0) + (reversedString || '')  );  
  }
  return reversedString;
}

if(reverseString('123456') !== '654321') {
  throw 'not reversed';
}

/**************
  Question 2
**************/
function convertQueryString (queryString) {
  queryString = queryString.replace(/^\?/,'');
  var result = {},
    queryArray = queryString.split('&'),
    queryObject;
  for(var i = 0, len = queryArray.length; i < len; i++) {
    queryObject = queryArray[i].split('=');
    if(queryObject.length !== 2) {
      throw 'bad query string';
    }
    queryObject[1] = decodeURIComponent(queryObject[1]);
    if(!isNaN(queryObject[1])) {
      queryObject[1] = Number(queryObject[1]);
    }
    if(result[queryObject[0]] === undefined) {
      result[queryObject[0]] = queryObject[1];
    } else if(typeof(result[queryObject[0]]) === 'Array') {
      result[queryObject[0]].push(queryObject[1]);        
    } else {
      result[queryObject[0]] = [ 
       result[queryObject[0]],
       queryObject[1]
      ];
    }
  }
  return result; 
}

var queryString = "a=1&b=2&a=hello&apple=9&apple=digital";

console.log(convertQueryString(queryString));

/**************
  Question 3
**************/
// a)
  
this.resetMeter = function () { 
  resetMileage.call(this);
};

// b)

function resetMileage () { 
  this.mileage = 0;
}
function UsedCar() {}

UsedCar.prototype.mileage = 100;
UsedCar.prototype.setColor = function(color) { 
  this.color = color;
};
UsedCar.prototype.resetMeter = resetMileage;

// The JavaScript VM only needs to maintain one copy of the UsedCar prototype instead of having to maintain a copy of each property for each used car.