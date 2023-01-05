import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomAccordian from "./components/CustomAccordion";
import CustomSearch from "./components/CustomSearch";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Translate from "./components/Translate";



const items = [
    {
        title: "Question 1",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse       malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Question 2",
        content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse       malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Question 4",
        content: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse   malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissebmalesuada lacus ex, sit amet blandit leo lobortis eget."
    },


]

const options = [
    {
        label: "The color is red",
        value: '#D22D2D',

    },
    {
        label: "The color is goldeen",
        value: '#FFDF00'
    },
    {
        label: "The color is blue",
        value: '#00FFEF'
    },
]




export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <Box sx={{
            display: "flex",
            width: '100vw',
            height: '100vh',
            backgroundColor: '#112031'
        }}>
            <Header />

            <Route path="/">
                <CustomAccordian items={items} />
            </Route>

            <Route path="/Search">
                <CustomSearch />
            </Route>

            <Route path="/dropdown">
                <Dropdown
                    options={options}
                    onSelectedChange={setSelected}
                    selected={selected} />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>



        </Box>
    )
}