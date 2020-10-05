import React, { useState, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import Translation from './../../assert/translate-24px.svg'
import "./style.scss";
function NavBar() {
    let [languagem, setLanguagem] = useState('Português');
    let params = useParams();
    let { t, i18n } = useTranslation();
    let { hash } = window.location

    function handleChangeLanguage(language, label) {
        setLanguagem(label)
        i18n.changeLanguage(language)
    }

    const isActionUrl = (path) =>  path === hash ? 'nav-item active' : 'nav-item';

    return(
        <nav className="navbar navbar-expand-md navbar-light m-3 ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand text-white" href="#">Luiz Henrique O. Souza</a>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className={isActionUrl('#home')}>
                        <a className="nav-link" href='#home'>{t('transaction:menu:home')}</a>
                    </li>
                    <li className={isActionUrl('#about')}>
                        <a className="nav-link" href='#about'>{t('transaction:menu:about')}</a>
                    </li>
                    <li className={isActionUrl('#abstract')}>
                        <a className="nav-link" href='#abstract'>{t('transaction:menu:abstract')}</a>
                    </li>
                    <li className={isActionUrl('#portfolio')}>
                        <a className="nav-link" href='#portfolio'>{t('transaction:menu:portfolio')}</a>
                    </li>
                    {/*<li className={isActionUrl('#blog')}>
                        <a className="nav-link" href='#blog'>{t('transaction:menu:blog')}</a>
                    </li>*/}
                    <li className="nav-item">
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle text-white" type="button" id="dropdownMenuButton"
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

