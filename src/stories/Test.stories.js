import React from "react";
import { storiesOf } from "@storybook/react";
import {Div} from '../components/Test'
import './styles.css'
import { Text } from "../components/Test";
import { Button } from "../components/Buttons";

const stories = storiesOf('App test' , module);

stories.add(
    'App' , () => {
        return ( 
            <Div>
                <Text/>
                <Button  variant='success' boxStyle="ghost" >Button</Button>
            </Div>


        )

        
    }
)