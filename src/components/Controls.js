import React from "react";
import { useRef } from "react";
import { counterActions, privacyActions } from "../store/MainStore";
import { useDispatch } from "react-redux";

const Controls = () => {

  const Element = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(counterActions.increment());
  }
  const handleDecrement = () =>{
    dispatch(counterActions.decrement())
  }
  const handleAdd = ()=>{
    dispatch(counterActions.add(Element.current.value));
    Element.current.value="";
  }
  const handleSubtract=()=>{
    dispatch(counterActions.subtract(Element.current.value));
    Element.current.value="";
  }
  const handlePrivacy=()=>{
    dispatch(privacyActions.toggle());
  }

  return (
    <>
      <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" className="btn btn-success" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" className="btn btn-secondary mx-2" onClick={handlePrivacy}>Privacy</button>
      <br/>
      <input type="text" placeholder="Enter the number " ref={Element}/>
      <button type="button" className="btn btn-danger mx-2" onClick={handleAdd}>
        Add
      </button>
      <button type="button" className="btn btn-warning" onClick={handleSubtract}>
        Subtract
      </button>
    </>
  );
};

export default Controls;
