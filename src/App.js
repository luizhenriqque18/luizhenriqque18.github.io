import React from 'react';
import {useTranslation} from "react-i18next";
import './App.css';
import br from '../src/assert/image/brazil.png';
import usa from '../src/assert/image/usa.png';

function App() {
    const { t, i18n } = useTranslation();

    function handleChangeLanguage(language) {
        i18n.changeLanguage(language)
    }

  return(
      <div>
        <h1>{t('transaction:home:title')}</h1>
        <h3>{t('transaction:home:message')}</h3>
          <img className={'btn-curso-click'} src={br} onClick={() => handleChangeLanguage('pt-BR')}/>
          <img className={'btn-curso-click'} src={usa} onClick={() => handleChangeLanguage('en-US')}/>
      </div>
  )
  ;
}

export default App;
