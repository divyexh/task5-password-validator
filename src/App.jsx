import React, { useState } from "react";
import "./App.css";

const evaluateStrength = (password) => {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  if (password.length >= 12) score++;

  const strengthLabels = ["Very Weak", "Weak", "Good", "Strong", "Very Strong", "Excellent"];
  const colors = ["#e11d48", "#f97316", "#facc15", "#10b981", "#0ea5e9", "#8b5cf6"];

  return {
    label: strengthLabels[score],
    color: colors[score]
  };
};

const App = () => {
  const [password, setPassword] = useState("");
  const { label, color } = evaluateStrength(password);

  return (
    <div className="container">
      <h1>Password Strength Validator</h1>
      <p>Enter a password and see how strong it is in real-time.</p>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password && (
        <div className="strength-box" style={{ borderColor: color }}>
          Strength: <span style={{ color }}>{label}</span>
        </div>
      )}
    </div>
  );
};

export default App;
