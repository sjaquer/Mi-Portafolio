import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Skills from '../Skills';

describe('Skills component (sin colapsado)', () => {
  test('al filtrar por query, solo se muestran categorías con coincidencias y active se limpia si no existe', async () => {
    render(<Skills />);
    const user = userEvent.setup();

    // Escribir una query que coincida con una habilidad concreta
    const input = screen.getByPlaceholderText(/Buscar tecnología.../i);
    await user.type(input, 'TypeScript');

    // Debería mostrarse la categoría Desarrollo y la habilidad
    const skillButton = await screen.findByRole('button', { name: /TypeScript/i });
    await user.click(skillButton);
    expect(document.querySelector('[aria-pressed="true"]')).not.toBeNull();

    // Escribir una query que no permita que la habilidad activa exista
    await user.clear(input);
    await user.type(input, 'NoExisteXYZ');

    // active debe limpiarse
    expect(document.querySelector('[aria-pressed="true"]')).toBeNull();
  }, 10000);
});
