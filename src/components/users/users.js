import React, { useEffect, useState } from "react"

export const users = () => {
    const [users, modifyUsers] = useState([])
    const [totalUserMessage, updateMessage] = useState("")

    const handleInitialRender = () => {

        console.log("Initial useEffect")
        fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then((userArray) => {
                modifyUsers(userArray)
            })
    };
    useEffect(
        handleInitialRender,
        [],

    )
    useEffect(
        () => {
            console.log("Users state has changed", users)
            if (users.length === 1) {
                updateMessage("You have 1 user")
            }
            else {
                updateMessage(`You have ${users.length} users`)
            }
        },
        [users]
    )

    return (
        <>
            <div>{totalUserMessage}</div>
            {
                users.slice(0, 5).map(

                    (userObject) => {
                        return <p key={`user--${userObject.id}`}>{userObject.name}</p>
                    }
                )
            }
        </>
    )
}