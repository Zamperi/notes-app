// ErrorProvider.jsx
import { useState, useCallback, useContext } from "react";
import ErrorContext from "./ErrorContext";

export function ErrorProvider({ children }) {
  const [errors, setErrors] = useState([]);

  const addError = useCallback((message) => {
    const id = crypto.randomUUID();
    setErrors(prev => [{ id, message }, ...prev]);
    // Autopoisto 5s
    setTimeout(() => {
      setErrors(prev => prev.filter(e => e.id !== id));
    }, 5000);
  }, []);

  const removeError = useCallback((id) => {
    setErrors(prev => prev.filter(e => e.id !== id));
  }, []);

  return (
    <ErrorContext.Provider value={{ errors, addError, removeError }}>
      {children}
    </ErrorContext.Provider>
  );
}

export function useErrors() {
  const ctx = useContext(ErrorContext);
  if (!ctx) throw new Error("useErrors must be used within <ErrorProvider>");
  return ctx;
}
