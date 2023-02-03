import React, {useState,useEffect} from 'react';


const Person = (props)=>{
  return (
    <>
      <h2>First: {props.firstName}</h2>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.Age}</h2>
    </>
  )
}

const BasicHooks = () => {
  const name = "John";
  const isNameShowing = true;
  // if anything has use, its mostly considered a hook
  const [counter,setCounter] = useState(0); 

  useEffect(()=>{
    setCounter(100);
    // counter = 100; //NEVER MUTATE THE STATE LIKE THIS. YOU CAN ONLY USE STATES
  },[]);    //This acts as a call back function. which works automatically - automatically works after loading
    
  //HOW DOES THE DEPENDENCY ARRAY OF USEEFFECT WORKS
  //If you leave an empty array, the variable or the function wil only work when then page loades. 

  //if you leave someting in the dependency array, it will be loaded and it will trigger whenever a change is made.


  return (
    <div className="BasicHooks" style={{textAlign:'center'}}>
      <h1> Hello, {isNameShowing ? name : 'someone'}</h1>
      {isNameShowing ? (
        <>
            
            <div className="Person">
                <Person 
                firstName='John'
                lastName='Peter'
                Age={20+3}/> 
                  {/* if you're placing just simple content, using commas will be fine, 
                  if you're using arithmetics, always use parenthesis */}
                {/* Best way to pass values to parameters  */}

                {/* Showing how useState works */}
                <button onClick={()=>{
                  setCounter((prevCount)=> prevCount-1)
                }}>-</button>
                <h1>{counter}</h1>
                <button onClick={()=>
                setCounter((prevCount)=>prevCount +1)}>+</button>
            </div>
        </>
      ): (
        <>
          <h1> There is no Name</h1>
        </>
      )}
    </div>
  );
}

export default BasicHooks;
