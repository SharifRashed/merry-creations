import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Commision = () => {
    const [commision, set] = useState({})  // State variable for current ticket object
    const { commisionId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/commisionRequests/${commisionId}?_expand=userId&_expand=artistUserId`)
                .then(res => res.json())
                .then(set)
        },
        [commisionId]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <h2>Commission Request Details</h2>
            <section className="commision">
                <h3 className="comision__description">{commision.description}</h3>
                <div className="comision__user">Submitted by {commision.userId?.name}</div>
                <div className="comision__artist">Assigned to {commision.artistUserId?.name}</div>
            </section>
        </>
    )
}