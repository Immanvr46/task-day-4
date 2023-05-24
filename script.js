// 1.part
// / 1.Print odd numbers in an array:

(function(arr) {
  arr.forEach(function(num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// 2.Convert all the strings to title caps in a string array:
(function(arr) {
  var titleCapsArray = arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  console.log(titleCapsArray);
})(["hello", "world", "example"]);


// 3.Sum of all numbers in an array:
(function(arr) {
    var sum = arr.reduce(function(total, num) {
      return total + num;
    }, 0);
    console.log(sum);
  })([1, 2, 3, 4, 5]);


//   4.Return all the prime numbers in an array:
(function(arr) {
    function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    var primeNumbers = arr.filter(function(num) {
      return isPrime(num);
    });
  
    console.log(primeNumbers);
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  
//   5.Return all the palindromes in an array:
  (function(arr) {
    function isPalindrome(str) {
      var reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    }
  
    var palindromes = arr.filter(function(str) {
      return isPalindrome(str);
    });
  
    console.log(palindromes);
  })(["radar", "civic,","world","hello", "mam", "madam"]);
  

//   6.Return the median of two sorted arrays of the same size:
  (function(arr1, arr2) {
    function findMedian(arr) {
      var len = arr.length;
      var mid = Math.floor(len / 2);
      if (len % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
      } else {
        return arr[mid];
      }
    }
  
    var combinedArray = arr1.concat(arr2);
    var sortedArray = combinedArray.sort(function(a, b) {
      return a - b;
    });
    var median = findMedian(sortedArray);
  
    console.log(median);
  })([1, 2, 3], [4, 5, 6]);

//   7.Remove duplicates from an array:
  (function(arr) {
    var uniqueArray = arr.filter(function(item, index, self) {
      return self.indexOf(item) === index;
    });
  
    console.log(uniqueArray);
  })([1, 2, 2, 3, 4, 4, 5]);


//   8.Rotate an array by k times:
  (function(arr, k) {
    k = k % arr.length;
    var rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  
    console.log(rotatedArray);
  })([1, 2, 3, 4, 5])
  


//   2-part

// 1.Print odd numbers in an array:
const printOddNumbers = (arr) => {
    arr.forEach((num) => {
      if (num % 2 !== 0) {
        console.log(num);
      }
    });
  };
  
  printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);


  
//   2.Convert all the strings to title caps in a string array:
  const convertToTitleCaps = (arr) => {
    const titleCapsArray = arr.map((str) =>
      str.charAt(0).toUpperCase() + str.slice(1)
    );
    console.log(titleCapsArray);
  };
  
  convertToTitleCaps(["hello", "world", "example"]);



//   3.Sum of all numbers in an array:
  const sumArray = (arr) => {
    const sum = arr.reduce((total, num) => total + num, 0);
    console.log(sum);
  };
  sumArray([1, 2, 3, 4, 5]);



//   4.Return all the prime numbers in an array:

  const getPrimeNumbers = (arr) => {
    const isPrime = (num) => {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
  
    const primeNumbers = arr.filter((num) => isPrime(num));
    console.log(primeNumbers);
  };
  
  getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);


//   5.Return all the palindromes in an array:

  const getPalindromes = (arr) => {
    const isPalindrome = (str) => {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    };
  
    const palindromes = arr.filter((str) => isPalindrome(str));
    console.log(palindromes);
  };
  
  getPalindromes(["hello", "level", "radar","world", "madam"]);
  
  
  
  
  
  


