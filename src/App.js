import React from 'react';
import {useTranslation} from "react-i18next";
import './App.css';

function App() {
    const { t } = useTranslation();
  return(
      <div>
        <h1>{t('transaction:home:title')}</h1>
        <h3>{t('transaction:home:message')}</h3>
      </div>
  );
}

export default App;
