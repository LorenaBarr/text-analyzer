import React, { useState } from "react";
import MetricsDisplay from "./MetricsDisplay";

// Define las funciones necesarias aquí
const wordCount = (text: string): number => {
  return text.trim().split(/\s+/).filter(Boolean).length;
};

const charCount = (text: string): number => {
  return text.length;
};

const charCountWithoutSpaces = (text: string): number => {
  return text.replace(/[^\w]/g, "").length;
};

const numberCount = (text: string): number => {
  const numbers = text.match(/\d+/g);
  return numbers ? numbers.length : 0;
};

const sumNumbers = (text: string): number => {
  const numbers = text.match(/\d+/g);
  return numbers ? numbers.map(Number).reduce((a, b) => a + b, 0) : 0;
};

const averageWordLength = (text: string): string => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const totalLength = words.reduce((acc, word) => acc + word.length, 0);
  return words.length > 0 ? (totalLength / words.length).toFixed(2) : "0";
};

const MainContainer: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [metrics, setMetrics] = useState<{
    wordCount: number;
    charCount: number;
    charCountWithoutSpaces: number;
    numberCount: number;
    sumNumbers: number;
    averageWordLength: string;
  } | null>(null);

  const handleProcessText = (newText: string) => {
    const wordCountResult = wordCount(newText);
    const charCountResult = charCount(newText);
    const charCountWithoutSpacesResult = charCountWithoutSpaces(newText);
    const numberCountResult = numberCount(newText);
    const sumNumbersResult = sumNumbers(newText);
    const averageWordLengthResult = averageWordLength(newText);

    setMetrics({
      wordCount: wordCountResult,
      charCount: charCountResult,
      charCountWithoutSpaces: charCountWithoutSpacesResult,
      numberCount: numberCountResult,
      sumNumbers: sumNumbersResult,
      averageWordLength: averageWordLengthResult,
    });
  };

  const handleClearText = () => {
    setText("");
    setMetrics(null); // Limpiar las métricas también
  };

  return (
    <div className="main-container">
      <h2>Text Analyzer</h2>
      <p>
        Utiliza este analizador para obtener estadísticas de tu texto en tiempo
        real. Cuenta palabras, caracteres (con y sin espacios), números y su
        suma total. También calcula la longitud media de las palabras. Ingresa
        tu texto para comenzar.
      </p>
      <textarea
        className="text-input"
        placeholder="Introduzca texto aquí..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          handleProcessText(e.target.value); // Procesar el texto en tiempo real
        }}
      />
      <button className="clear-button" onClick={handleClearText}>
        Limpiar texto
      </button>

      {metrics && <MetricsDisplay metrics={metrics} />}
    </div>
  );
};

export default MainContainer;
