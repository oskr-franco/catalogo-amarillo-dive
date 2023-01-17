import React from 'react';
import NextImage from 'next/legacy/image'

function Image({className, ...rest}) {
  return(
    <div className={className}>
      <NextImage {...rest}/>
    </div>
  )
}

export default Image;