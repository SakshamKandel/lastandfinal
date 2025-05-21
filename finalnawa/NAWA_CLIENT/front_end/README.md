# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Frontend Setup & Deployment

## Environment Variables
Create a `.env` file in this directory with the following:

```
VITE_API_URL=https://your-backend-url.onrender.com
VITE_APP_ENV=production
VITE_APP_NAME=Nawa Tara English School
```

- `VITE_API_URL` must match your deployed backend URL.

## Local Development
- Run `npm install`
- Start with `npm run dev`

## Render Deployment
- Set the above environment variables in the Render dashboard for this service.
- Use the following build/start commands:
  - Build: `npm run build`
  - Publish directory: `dist`
