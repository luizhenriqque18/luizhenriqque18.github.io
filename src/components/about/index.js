import React from "react";
import {useTranslation} from "react-i18next";
import './style.scss';

export default function About(){
    let { t } = useTranslation();
    const perfil_photo ='https://avatars0.githubusercontent.com/u/16761542?s=400&u=d4ea8065841585ae8031fbb4ee1c064fab52f634&v=4'
    return(<div className='about row d-flex flex-column align-items-center'>
           <div className='col-12 col-ms-6 col-lg-6 col-xl-6'>
               <h5 className='text-center'>{t('transaction:menu:about')}</h5>
               <h1 className='text-center'>Uma breve descrição do meu perfil...</h1>
               <article className='text-justify p-3 d-flex flex-column flex-sm-row align-items-center align-items-sm-start'>
                   <img className='rounded-circle m-3' src={perfil_photo} alt="photo" height={90} width={90} />
                   <p>Formando-se na área de desenvolvimento de sistema, Atuo no mercado hoje buscando me aperfeiçoar como Desenvolvedor FullStack, construindo soluções Web, Mobile e Desktop, sistemas integrados e sistemas distribuidos.</p>
               </article>
               <div className='row d-flex justify-content-between'>
                   <div className='col-12 col-ms-6 col-lg-6 col-xl-6'>
                       <h5>Perfil</h5>
                       <p className='text-justify p-3'>Desenvolvedor comprometido na manutenção do próprio conhecimento, constante adaptação aos cenários mais diversos e buscando aprimorar resoluções de qualque problema da área.</p>
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
                                           <div className="progress-bar" role="progressbar"
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                           </div>
                                       </div>

                                   </button>
                               </h2>
                               <div id="frontend" className="collapse" aria-labelledby="headingOne"
                                    data-parent="#frontend">
                                   <div className="card-body">
                                       <ul>
                                           <li>Java
                                               <ul>Spring Boot</ul>
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
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                           </div>
                                       </div>

                                   </button>
                               </h2>
                               <div id="backend" className="collapse" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                   <div className="card-body">
                                       <ul>
                                           <li>Java
                                               <ul>Spring Boot</ul>
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
                                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                           </div>
                                       </div>

                                   </button>
                               </h2>
                               <div id="mobile" className="collapse" aria-labelledby="headingOne"
                                    data-parent="#accordionExample">
                                   <div className="card-body">
                                       <ul>
                                           <li>Java
                                               <ul>Spring Boot</ul>
                                           </li>

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

