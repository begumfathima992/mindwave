import React from 'react'

 const Falsy = () => {
    const arr = [42, "everything", "", 2, false, "everything"];
const result = arr.filter(Boolean);   // = > [1, "test", 5, 3]
console.log(result);
  return (
    <div>falsy</div>
  )
}
export default Falsy
