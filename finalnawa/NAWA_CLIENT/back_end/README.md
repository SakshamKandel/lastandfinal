# Backend Setup & Deployment

## Environment Variables
Create a `.env` file in this directory with the following:

```
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=https://your-frontend-url.onrender.com
NODE_ENV=production
PORT=8000
```

- `FRONTEND_URL` must match your deployed frontend URL for CORS to work.

## Local Development
- Run `npm install`
- Start with `npm run dev`

## Render Deployment
- Set the above environment variables in the Render dashboard for this service.
- Use the following build/start commands:
  - Build: `npm run build` (if needed)
  - Start: `npm start` 