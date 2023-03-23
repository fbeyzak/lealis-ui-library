
import { css } from "styled-components"

const editableBorder = ({
    b,
    bw,
    bs,
    bc,
    br,
    br_r,
    br_l,
    outline,
    outline_offset,
}) => css`
        
    border: ${ b && `var(--border-${b} , ${b})`};

    border-style: ${bs};
    border-color :      ${ bc && `var(--color-${bc}, ${bc})`};
    border-width : ${ bw && `var(--border-size-${bw} , ${bw})`};
    outline : ${ outline && `var(--border-${outline} , ${outline})`};
    outline-offset : ${outline_offset};

    border-radius :     ${ br && `var(--radius-${br}, ${br})`};
    ${
        br_r && `
            border-top-right-radius : var(--radius-${br_r}, ${br_r});
            border-bottom-right-radius : var(--radius-${br_r}, ${br_r});

        `
    }

    ${
        br_l && `

            border-bottom-left-radius :var(--radius-${br_l}, ${br_l});
            border-top-left-radius : var(--radius-${br_l}, ${br_l});
        `
    }
        
  
`


export default editableBorder



