import React, { useState } from "react"
import { useHistory } from "react-router-dom";


export const RequestForm = () => {
    const [commission, updateForm] = useState({
        description: "",
        price: 0
    });

    const history = useHistory()

    const submitRequest = (evt) => {
        evt.preventDefault()

        const newRequest = {
            description: commission.description,
            price: commission.price,
            userId: parseInt(localStorage.getItem("merry_user")),
            artistUserId: 1,
            status: "",
            acceptedRequest: true,
            completedRequest: false

        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRequest)
        }

        return fetch("http://localhost:8088/commisionRequests", fetchOption)
            .then(response => response.json())
            .then(() => history.push("/commissions"))

    }
    return (
        <>
            <form className="requestForm">
                <h2 className="requestForm__title">New Commision Request</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Brief description of commision"
                            onChange={
                                (evt) => {
                                    const copy = { ...commission }
                                    copy.description = evt.target.value
                                    updateForm(copy)
                                }
                            } />
                        <input
                            required autoFocus
                            type="number"
                            className="form-control"
                            placeholder="Asking price for commision"
                            onChange={(evt) => {
                                const copy = { ...commission }
                                copy.price = evt.target.value
                                updateForm(copy)
                            }} />
                    </div>
                </fieldset>

                <button onClick={submitRequest} className="btn btn-primary" >
                    Submit Commission Request
                </button>
            </form>
        </>
    )
}