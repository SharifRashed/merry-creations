import React, { useEffect, useState } from "react"

export const CommisionRequest = () => {
    const [commision, updateRequest] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/commisionRequest?_expand=users&_expand=portfolio")
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
                requests.map(
                    (request) => {
                        console.log(request)
                        return <div key={`request--${request.id}`}>
                            <p>{request.description} submitted by {request.customer.name}
                                and worked on by {request?.employee?.name ? request?.employee?.name : "unknown employee"}</p>
                        </div>
                    }
                )
            }
        </>
    )
}