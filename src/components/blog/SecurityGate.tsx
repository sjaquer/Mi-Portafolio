import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { SECURITY_STYLE } from './blogStyles';
import { PREGUNTA_SECRETA, RESPUESTA_CORRECTA, AUTH_KEY } from './constants';

interface SecurityGateProps {
  onSuccess: () => void;
}

const SecurityGate: React.FC<SecurityGateProps> = ({ onSuccess }) => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedAnswer = answer.trim().toLowerCase();
    const normalizedCorrect = RESPUESTA_CORRECTA.trim().toLowerCase();
    if (normalizedAnswer === normalizedCorrect) {
      localStorage.setItem(AUTH_KEY, 'true');
      onSuccess();
      setError(false);
    } else {
      setError(true);
      const inputEl = document.getElementById('security-input');
      if (inputEl) {
        inputEl.classList.add('shake');
        setTimeout(() => inputEl.classList.remove('shake'), 500);
      }
    }
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="security-wrapper">
      <SEO noindex={true} title="Archivo - Verificación" />
      <style>{SECURITY_STYLE}</style>
      <motion.div
        className="security-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="security-accent" />
        <h2 className="security-title">{PREGUNTA_SECRETA}</h2>
        <form onSubmit={handleSubmit} className="security-form">
          <input
            id="security-input"
            type="text"
            className="security-input"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Escribe tu respuesta..."
            autoFocus
            autoComplete="off"
          />
          {error && (
            <motion.span
              className="error-text"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Respuesta incorrecta. Acceso denegado.
            </motion.span>
          )}
          <button type="submit" className="security-btn">Verificar</button>
        </form>
        <a href="/" onClick={handleGoBack} className="back-link">← Volver al sitio principal</a>
      </motion.div>
    </div>
  );
};

export default SecurityGate;
