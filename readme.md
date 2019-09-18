# Nueba ortografía

Una [aplicación](https://victorze.github.io/nueba-ortografia/) que simplifica la ortografía del idioma castellano.

Inspirado en la [charla TED](https://www.youtube.com/watch?v=VpkneIesi60) que dio la Dra. Karina Galperin.

## Instalación

```
npm install nueba-ortografia
```

## Uso

```javascript
const { simplifySpelling } = require('nueba-ortografia')

console.log(simplifySpelling('zanahoria'))
// -> sanaoria

console.log(simplifySpelling('villa hermosa'))
// -> billa ermosa

console.log(simplifySpelling('Argentina'))
// -> Arjentina
```

License
---
MIT
