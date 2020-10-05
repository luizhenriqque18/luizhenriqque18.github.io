import React from "react";
import {useTranslation} from "react-i18next";
import './style.scss';

export default function Abstract(){
    let { t } = useTranslation();
    return(<div className='abstract d-flex flex-column'>
            <h1>{t('transaction:menu:abstract')}</h1>
    </div>);
}
