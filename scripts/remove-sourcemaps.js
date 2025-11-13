import { rmSync } from 'fs';
import { join } from 'path';
import glob from 'glob';

// Eliminar todos los archivos .map bajo la carpeta dist (producción)
const dist = join(process.cwd(), 'dist');
const patterns = [`${dist}/**/*.map`, `${dist}/**/*.js.map`];

patterns.forEach(pat => {
  const files = glob.sync(pat, { nodir: true });
  files.forEach(f => {
    try {
      rmSync(f);
      console.log(`[remove-sourcemaps] eliminado: ${f}`);
    } catch (err) {
      console.warn(`[remove-sourcemaps] no se pudo eliminar: ${f}`, err);
    }
  });
});

console.log('[remove-sourcemaps] finalizado.');
