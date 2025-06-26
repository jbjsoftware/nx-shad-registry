FROM node:22
WORKDIR /app
# Install pnpm CLI
RUN npm install -g pnpm@latest
# Install Nx CLI globally with pnpm
RUN pnpm add -g nx@latest
COPY package.json pnpm-lock.yaml /app/
RUN pnpm install
# Ensure global bin is in PATH
ENV PATH="/usr/local/bin:${PATH}"
# Fix permissions for non-root user
RUN chown -R node:node /usr/local/share/npm-global