// SkipCard.jsx
import React from "react";

const SkipCard = ({ skip, selected, onSelect, image }) => {
  return (
    <div className="card h-100 shadow-sm skip-card">
      <div
        onClick={() => onSelect(skip)}
        className={selected ? "selected" : ""}
        role="button"
      >
        <div className="position-relative">
          <img src={image} className="card-img-top p-3 rogne rounded-4" alt={skip.postcode} />
          <span className="badge bg-primary position-absolute top-0 end-0 mt-4 me-4 p-2">
            {skip.size}
          </span>
          {skip.allows_heavy_waste && (
            <div className="alert p-1 mt-5 small position-absolute bottom-10 top-50 start-0 bg-dark text-warning fw-bold">
              ⚠️ Not Allowed On The Road
            </div>
          )}
        </div>

        <div className="card-body text-start">
          <h5 className="card-title fw-bold text-light">{skip.postcode}</h5>
          <p className="card-text text-color">14 day hire period</p>
          <h5 className="text-primary">£{skip.price_before_vat}</h5>
          <button
            className={`btn ${selected ? "btn-primary" : "btn-dark"} mt-2 w-100`}
          >
            {selected ? "Selected" : "Select This Skip"} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;
