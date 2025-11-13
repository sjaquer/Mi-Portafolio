import React from 'react';

/**
 * Dark-only ThemeProvider
 * - Forces the dark classes on the root element so Tailwind `dark:` utilities work.
 * - Minimal: no toggle, no localStorage, no light-theme handling.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    const el = document.documentElement;
    if (!el) return;
    el.classList.add('theme-dark');
    el.classList.add('dark'); // ensure Tailwind dark: utilities are active
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
