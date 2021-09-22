import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from 'react-router-dom';



export const CommisionRequest = () => {
    const [commisions, updateRequest] = useState([])

    const history = useHistory()


    useEffect(
        () => {
            fetch("http://localhost:8088/commisionRequests?_expand=user&_expand=price")
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
                        return <div key={`commision--${commision.id}`}>
                            <p>
                                <Link to={`/commision/${commision.id}`}>{commision.description}</Link>
                                submitted by {commision.user?.name}
                                , charges an hourly rate of {commision.price?.name}
                            </p>
                        </div>
                    }
                )
            }
            < div >
                <button onClick={() => history.push("/commissionRequest/create")}>Create Commission Request</button>
            </div >
        </>
    )
}

