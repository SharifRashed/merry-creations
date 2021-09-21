import React, { useState } from "react"
import { useHistory } from "react-router";


export const RequestForm = () => {
    const [commission, updateForm] = useState({
        description: "",
        price: number
    });

    const history = useHistory()

    const submitRequest = (evt) => {
        evt.preventDefault()

        const newRequest =
            description: commission.description,
            price: commission.price,
            userId: parseInt(localStorage.getItem("merry_user")),
                artistUserId: 1,
                    dateCompleted: ""
    }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRequest)
    }

    return fetch("https://localhost:8088/commissionRequest", fetchOption)
        .then(response => {
            history.push("/commissions")

        })
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

                <button onClick={submitRequest}"btn btn-primary" onClick={saveRequest}>
                Submit Commission
            </button>

        </form>
        </>
    )
}