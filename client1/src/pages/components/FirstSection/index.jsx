import React from 'react';

import './styles.css';
import './responsive.css';

export default function FirstSection({ title, formId, linkMatricula }){
  const HubspotForm = React.lazy(() => import('react-hubspot-form'));

  return (
    <div className="First__Section">
      <div className="container">
        <div className="text">
          <h3>Formação</h3>
          <h1>{ title }</h1>
          <a 
            href={ linkMatricula } 
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matricule-se já!
          </a>
        </div>
      </div>

      <div className="container">
        <div className="form">
          <p>Inscreva-se para mais informações!</p>
          <React.Suspense fallback={<p>Carregando ...</p>}>
            <HubspotForm
              portalId='6331207'
              formId={formId}
            />
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}
