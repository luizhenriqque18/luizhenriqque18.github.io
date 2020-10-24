import React from "react";
import {useTranslation} from "react-i18next";
import './style.scss';

export default function About(){
    let { t } = useTranslation();
    const perfil_photo ='https://avatars0.githubusercontent.com/u/16761542?s=400&u=d4ea8065841585ae8031fbb4ee1c064fab52f634&v=4'
    return(<div className='about row d-flex flex-column align-items-center'>
           <div className='col-12 col-ms-6 col-lg-6 col-xl-6'>
               <h5 className='text-cente'>{t('transaction:menu:about')}</h5>
               <h1 className='text-center'>Uma breve descrição do meu perfil...</h1>
               <article className='text-justify text-secondary p-3 d-flex flex-column flex-sm-row align-items-center align-items-sm-start'>
                   <img className='rounded-circle m-3' src={perfil_photo} alt="photo" height={90} width={90} />
                   <p>Formando-se na área de desenvolvimento de sistema, Atuo no mercado hoje buscando me aperfeiçoar como Desenvolvedor FullStack, construindo soluções Web, Mobile e Desktop, sistemas integrados e sistemas distribuidos.</p>
               </article>
               <div className='row d-flex justify-content-between'>
                   <div className='col-12 col-ms-6 col-lg-6 col-xl-6'>
                       <h5>Perfil</h5>
                       <p className='text-justify text-secondary'>Desenvolvedor comprometido na manutenção do próprio conhecimento, constante adaptação aos cenários mais diversos e buscando aprimorar resoluções de qualque problema da área.</p>
                       <h5>Nome:</h5>
                       <p className='text-secondary'>Luiz Henrique Oliveria de Souza</p>
                       <h5>Nascimento:</h5>
                       <p className='text-secondary'>08 de Março de 1997</p>
                       <h5>Cargo:</h5>
                       <p className='text-secondary'>Full Stack Jr. Developer</p>
                       <h5>Website:</h5>
                       <p className='text-secondary'>luizhenriqque18.github.io</p>
                       <h5>Email:</h5>
                       <p className='text-secondary'>luizhenriqque15@gmail.com</p>
                   </div>
                   <div className='col-12 col-ms-6 col-lg-6 col-xl-6' >
                       <h5>Skills</h5>
                       <div className="accordion" id="accordionExample">
                           <div className="">
                               <h2 className="mb-0">
                                   <button className="btn btn-block text-left" type="button"
                                           data-toggle="collapse" data-target="#frontend"
                                           aria-controls="collapseOne">
                                       Frontend
                                       <div className="progress">
                                           <div className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow="30"
                                                style={{width: '30%'}}
                                                aria-valuemax="100">30%
                                           </div>
                                       </div>

                                   </button>
                               </h2>
                               <div id="frontend" className="collapse" aria-labelledby="headingOne"
                                    data-parent="#frontend">
                                   <div className="card-body">
                                       <ul>
                                           <li>HTML5</li>
                                           <li>CSS3
                                              <ul>
                                                  <li>SASS</li>
                                                  <li>SCSS</li>
                                              </ul>
                                           </li>
                                           <li>Javascript
                                               <li>TypeScript</li>
                                               <li>Ecm6</li>
                                               <li>SPA's
                                                   <ul>
                                                       <li>Angular2+</li>
                                                       <li>ReactJs</li>
                                                   </ul>
                                               </li>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                           <div className="">
                               <h2 className="mb-0">
                                   <button className="btn btn-block text-left" type="button"
                                           data-toggle="collapse" data-target="#backend"
                                           aria-controls="collapseOne">
                                       Backend
                                       <div className="progress">
                                           <div className="progress-bar" role="progressbar"
                                                style={{width: '50%'}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                           </div>
                                       </div>

                                   </button>
                               </h2>
                               <div id="backend" className="collapse" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                   <div className="card-body">
                                       <ul>
                                           <li>Java 8
                                               <ul>
                                                   <li>Frameworks
                                                       <ul>
                                                           <li>SpringBoot</li>
                                                       </ul>
                                                   </li>
                                               </ul>
                                           </li>
                                           <li>C#
                                               <ul>
                                                   <li>Frameworks
                                                       <ul>
                                                           <li>.Net</li>
                                                       </ul>
                                                   </li>
                                               </ul>
                                           </li>
                                           <li>SGBD
                                               <ul>
                                                   <li>Relacionais
                                                       <ul>
                                                           <li>Postegres</li>
                                                           <li>Mysql</li>
                                                       </ul>
                                                   </li>
                                               </ul>
                                               <ul>
                                                   <li>Não relacionais
                                                       <ul>
                                                           <li>MongoDB</li>
                                                       </ul>
                                                   </li>
                                               </ul>
                                           </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                           <div className="">
                               <h2 className="mb-0">
                                   <button className="btn btn-block text-left" type="button"
                                           data-toggle="collapse" data-target="#mobile"
                                           aria-controls="collapseOne">
                                       Mobile
                                       <div className="progress">
                                           <div className="progress-bar" role="progressbar"
                                                style={{width: '20%'}}
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                           </div>
                                       </div>

                                   </button>
                               </h2>
                               <div id="mobile" className="collapse" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                   <div className="card-body">
                                       <ul>
                                           <li>Javascript
                                               <ul>React Native</ul>
                                           </li>
                                           <li>Java (Nativo) Jetpack </li>
                                       </ul>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    </div>);
}

