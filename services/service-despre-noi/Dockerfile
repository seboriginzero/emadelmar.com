# Base image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# We copy the local build output
COPY --chown=nextjs:nodejs .next/standalone ./
COPY --chown=nextjs:nodejs .next/static ./services/service-despre-noi/.next/static
COPY --chown=nextjs:nodejs public ./services/service-despre-noi/public

USER nextjs

EXPOSE 3033

ENV PORT=3033
ENV HOSTNAME="0.0.0.0"

CMD ["node", "services/service-despre-noi/server.js"]
