import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {useTranslation} from "react-i18next";
import './App.css';
import br from '../src/assert/image/brazil.png';
import usa from '../src/assert/image/usa.png';
import post from './blog/posts/helloworld.md';
import NavBar from "./ui/navbar";


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
