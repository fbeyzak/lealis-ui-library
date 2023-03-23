import { css } from "styled-components";

const calculateWidthByColCount = css`
    width : ${ ({margin , gutter , cols }) => {
    
            return `calc( 
                            (
                                (100vw - ( ${margin}* 2)) 
                                - 
                                (  ${gutter}  * (  ${cols} - 1 ) )
                            )

                            / 
                            
                            ${cols}
                        
                        ) `
    } };

`