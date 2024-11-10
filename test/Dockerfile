from mcr.microsoft.com/playwright:latest
run npm install -g pnpm
workdir /app
copy . .
run pnpm install --frozen-lockfile
cmd ["pnpm", "run", "test"]
