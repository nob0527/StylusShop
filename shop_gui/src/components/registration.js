import React from 'react';

function Registration(props) {
    return (
        <div className={"form-container"}>
            <h2><i className="fas fa-user-plus"/>Regisztráció.</h2>

            <hr/>
            <input type="email" placeholder={"Email"}/>
            <input type="password" placeholder={"Jelszó"}/>
            <input type="password" placeholder={"Jelszó megerősítés"}/>
            <hr/>
            <button >Küldés</button>
        </div>
    );
}

export default Registration;