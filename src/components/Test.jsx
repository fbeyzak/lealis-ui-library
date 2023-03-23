import React from 'react'
import styled from 'styled-components'

export const Text = styled.div`

    width: 400px;
    height: 400px;

    background-color: ${props => props.theme.colors.surface.tertiary};
    color: ${props => props.theme.colors.text.primary};


    &:hover{
      background-color: ${props => props.theme.colors.primary.solid.default};
      color: ${props => props.theme.colors.text.secondary};
    }
`

export  function Div(props) {

  return<div>
      {props.children}
  </div>


}
