import React from 'react'

const times = () => {
    function repeatStringNumTimes(string, times) {
        if (times > 0)
          return string.repeat(times);
        else
          return "";
      }
   
      console.log(repeatStringNumTimes("abc", 3))
  return (
    <div>
      <p>repeat</p>
    </div>
  )
}

export default times
