import React from "react";
import {
  FaMapMarkerAlt,
  FaTrash,
  FaTruck,
  FaShieldAlt,
  FaCalendarAlt,
  FaCreditCard,
} from "react-icons/fa";
import "../styles/StepProgress.css";

const steps = [
  { label: "Postcode", icon: <FaMapMarkerAlt /> },
  { label: "Waste Type", icon: <FaTrash /> },
  { label: "Select Skip", icon: <FaTruck /> },
  { label: "Permit Check", icon: <FaShieldAlt /> },
  { label: "Choose Date", icon: <FaCalendarAlt /> },
  { label: "Payment", icon: <FaCreditCard /> },
];

export default function StepProgress({ currentStep = 0 }) {
  return (
    <div className="step-progress-container">
      <div className="step-progress">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div className="step" key={index}>
              <div
                className={`step-icon ${isActive ? "active" : ""} ${
                  isCompleted ? "completed" : ""
                }`}
              >
                {step.icon}
              </div>
              <div
                className={`step-label ${isActive ? "active" : ""} ${
                  isCompleted ? "completed" : ""
                }`}
              >
                {step.label}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`step-line ${isCompleted ? "completed" : ""}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
