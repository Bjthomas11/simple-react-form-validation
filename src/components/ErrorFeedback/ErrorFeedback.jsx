import React from "react";

const ErrorFeedback = ({ errorMessage }) => {
  return <div className="invalid-feedback">{errorMessage}</div>;
};

export default ErrorFeedback;
