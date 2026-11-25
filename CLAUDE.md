# Expense Splitter

React Native + Expo (Expo Router), TypeScript strict, Supabase (auth + Postgres + RLS).

## Rules
- I'm learning: explain non-obvious decisions briefly, and plan before writing code.
- Small commits, one feature at a time. Don't refactor unrelated files.
- Money is always integer cents. Never use floats for currency.
- Business logic lives in `lib/` as pure functions with Jest tests.
- No `any` types. Handle loading and error states on every screen.
- Never commit secrets. Use `.env` and `EXPO_PUBLIC_` only for the anon key.

## Commands
- `npx expo start` run, `npm test` tests, `npx tsc --noEmit` typecheck
