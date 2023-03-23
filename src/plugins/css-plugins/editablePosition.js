
import { css } from "styled-components"

const editablePosition = ({
    pos,
    pos_t = null,
    pos_b = null,
    pos_r = null,
    pos_l = null,
    index = null,
    float = null,

}) => css`

        position: ${pos ? `var(--spacing-${pos} , ${pos}) `: null};
        top : ${pos_t ? `var(--spacing-${pos_t} , ${pos_t}) `: null};
        bottom : ${pos_b ? `var(--spacing-${pos_b} , ${pos_b}) `: null};
        right : ${pos_r ? `var(--spacing-${pos_r} , ${pos_r}) `: null};
        left : ${pos_l ? `var(--spacing-${pos_l} , ${pos_l}) `: null};
        z-index : ${index ? `var(--index-${index} , ${index}) `: null};
        float : ${float};

`


export default editablePosition



