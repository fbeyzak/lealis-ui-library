


import { css } from "styled-components"

 const styledBox =  css`
            background-color : ${props => props.theme.colors[`${props.variant}_${props.boxStyle}_default`]};
            /* color : ${props => props.theme.colors[`on_${props.variant}_${props.boxStyle}_default`]};
             */
            user-select: ${props => props.disableCopy ? 'none' : ''};
            border : ${props => props.theme[`border_size_${props.size}`]} solid currentColor ;

            border-width : ${props.boxStyle === 'outlined' ? 'ignore' : '0'};
            overflow: hidden;
            ${ props => props.stateful  && `
                &:hover{

                    background-color : ${props => props.theme.colors[`${props.variant}_${props.boxStyle}_hover`]};
                    //  color : ${props => props.theme.colors[`on_${props.variant}_${props.boxStyle}_hover`]};
                }
                &:focus{

                    color : ${props => props.theme.colors[`on_${props.variant}_${props.boxStyle}_focus`]};
                    outline:  ${props => props.theme[`border_size_${size}`]} solid currentColor ;

                }
                &:disabled, &.disabled {
                    background-color : ${props => props.theme.colors[`${props.variant}_${props.boxStyle}_disabled`]};
                    // color : ${props => props.theme.colors[`on_${props.variant}_${props.boxStyle}_disabled`]};

                    pointer-events: none;
                }
            `
            }

            ${  props =>
                props.disabled && `
                background-color : ${props => props.theme.colors[`${props.variant}_${props.boxStyle}_disabled`]};
                    color : ${props => props.theme.colors[`on_${props.variant}_${props.boxStyle}_disabled`]};

                    pointer-events: none;

                `
            }





            `

export default styledBox;
