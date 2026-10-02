import { Target, Plus, ArrowUpRight, CircleCheck, Clock3, Flame } from 'lucide-react';

const sampleGoals = [
  { name: 'Pay Off Capital One', type: 'Debt payoff', progress: 71, current: '$4,250', target: '$6,000', days: 456, status: 'On track' },
  { name: 'Build Emergency Fund', type: 'Financial', progress: 64, current: '$3,200', target: '$5,000', days: 90, status: 'On track' },
  { name: 'Learn Python', type: 'Learning', progress: 64, current: '64', target: '100', days: 151, status: 'On track' },
  { name: 'Run 100 Miles', type: 'Fitness', progress: 42, current: '42', target: '100', days: 59, status: 'At risk' },
];

export function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Target size={19} strokeWidth={2.5} /></div>
          <div>
            <div className="brand-name">TheBox</div>
            <div className="brand-subtitle">Universal Goals</div>
          </div>
        </div>

        <nav className="nav">
          <a className="nav-item active" href="#dashboard">Dashboard</a>
          <a className="nav-item" href="#goals">All goals <span>4</span></a>
          <a className="nav-item" href="#calendar">Calendar</a>
          <a className="nav-item" href="#wins">Wins</a>
        </nav>

        <div className="sidebar-footer">
          <div className="box-tip">
            <span className="tip-label">THE BOX TIP</span>
            <p>Small progress still counts. TheBox is built to help you see it.</p>
          </div>
          <div className="profile">
            <div className="avatar">N</div>
            <div><strong>My goals</strong><span>Personal workspace</span></div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">YOUR PROGRESS</p>
            <h1>Make progress. <em>Keep going.</em></h1>
          </div>
          <button className="primary-button"><Plus size={18} /> New goal</button>
        </header>

        <section className="stats">
          <Stat icon={<Target />} label="Active goals" value="4" />
          <Stat icon={<Flame />} label="On track" value="3" />
          <Stat icon={<CircleCheck />} label="Completed" value="0" />
          <Stat icon={<Clock3 />} label="Next deadline" value="59d" detail="Run 100 Miles" />
        </section>

        <section className="content-grid">
          <div className="goals-panel">
            <div className="section-heading">
              <div><h2>Your goals</h2><p>Everything you're working toward.</p></div>
              <a href="#goals">View all <ArrowUpRight size={15} /></a>
            </div>
            <div className="goal-list">
              {sampleGoals.map((goal) => (
                <article className="goal-card" key={goal.name}>
                  <div className="goal-top">
                    <div>
                      <div className="goal-type">{goal.type}</div>
                      <h3>{goal.name}</h3>
                    </div>
                    <span className={`status ${goal.status === 'At risk' ? 'risk' : ''}`}>{goal.status}</span>
                  </div>
                  <div className="progress-row"><strong>{goal.progress}%</strong><span>{goal.current} / {goal.target}</span></div>
                  <div className="progress-track"><div style={{ width: `${goal.progress}%` }} /></div>
                  <div className="goal-footer"><span>{goal.days} days remaining</span><span>Update progress →</span></div>
                </article>
              ))}
            </div>
          </div>

          <aside className="momentum">
            <div className="section-heading"><div><h2>Momentum</h2><p>Your recent movement.</p></div></div>
            <div className="momentum-number">+12<span>%</span></div>
            <p className="momentum-copy">overall progress this month</p>
            <div className="activity"><div className="activity-dot" /><div><strong>Emergency Fund</strong><span>Added $300 · 2 days ago</span></div></div>
            <div className="activity"><div className="activity-dot" /><div><strong>Learn Python</strong><span>Completed 8 lessons · 4 days ago</span></div></div>
            <div className="activity"><div className="activity-dot" /><div><strong>Run 100 Miles</strong><span>Logged 5.2 miles · 6 days ago</span></div></div>
          </aside>
        </section>
      </main>
    </div>
  );
}

function Stat({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string; detail?: string }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div><span>{label}</span><strong>{value}</strong>{detail && <small>{detail}</small>}</div>
    </div>
  );
}