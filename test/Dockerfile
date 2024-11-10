from mcr.microsoft.com/playwright:v1.48.2
run npm install -g pnpm
workdir /app
copy . .
run pnpm install --frozen-lockfile
cmd ["pnpm", "run", "test"]
