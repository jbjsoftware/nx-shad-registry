# Use Node.js LTS version
FROM node:22-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml for dependency installation
COPY package.json pnpm-lock.yaml ./
COPY libs/ui/package.json libs/ui/pnpm-lock.yaml ./libs/ui/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Stage 1: Build the registry components
FROM base AS registry-builder
WORKDIR /app/libs/ui
RUN pnpm run registry:build

# Stage 2: Build the docs site
FROM registry-builder AS docs-builder
WORKDIR /app
RUN pnpm exec nx build docs

# Final stage: Serve the docs
FROM node:22-alpine AS runner
WORKDIR /app

# Copy the built application (includes all dependencies)
COPY --from=docs-builder /app/apps/docs/.next/standalone ./
COPY --from=docs-builder /app/apps/docs/.next/static ./apps/docs/.next/static
COPY --from=docs-builder /app/apps/docs/public ./apps/docs/public

# Set working directory to the app location within standalone
WORKDIR /app/apps/docs

# Expose the port Next.js runs on
EXPOSE 3000

ENV HOSTNAME=0.0.0.0

# Start the application
CMD ["node", "server.js"]
