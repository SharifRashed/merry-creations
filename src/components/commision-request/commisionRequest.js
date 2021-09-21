import React, { useEffect, useState } from "react"

export const CommisionRequest = () => {
    const [commisions, updateRequest] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/commisionRequest?_expand=user&_expand=price")
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
                            <p>{commision.description} submitted by {commision.user?.name}
                                {commision.user?.name} charges an hourly rate of {commision.price}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}