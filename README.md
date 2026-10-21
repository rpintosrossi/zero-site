# ZERO Site

Sitio comercial de ZERO. No es el producto: es la web para venderlo.

```bash
npm install
npm run dev
```

Abre http://localhost:3003

## Subir por FTP (Hostinger)

```bash
npm run build
```

Eso genera la carpeta `out/`. En FileZilla (o el administrador de archivos):

1. Entrá a `public_html` (o la carpeta del dominio).
2. Subí **el contenido** de `out/`, no la carpeta `out` entera.
3. Tiene que quedar `public_html/index.html` a la vista, junto con `_next`, `videos`, `brand` y `stores`.

No subas `src`, `node_modules` ni el resto del proyecto.

## Marca

Paleta, wordmark y símbolo según el manual. Tipografía Inter + IBM Plex Mono (datos).
