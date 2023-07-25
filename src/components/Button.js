import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';

const Button = ({
  children,
  url,
  activeClassName,
  partiallyActive,
  buttonType,
  ...rest
}) => {
  return (
    <>
      {url ? (
        <GatsbyLink
          to={url}
          activeClassName={activeClassName}
          partiallyActive={partiallyActive}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
          {...rest}
        >
          {children}
        </GatsbyLink>
      ) : (
        <button
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

Button.propTypes = {
  buttonType: PropTypes.oneOf(['primary', 'secondary', '']),
  children: PropTypes.string,
};
