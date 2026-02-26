# Base image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# We copy the local build output
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./services/service-acasa/.next/static
COPY --chown=nextjs:nodejs public ./services/service-acasa/public

USER nextjs

EXPOSE 3032

ENV PORT=3032
ENV HOSTNAME="0.0.0.0"

CMD ["node", "services/service-acasa/server.js"]
