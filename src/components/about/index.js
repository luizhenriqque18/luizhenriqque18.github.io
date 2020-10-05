import React from "react";
import {useTranslation} from "react-i18next";
import './style.scss';

export default function About(){
    let { t } = useTranslation();
    return(<div className='about d-flex flex-column'>
            <h1>{t('transaction:menu:about')}</h1>
    </div>);
}

