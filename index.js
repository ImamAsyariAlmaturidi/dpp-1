function slice(data, start, end) {

  if (!data) {
    return "Invalid data"
  } else if (!start && !end) {
    return data
  } else if (end === undefined) {
    end = data.length
  }

  let arr = []
  let i = 0;
  while( i < data.length) {
    if (i >= start && i < end) {
      arr.push(data[i])
    }
    i++
  }
  return arr
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 20)); //[]
console.log(slice()); //Invalid data

module.exports = slice;
