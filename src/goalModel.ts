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
export interface GoalHistory { id:string; goalId:string; previous:number; current:number; change:number; note:string; createdAt:string; }\nexport interface Goal { id:string; name:string; type:GoalType; description:string; startDate:string; targetDate:string; target:number; current:number; unit:string; context:string; notes:string; status:GoalStatus; createdAt:string; history:GoalHistory[]; }
export const calculateProgress = (goal:Pick<Goal,'current'|'target'>) => goal.target <= 0 ? 0 : Math.min(100,Math.max(0,(goal.current/goal.target)*100));
