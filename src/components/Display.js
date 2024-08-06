import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const {counterVal} = useSelector((store)=>store.counter)
  return (
    <>
      <h6>Counter Current Value: {counterVal}</h6>
    </>
  )
}

export default Display;
