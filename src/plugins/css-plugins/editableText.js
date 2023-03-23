
import { capitalize } from "@mui/material"
import { string } from "prop-types"
import { css } from "styled-components"

const editableText = ({

    f,
    c,
    ff,
    fs, 
    fw,
    italic,
    ta,
    td,
    to,
    ws,
    t_shadow,
    capitalize,
    uppercase,
    lowercase,
    lh,
    va


    

}) => css`

    font : ${f};
    font-family: ${ff ? `var(--font-${ff} , ${ff}) `: null};
    font-size: ${fs ? `var(--font-size-${fs} , ${fs}) `: null};
    font-weight : ${fw ? `var(--font-weight-${fw} , ${fw}) `: null};
    font-style: ${italic ? 'italic' : null};
    color: ${c ? `var(--color-${c} , c)` : null };
    text-align: ${ta};
    line-height: ${lh};
    vertical-align : ${va};


    text-decoration : ${td};
    text-overflow: ${to};

    white-space: ${ws};
    text-shadow: ${t_shadow}; 
    
    /* boolean check to determine value by multiple variables */
    text-transform : ${capitalize ? 'capitalize' : uppercase ? 'uppercase' : lowercase ? 'lowercase' : null } ;

    
`


export default editableText


