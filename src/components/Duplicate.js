import React from 'react'

const Duplicate = () => {
    var arr = [1, 20, 3, 1, 3, 3];

function removeDuplicates(arr) {
return arr.filter((item,
    index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
  return (
    <div>
      <p>Array</p>
    </div>
  )
}

export default Duplicate
