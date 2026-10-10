# --- ETAPA 1: Build-ul aplicației Next.js ---
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Instalăm dependențele din folderul painealuidumnezeu
COPY painealuidumnezeu/package*.json ./
RUN npm ci

# Copiem codul și compilăm (output: 'standalone' din next.config.mjs)
COPY painealuidumnezeu/ ./
RUN npm run build

# --- ETAPA 2: Serverul de Producție ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3001 HOSTNAME=0.0.0.0

# Doar serverul standalone, fișierele statice și imaginile
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3001
CMD ["node", "server.js"]
