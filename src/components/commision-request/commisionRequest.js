import React, { useEffect, useState } from "react"

export const CommisionRequest = () => {
    const [commisions, updateRequest] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/commisionRequest?_expand=user")
                .then(res => res.json())
                .then((data) => {
                    updateRequest(data)
                })
        },
        []
    )

    return (
        <>

            {
                commisions.map(
                    (commision) => {
                        console.log(commision)
                        return <div key={`commision--${commision.id}`}>
                            <p>{commision.description} submitted by {commision.artistUserId}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}