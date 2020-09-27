import React, { useState} from "react";
import {useTranslation} from "react-i18next";
import {Link, NavLink, useRouteMatch, useParams, useHistory} from "react-router-dom";
import Translation from './../../assert/translate-24px.svg'
import "./style.scss";
import br from "../../assert/image/brazil.png";
import usa from "../../assert/image/usa.png";

function NavBar() {
    let [languagem, setLanguagem] = useState('Português');
    let params = useParams();
    let {location: { pathname }} = useHistory();
    let { t, i18n } = useTranslation();

    function handleChangeLanguage(language, label) {
        setLanguagem(label)
        i18n.changeLanguage(language)
    }

    const isActionUrl = (path) =>  path === pathname ? 'nav-item active' : 'nav-item';

    return(
        <nav className="navbar navbar-expand-md navbar-light mt-3 mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Luiz Henrique O. Souza</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className={isActionUrl('/portfolio')}>
                        <Link className="nav-link" to={'/portfolio'}>{t('transaction:menu:portfolio')}</Link>
                    </li>
                    <li className={isActionUrl('/blog')}>
                        <Link className="nav-link" to={'blog'}>{t('transaction:menu:blog')}</Link>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={Translation}/> {languagem}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item"
                                   onClick={() => handleChangeLanguage('pt-BR','Português')}>
                                    Português
                                </a>
                                <a className="dropdown-item"
                                   onClick={() => handleChangeLanguage('en-US','English')}>
                                    English
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

