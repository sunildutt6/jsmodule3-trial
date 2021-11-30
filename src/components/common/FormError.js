import PropTypes from "prop-types";

import React from "react";

function ValidationError({ children }) {
  return <div className="form-error">{children}</div>;
}
ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ValidationError;
