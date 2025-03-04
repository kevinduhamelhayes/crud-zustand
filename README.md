# 🛒 CRUD Zustand Shopping Cart

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/Zustand-4.x-orange.svg)](https://github.com/pmndrs/zustand)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)](https://vitejs.dev/)

Una aplicación de carrito de compras moderna implementada con React, TypeScript y Zustand para gestión de estado. Este proyecto demuestra cómo implementar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando Zustand como gestor de estado global.

![Screenshot de la aplicación](https://via.placeholder.com/800x450.png?text=Screenshot+CRUD+Zustand+Cart)

## 🌟 Características

- **Gestión de estado con Zustand** - Implementación simple y potente de estado global
- **Autenticación de usuarios** - Sistema de login simulado para demostrar autenticación
- **Operaciones CRUD completas:**
  - Añadir productos al carrito
  - Ver los productos en el carrito
  - Actualizar la cantidad de productos
  - Eliminar productos del carrito
  - Vaciar el carrito completamente
- **Interfaz de usuario moderna y responsiva**
- **Escrito completamente en TypeScript**

## 🚀 Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio:**

```bash
git clone https://github.com/kevinduhamelhayes/crud-zustand.git
cd crud-zustand
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Inicia el servidor de desarrollo:**

```bash
npm run dev
```

4. **Abre tu navegador:**
Visita `http://localhost:5173` (o el puerto indicado en la consola) para ver la aplicación en funcionamiento.

## 🧰 Uso

### 1. Autenticación

Para probar la aplicación, primero necesitas iniciar sesión:

- Utiliza cualquier email y contraseña (es una simulación de autenticación)
- Presiona "Iniciar Sesión"

### 2. Gestión del carrito

Una vez autenticado, puedes:

- **Añadir productos:** Haz clic en "Agregar al carrito" debajo de un producto
- **Cambiar cantidad:** Usa los botones + y - para aumentar o disminuir la cantidad
- **Eliminar productos:** Presiona el botón "Eliminar" junto a un producto
- **Vaciar carrito:** Usa el botón "Vaciar carrito" en la parte superior del carrito

### 3. Cierre de sesión

- Presiona "Cerrar Sesión" en la barra superior para volver a la pantalla de login

## 🧠 Arquitectura

El proyecto está estructurado siguiendo las mejores prácticas:

```
/src
  /components           # Componentes React
    Cart.tsx            # Componente del carrito
    Login.tsx           # Componente de login
    Products.tsx        # Componente de productos
  /store                # Stores de Zustand
    authStore.ts        # Estado de autenticación
    cartStore.ts        # Estado del carrito
  App.tsx               # Componente principal
  main.tsx              # Punto de entrada
```

### Stores Zustand

#### Auth Store

```typescript
// Estado de autenticación
const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}))
```

#### Cart Store

```typescript
// Estado del carrito
export const useCartStore = create<CartState>()((set) => ({
  items: [],
  total: 0,
  
  addItem: (product) => set((state) => {
    // Lógica para añadir al carrito
  }),

  removeItem: (productId) => set((state) => {
    // Lógica para eliminar del carrito
  }),

  updateQuantity: (productId, quantity) => set((state) => {
    // Lógica para actualizar cantidad
  }),

  clearCart: () => set({ items: [], total: 0 }),
}))
```

## 🔧 Tecnologías

- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Zustand**: Gestión de estado minimalista
- **Vite**: Herramienta de desarrollo frontend rápida

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un Fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Haz push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

Desarrollado con ❤️ por [Kevin Duhamel Hayes](https://github.com/kevinduhamelhayes)
