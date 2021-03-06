import React, {useEffect, useState} from 'react';

function Contact(props) {
    const [email, set_email] = useState("")
    const [message, set_message] = useState("")

    const send_message = () => {
        console.log(email, message)
    }

    return (
        <div className={"form-container"}>
            <h2>Kérdésed van ?</h2>
            <small>Akkor írj és válaszolunk.</small>
            <hr/>
            <input
                type="email"
                placeholder={"Email"}
                value={email}
                onChange={(e) => set_email(e.target.value)}
            />

            <textarea
                cols="30" rows="10"
                placeholder={"Üzenet"}
                value={message}
                onChange={(e) => set_message(e.target.value)}
            />
            <hr/>
            <button onClick={send_message}>Küld</button>
        </div>
    );
}

export default Contact;
