import React from 'react'
import styled from 'styled-components'



const ButtonSizes  = {
    h : {
        xs: '32px',  
        s: '36px',
        m: '40px',
        l: '48px',
        xl: '52px',
    },
    p : {
        xs: '8px' ,
        s:  '12px',
        m:  '16px',
        l:  '24px',
        xl: '32px', 
    },

    g : {

        xs: '8px',
        s: '12px',
        m: '16px',
        l: '24px',
        xl:'32px',
    
    }

}

export const Button = styled.button`
        background-color: pink;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
        padding: 8px ${props => ButtonSizes.p[props.size]};
        height: ${props => ButtonSizes.h[props.size]};
        gap: ${props => ButtonSizes.g[props.size]}; 

        border-radius: ${props => props.theme.border.radius_m};
        font-size:${props => props.theme.typography[`size_${props.size}`]};

        font-weight : ${props => props.theme.typography.weight_semibold};

        ${props => props.plugins?.map(plugin => plugin)};
   
`


