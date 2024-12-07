import React, { useEffect } from 'react'

const UseEffectWorking = () => {

    useEffect(()=>{
        console.log("Hello")
        return(()=>{
            console.log("return statement") // runs just before component about to re-render
        })

    },[]) // [dependency array , inside code runs on change of dependencies]

  return (
    <div>UseEffectWorking</div>
  )
}

export default UseEffectWorking