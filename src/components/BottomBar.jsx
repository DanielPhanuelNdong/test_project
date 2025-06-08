import React from 'react';
import PropTypes from 'prop-types';
import "../styles/BottomBar.css"
import "../styles/SkipSizePage.css"

const BottomBar = ({ selectedSkip, onBack, onContinue }) => {
  return (
    <div className={`bottom-bar transition ${selectedSkip ? 'show' : 'hide'}`}>
      <div className="container d-flex justify-content-between align-items-center text-white py-2 px-3">
        <div>
          {selectedSkip?.postcode}{' '}
          <span className="text-primary">£{selectedSkip?.price_before_vat}</span>{' '}
          <span className="text-secondary">14 day hire</span>
        </div>
        <div>
          <button className="btn btn-secondary me-2" onClick={onBack}>Back</button>
          <button className="btn btn-primary" onClick={onContinue}>Continue →</button>
        </div>
      </div>
    </div>
  );
};

BottomBar.propTypes = {
  selectedSkip: PropTypes.shape({
    postcode: PropTypes.string,
    price_before_vat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  onBack: PropTypes.func,
  onContinue: PropTypes.func,
};

export default BottomBar;
