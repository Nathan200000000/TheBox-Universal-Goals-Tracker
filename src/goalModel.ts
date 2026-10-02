export type GoalType = 'financial' | 'debt' | 'savings' | 'education' | 'fitness' | 'learning' | 'career' | 'personal' | 'custom';
export type GoalStatus = 'active' | 'completed' | 'paused';
export interface GoalTypeDefinition { id: GoalType; label: string; icon: string; description: string; unitPlaceholder: string; }
export const GOAL_TYPES: GoalTypeDefinition[] = [
  { id:'financial',label:'Financial',icon:'💰',description:'Build wealth or reach a money target.',unitPlaceholder:'$' },
  { id:'debt',label:'Debt payoff',icon:'💳',description:'Reduce a balance until it reaches zero.',unitPlaceholder:'$' },
  { id:'savings',label:'Savings',icon:'💵',description:'Save toward a specific amount.',unitPlaceholder:'$' },
  { id:'education',label:'Education',icon:'🎓',description:'Finish a course, degree, or academic milestone.',unitPlaceholder:'credits' },
  { id:'fitness',label:'Fitness',icon:'🏃',description:'Track distance, workouts, reps, or another metric.',unitPlaceholder:'miles' },
  { id:'learning',label:'Learning',icon:'📚',description:'Build a skill through measurable progress.',unitPlaceholder:'lessons' },
  { id:'career',label:'Career',icon:'💼',description:'Track applications, projects, promotions, or career milestones.',unitPlaceholder:'applications' },
  { id:'personal',label:'Personal',icon:'🏠',description:'A meaningful goal that does not fit another category.',unitPlaceholder:'steps' },
  { id:'custom',label:'Custom',icon:'🔢',description:'Define your own target and unit.',unitPlaceholder:'units' },
];
export interface DebtDetails { originalBalance:number; interestRate:number; minimumPayment:number; monthlyPayment:number; dueDay?:number; }\nexport interface GoalMilestone { id:string; title:string; percent:number; reachedAt?:string;
  targetDate?:string; }\nexport interface GoalHistory { id:string; goalId:string; previous:number; current:number; change:number; note:string; createdAt:string; }\nexport interface Goal { id:string; name:string; type:GoalType; description:string; startDate:string; targetDate:string; target:number; current:number; unit:string; context:string; notes:string; status:GoalStatus;
  completedAt?:string; createdAt:string; history:GoalHistory[]; milestones:GoalMilestone[]; debt?:DebtDetails; }
export const calculateProgress = (goal:Pick<Goal,'current'|'target'>) => goal.target <= 0 ? 0 : Math.min(100,Math.max(0,(goal.current/goal.target)*100));

export type GoalHealth = 'complete' | 'on-track' | 'at-risk' | 'behind';
export function getGoalHealth(goal:Pick<Goal,'current'|'target'|'startDate'|'targetDate'|'status'>):GoalHealth{if(goal.status==='completed'||goal.current>=goal.target)return 'complete';const start=new Date(goal.startDate).getTime(),end=new Date(goal.targetDate).getTime(),now=Date.now();const elapsed=Math.max(0,Math.min(1,(now-start)/Math.max(1,end-start)));const expected=elapsed*goal.target;const ratio=expected<=0?1:goal.current/expected;if(ratio>=0.9)return 'on-track';if(ratio>=0.6)return 'at-risk';return 'behind';}
export function getProjectedDate(goal:Pick<Goal,'current'|'target'|'startDate'|'status'>):string|null{if(goal.status==='completed'||goal.current>=goal.target)return null;const elapsedDays=Math.max(1,(Date.now()-new Date(goal.startDate).getTime())/86400000);const pace=goal.current/elapsedDays;if(pace<=0)return null;const remaining=goal.target-goal.current;const date=new Date(Date.now()+remaining/pace*86400000);return date.toISOString().slice(0,10);}
export function getRequiredDailyPace(goal:Pick<Goal,'current'|'target'|'targetDate'|'status'>):number|null{if(goal.status==='completed'||goal.current>=goal.target)return null;const days=Math.max(1,(new Date(goal.targetDate).getTime()-Date.now())/86400000);return (goal.target-goal.current)/days;}

export function getMilestoneDate(goal:Pick<Goal,'startDate'|'targetDate'>,percent:number):string{const start=new Date(goal.startDate).getTime();const end=new Date(goal.targetDate).getTime();const date=new Date(start+(end-start)*(percent/100));return date.toISOString().slice(0,10);}
