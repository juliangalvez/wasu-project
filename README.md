# WASU POS

WASU POS es un sistema de punto de venta moderno, modular y escalable. Está pensado para locales gastronómicos y comercios físicos que requieren sincronización local, soporte online/offline, kioscos de autoservicio y una plataforma backoffice para gestión integral.

## 🧠 Arquitectura

El proyecto sigue una arquitectura de microservicios basada en un monorepo con `pnpm workspaces`. Está compuesto por:

- **Backend (NestJS + Apollo GraphQL)**
  - Autenticación
  - Inventario
  - Pedidos
  - Pagos
  - Reportes
  - Fidelidad
  - Notificaciones (Subscriptions)
  - Online Ordering
  - Sincronización local

- **Frontend Web**
  - **Backoffice** (Next.js + shadcn/ui + Apollo Client)
  - **POS Desktop App** (Electron + Vite + React + tRPC + SQLite local)

- **Infraestructura**
  - Docker Compose para desarrollo
  - PostgreSQL, Redis/NATS
  - CI/CD con GitHub Actions

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/wasu-pos.git
cd wasu-pos
```

2. Instala dependencias:

```bash
pnpm install
```

3. Levanta el entorno local:

```bash
docker-compose up --build
```

> ⚠️ Asegurate de tener Docker y `pnpm` instalados.

## 🧪 Comandos útiles

```bash
# Backend
pnpm --filter backend start:dev

# Servicio específico (ej: pedidos)
pnpm --filter orders-service start:dev

# Backoffice
pnpm --filter backoffice dev

# POS App
pnpm --filter pos-ui dev
```

## 🔐 Autenticación

Durante desarrollo, se aceptan usuarios mock para facilitar el flujo. Más adelante se integrará autenticación real con JWT y RBAC por rol/tipo de cuenta.

## 📦 Tecnologías principales

- NestJS, Apollo Server, GraphQL Subscriptions
- React, Next.js, shadcn/ui, Lucide, Zustand
- Electron + tRPC + SQLite
- Drizzle ORM
- Docker, Redis/NATS, PostgreSQL
- Prometheus, Grafana (WIP)

## 🎯 Estado actual

✅ Infraestructura  
✅ Servicios base (auth, inventario, pedidos)  
✅ Backoffice en desarrollo  
🔜 POS UI  
🔜 Kiosco de autoservicio  
🔜 Modo cocina  

## 📝 Contribuciones

Por ahora el proyecto está en fase temprana. Si querés participar, escribime o creá una issue con tus ideas o bugs detectados.

## 📄 Licencia

MIT

---

_Proyecto creado y mantenido por [@tuusuario](https://github.com/tuusuario)_
