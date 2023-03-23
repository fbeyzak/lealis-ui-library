
import { css } from "styled-components"

const editableBackground
 = ({
    transparent,
    bg,
    bgc,
    bg_i,
    bg_bm,
    bg_a,
    bg_clip,
    bg_p,
    bg_px,
    bg_py,
    bg_o,
    bg_r,

}) => css`

    background: ${bg};
    background-color: ${bgc};
    background-image: ${bg_i};
    background-blend-mode: ${bg_bm};

    background-attachment: ${bg_a};
    background-clip: ${bg_clip};

    background-position: ${bg_p};
    background-position-x : ${bg_px };
    background-position-y : ${bg_py};
    background-origin: ${bg_o};

    background-repeat: ${bg_r};

    ${transparent && 'background-color : rgba(0,0,0,0)'};
`


export default editableBackground




