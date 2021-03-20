import React from 'react';
import {Link} from "react-router-dom";

function Login(props) {
    return (

        <div className={"form-container"}>
            <h2><i className="fas fa-user-lock"/>Megrendelés kezeléséhez jelenkezzen be :</h2>

            <hr/>
            <input type="email" placeholder={"Email"}/>
            <input type="password" placeholder={"Password"}/>
            <hr/>
            <button >Bejelentkezés</button>

            <small>Elfelejtette jelszavát ? <Link to={"/password_reset"}>Jelszóemlékeztető</Link></small>
            <small>Nincs még regisztrálva ? <Link to={"/registration"}>Regisztráció</Link></small>


        </div>

    );
}

export default Login;