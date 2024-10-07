import React from "react";

interface MetricsProps {
  metrics: {
    wordCount: number;
    charCount: number;
    charCountWithoutSpaces: number;
    numberCount: number;
    sumNumbers: number;
    averageWordLength: string;
  };
}

const MetricsDisplay: React.FC<MetricsProps> = ({ metrics }) => {
  return (
    <div className="metrics-display">
      <p>
        <strong>Recuento de palabras:</strong> {metrics.wordCount}
      </p>
      <p>
        <strong>Recuento de caracteres (con espacios):</strong>{" "}
        {metrics.charCount}
      </p>
      <p>
        <strong>
          Recuento de caracteres (sin espacios y sin signos de puntuación):
        </strong>{" "}
        {metrics.charCountWithoutSpaces}
      </p>
      <p>
        <strong>Recuento de números:</strong> {metrics.numberCount}
      </p>
      <p>
        <strong>Suma total de números:</strong> {metrics.sumNumbers}
      </p>
      <p>
        <strong>Longitud media de las palabras:</strong>{" "}
        {metrics.averageWordLength}
      </p>
    </div>
  );
};

export default MetricsDisplay;
