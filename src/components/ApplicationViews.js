import React from "react"
import { Route } from "react-router-dom"
import { Portfolio } from "./portfolio/portfolio"
import { CommisionRequest } from "./commision-request/commisionRequest"
import { RequestForm } from "./commision-request/requestForm"


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
                <Route exact path="/commissionRequest">
                    <CommisionRequest />
                </Route>
            </>

            <>
                <Route exact path="/commissionRequest/create">
                    <RequestForm />
                </Route>
            </>

            <>
                <Route exact path="/commissionRequest/:commisionRequestsId(\d+)">
                    <CommisionRequest />
                </Route>
            </>

        </>
    )
}