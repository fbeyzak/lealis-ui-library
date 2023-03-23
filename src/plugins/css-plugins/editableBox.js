
import { string } from "prop-types"
import { css } from "styled-components"

const editableBox = ({

    disp,

    fullWidth ,
    fullHeight,
    w=null,
    h=null,

    min_w=null,
    max_w=null,

    min_h=null,
    max_h=null,

    p=null,
    p_x,
    p_y,
    p_t,
    p_b,
    p_r,
    p_l,

    m=null,
    ratio=null,

    of=null,
    shadow,
    elevation,
    r,

    opacity,
    disabled,

    obj_fit,

    round , 
    circle,

}) => css`

    pointer-events: ${disabled ? 'none' : null};
    
    display: ${disp};
    // WIDTH

    width : ${w};
    min-width : ${min_w};
    max-width : ${max_w};

    // HEIGHT

    height :  ${h};
    min-height : ${min_h};
    max-height : ${max_h};

    // Other
    padding :  ${p};
    padding :  ${p ? `var(--spacing-${p} , ${p}) `: null};

    padding-top: ${p_y ? `var(--spacing-${p_y} , ${p_y}) `: null};
    padding-bottom: ${p_y ? `var(--spacing-${p_y} , ${p_y}) `: null};

    padding-left: ${p_x ? `var(--spacing-${p_x} , ${p_x}) `: null};
    padding-right: ${p_x ? `var(--spacing-${p_x} , ${p_x}) `: null};

    padding-top: ${p_t ? `var(--spacing-${p_t} , ${p_t}) `: null};
    padding-bottom: ${p_b ? `var(--spacing-${p_b} , ${p_b}) `: null};
    padding-left: ${p_l ? `var(--spacing-${p_l} , ${p_l}) `: null};
    padding-right: ${p_r ? `var(--spacing-${p_r} , ${p_r}) `: null};

    margin : ${ m};
    margin : ${m ? `var(--spacing-${m} , ${m})`: m};
    overflow : ${of};
    aspect-ratio :${ratio};
    border-radius: ${r ? `var(--radius-${r} , ${r}) `: null};

    box-shadow: ${shadow ? `var(--shadow-${shadow} , ${shadow}) `: null} , ${elevation ? `var(--elevation-${elevation} , ${elevation}) `: null} ; 
    object-fit: ${obj_fit};
    opacity: ${opacity};




    ${ round && `border-radius : 5000px`};
    ${ circle && `border-radius : 50%`};

    ${ fullWidth && `width : 100%`};
    ${ fullHeight && `height : 100%`};
    `


export default editableBox



