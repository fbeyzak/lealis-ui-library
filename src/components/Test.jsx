import React from 'react'

export function Test() {
  return (
    <div>TestComponent</div>
  )
}


export  function Div(props) {

  return<div>
      {props.children}
  </div>


}
