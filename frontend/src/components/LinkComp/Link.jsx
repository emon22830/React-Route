import React from 'react';
import PropTypes from 'prop-types';

const Link = () => {
    return (
       <li className='mr-10 ' ><a href={route.path}>{route.name} </a> </li>
    );


};

Link.PropTypes = {
   route: PropTypes.object
}

export default Link;