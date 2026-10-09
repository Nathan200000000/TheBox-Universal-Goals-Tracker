# TheBox — Your 2026 Momentum System

> Turn this year into a series of small, visible wins.

TheBox is a local-first goal workspace for turning ambitious plans into measurable missions, steady check-ins, and momentum you can see.

## Current features

- React + TypeScript + Vite foundation
- Universal goal types: financial, debt, savings, education, fitness, learning, career, personal, and custom
- Dynamic goal creation with specialized debt fields
- Persistent browser storage with backwards-compatible normalization
- Progress updates with timestamped history and notes
- Automatic completion detection and completion dates
- Goal health: on track, at risk, behind, complete
- Required pace and projected finish calculations
- 25/50/75/100% milestones with calendar-aware dates
- In-app calendar for deadlines and milestones
- Goal detail workspace
- Specialized debt payoff panel with APR, minimum payment, monthly payment, and payoff estimate
- Wins / completed-goals history
- Goal search and active/completed filtering
- Keyboard quick switcher with `⌘K` / `Ctrl+K` navigation
- 2026 Momentum dashboard with a daily focus mission and one-click check-in
- XP, builder levels, and activity streaks earned from real progress updates
- Seven-day consistency chart and a field signal for goals that need attention
- JSON backup export and validated import with replacement confirmation
- Responsive dark UI with a fresh, green-accented dashboard

## Development

```bash
npm install
npm run dev
npm run build
```

The application stores goal data in browser `localStorage`, so it works without an account or backend. Data stays in that browser; use the backup export/import to move it between devices.