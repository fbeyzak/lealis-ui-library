import { css } from "styled-components"


const editableFlexBox = ({
    flx,
    dr,
    center,
    center_x,
    center_y,
    justify,
    align,
    g,
    wrap,
    flx_g,
    flx_s,
    flx_b,
    align_self,
    justify_self

}) => css`
            display: flex;

            
            justify-content :  ${
                center ? 'center' : ( dr =='col' && center_x ) ? 'center' : ( dr =='row' && center_y ) ? 'center' : justify
            };
            align-items:  ${
                center ? 'center' : ( dr =='col' && center_y ) ? 'center' : ( dr =='row' && center_x ) ? 'center' : align
            };
            gap : ${g};
            flex-direction : ${dr};
            flex-wrap: ${wrap}; 


            flex: ${flx};
            flex-grow: ${flx_g};
            flex-shrink: ${flx_s};
            flex-basis: ${flx_b};
            align-self: ${align_self};
            justify-self: ${justify_self};;


`


export default editableFlexBox