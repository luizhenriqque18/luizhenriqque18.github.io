import React from "react";
import {useTranslation} from "react-i18next";
import './style.scss';

export default function Portifolio(){
    let { t } = useTranslation();
    return(<div className='portifolio d-flex flex-column'>
            <h1>{t('transaction:menu:portfolio')}</h1>
    </div>);
}
