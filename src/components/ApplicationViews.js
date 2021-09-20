import React from "react"
import { Route } from "react-router-dom"
import { Portfolio } from "./portfolio/portfolio"
import { CommisionRequest } from "./commision-request/commisionRequest"


export const ApplicationViews = () => {
    return (
        <>
            <h1>Merry Creations</h1>
            <>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
            </>

            <>
                <Route exact path="/CommisionRequest">
                    <CommisionRequest />
                </Route>
            </>
        </>
    )
}