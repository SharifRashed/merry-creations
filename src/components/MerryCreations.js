import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/nav";
import { Login } from "./auth/login";
import { Register } from "./auth/register";

export const MerryCreations = () => {

    return (
        <>
            <Route
                render={() => {
                    if (localStorage.getItem("honey_customer")) {
                        return (
                            <>
                                <NavBar />
                                <ApplicationViews />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </>
    )
}