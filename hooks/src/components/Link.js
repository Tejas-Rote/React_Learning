import { Tab } from '@mui/material'
import React from 'react'




const Link = ({label, href,}) => {


    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }



  return (
    <Tab onClick={onClick} label={label} href = {href} />
  )
}

export default Link