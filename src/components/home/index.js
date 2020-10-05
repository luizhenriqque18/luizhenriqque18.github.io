import React, {useState} from "react";
import './style.css';
import github from '../../assert/image/svg/icons8-github.svg'
import linkedin from '../../assert/image/svg/icons8-linkedin.svg'
import {useTranslation} from "react-i18next";

function Home(){
    let { t } = useTranslation();

    return(
        <div className='home d-flex flex-column pt-5'>
            <div className='d-flex flex-column align-items-center flex-grow-1 justify-content-center'>
                <h5 className='text-uppercase'>{t('transaction:menu:portfolio')}</h5>
                <h1 className='text-center'>Luiz Henrique O. Souza</h1>
                <p><span className='text-uppercase'>full stack developer</span></p>
            </div>
            <div>
                <ul className='d-flex justify-content-center pt-5 pl-0'>
                    <li className='list-group mr-3 ml-3'>
                        <a href="https://github.com/luizhenriqque18" target='_blank'>
                            <img src={github}/>
                        </a>
                    </li>
                    <li className='list-group mr-3 ml-3'>
                        <a href="https://www.linkedin.com/in/luiz-henrique-oliveira-de-souza-b823a8127/" target='_blank'>
                            <img src={linkedin}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Home
