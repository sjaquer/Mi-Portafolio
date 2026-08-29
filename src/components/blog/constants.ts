export const PREGUNTA_SECRETA = "¿Cuál es mi color favorito?";
export const RESPUESTA_CORRECTA = "azul";
export const AUTH_KEY = "sjaquer_blog_auth_state";

export const goToHome = () => {
  window.history.pushState({}, '', '/');
  window.dispatchEvent(new Event('popstate'));
};
