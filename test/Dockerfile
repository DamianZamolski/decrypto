from node:lts

run npm install -g pnpm
workdir /app
copy . .

run pnpm install --frozen-lockfile
run pnpm run install-playwright

cmd [ "pnpm", "run", "test" ]
