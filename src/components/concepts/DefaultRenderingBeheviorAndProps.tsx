import React from 'react'
import { dataType } from '../../App'

export const DefaultRenderingBeheviorAndProps = (props:dataType) => {
    console.log("Rendered",React)
  return (
    <div>DefaultRenderingBehevior <strong>{props.name}</strong> & <strong>{props.email}</strong> </div>
  )
}