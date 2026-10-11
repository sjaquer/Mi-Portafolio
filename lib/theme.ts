export type ThemePreference = "light" | "dark" | "system";
export const THEME_STORAGE_KEY = "theme";

/**
 * Se ejecuta en <head> antes del primer pintado: aplica la preferencia
 * guardada o la del sistema, sin parpadeo (guía "preventing flash" de Next).
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){}})()`;
