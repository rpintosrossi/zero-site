# ZERO Site

Sitio comercial de ZERO. No es el producto: es la web para venderlo.

```bash
npm install
npm run dev
```

Abre http://localhost:3003

## Hostinger

En hPanel: **Websites → Add Website → Node.js Apps → Import Git Repository**.

Conectá GitHub, elegí este repo y usá:

| Campo | Valor |
| --- | --- |
| Node.js | 20 |
| Install | `npm ci` |
| Build | `npm run build` |
| Start | `npm run start -- -p $PORT` |

Cada push a `main` vuelve a desplegar.

## Marca

Paleta, wordmark y símbolo según el manual. Tipografía Inter + IBM Plex Mono (datos).
