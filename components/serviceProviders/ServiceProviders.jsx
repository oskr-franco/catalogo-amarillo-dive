import React from 'react';

import CardService from '../cardService/CardService';

function ServiceProviders({ providers }) {
  return(
    <div className='container'>
      { providers.map(provider => (
        <CardService key={provider} provider={provider} />
      ))}
    </div>
  )
}

export default React.memo(ServiceProviders);
