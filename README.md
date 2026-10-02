# TheBox — Universal Goals Tracker

> Everything you want to accomplish. One place.

TheBox is a universal goal-tracking platform that turns ambitions into measurable progress, milestones, timelines, and wins.

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
- JSON data export
- Responsive dark UI

## Development

```bash
npm install
npm run dev
npm run build
```

The application currently stores goal data in localStorage, keeping the prototype simple and usable without a backend.