import React from "react"
import { Route } from "react-router-dom"
import { Portfolio } from "./portfolio/portfolio"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
        </>
    )
}