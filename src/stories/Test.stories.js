import React from "react";
import { storiesOf } from "@storybook/react";
import Test from "../components/Test";

import './styles.css'

const stories = storiesOf('App test' , module);

stories.add(
    'App' , () => {
        return <Test/>
    }
)