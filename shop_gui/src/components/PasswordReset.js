import React from 'react';


function PasswordReset(props) {
    return (
        <div className={"form-container"}>
            <h2><i className="fas fa-key"/>Adja meg a regisztrált email címét.</h2>
            <small>Az email címre küldjük az instrukciókat.</small>
            <hr/>
            <input type="email" placeholder={"Email"}/>
            <hr/>
            <button >Küldés</button>
        </div>
    );
}

export default PasswordReset;