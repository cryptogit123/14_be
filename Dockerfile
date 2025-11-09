# containerize the project
FROM oven/bun:1

WORKDIR /app

COPY ./package.json ./bun.lock ./

RUN bun install

# Copy Prisma schema and generate client
COPY ./prisma ./prisma
RUN bunx prisma generate

# Copy application files
COPY ./index.ts ./tsconfig.json ./

EXPOSE 3000

CMD [ "bun", "run", "index.ts" ]