import React, { useEffect, useState } from "react"

export const Portfolio = () => {
    const [portfolio, changePortfolio] = useState([])


    const handleInitialRender = () => {

        console.log("Initial useEffect")

        return fetch("http://localhost:8088/portfolios?_expand=user")
            .then(res => res.json())
            .then((portfolioArray) => {
                changePortfolio(portfolioArray)
            })
    };
    useEffect(() => {
        handleInitialRender()
    },
        []
    )
    return (
        <>
            {portfolio.map(portfolio => <div key={portfolio.id}> {portfolio.description} </div>)
            }
        </>
    )
}