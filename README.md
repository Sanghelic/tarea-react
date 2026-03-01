# Tarea 1 – Optimización de Renderizado en React

## Objetivo de la práctica

El objetivo de esta práctica fue comprender cómo funciona el proceso de renderizado en React y cómo optimizarlo para evitar renderizados innecesarios utilizando herramientas como el Virtual DOM, `React.memo` y el uso correcto de `map()` con `key`.

---

## ¿Qué es el Virtual DOM?

El Virtual DOM es una representación ligera del DOM real que React mantiene en memoria.

Cuando ocurre un cambio en el estado de un componente, React:

1. Actualiza el Virtual DOM.
2. Compara el nuevo Virtual DOM con el anterior (proceso llamado *reconciliation*).
3. Solo aplica los cambios necesarios al DOM real.

Esto permite mejorar el rendimiento ya que evita manipular todo el DOM cada vez que hay un cambio.

---

## ¿Cuándo ocurre un re-render?

Un componente en React se vuelve a renderizar cuando:

- Cambia su estado (`useState`)
- Cambian sus props
- Su componente padre se vuelve a renderizar

En esta práctica se demostró que, sin optimización, los componentes hijos también se renderizan cuando el padre cambia, aunque no hayan recibido nuevas props.
