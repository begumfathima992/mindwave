import React from 'react'

const Longest = () => {
    function longest(str){
        // Split the string into array
        str = str.split(" ")
        // Return the first sorted item of the Array
        return str.sort((a, b) => b.length - a.length)[0]
        }
         
         
        console.log(longest("The quick brown fox jumped over the lazy dog"))
  return (
    <div>
      <p>Longest</p>
    </div>
  )
}

export default Longest
