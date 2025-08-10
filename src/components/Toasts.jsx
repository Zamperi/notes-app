import { useErrors } from "./ErrorProvider";
import './Toasts.css';

export function Toasts() {
  const { errors } = useErrors();
  return (
    <div className="toast-container" role="region" aria-label="Virheilmoitukset">
      {errors.map(err => (
        <div key={err.id} className="toast--error" role="alert">
          {err.message}
        </div>
      ))}
    </div>
  );
}
