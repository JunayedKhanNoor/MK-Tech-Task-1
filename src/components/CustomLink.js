import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
        className='uppercase'
        style={{
          letterSpacing: "1px",
          color: match ? "#FF6F00" : "#644F9C",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>  
    );
};

export default CustomLink;