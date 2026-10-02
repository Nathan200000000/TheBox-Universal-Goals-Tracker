import { useState } from 'react';
import type { Goal } from './goalModel';

export function MovePlanner2({onClose,onCreate}:{onClose:()=>void;onCreate:(fn:(goals:Goal[])=>Goal[])=>void}){
 const [destination,setDestination]=useState('California');
 const [date,setDate]=useState('');
 const [notes,setNotes]=useState('');
 const save=()=>{if(!date)return;const now=new Date().toISOString();const goal:Goal={id:crypto.randomUUID(),name:'Move To California',type:'relocation',description:notes,startDate:now.slice(0,10),targetDate:date,target:2000,current:0,unit:'$',context:destination,notes:'',status:'active',createdAt:now,history:[],milestones:[],relocation:{destination,moveMethod:'',housingPlan:'',estimatedRent:0,movingCost:0,travelCost:0,depositCost:0,tasks:[]}};onCreate(gs=>[goal,...gs]);onClose();};
 return <div className="modal-backdrop"><div className="modal"><h2>Move planner</h2><label>Destination<input value={destination} onChange={e=>setDestination(e.target.value)}/></label><label>Target move date<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label><label>Notes<textarea value={notes} onChange={e=>setNotes(e.target.value)}/></label><button onClick={onClose}>Cancel</button><button onClick={save}>Put in TheBox</button></div></div>;
}