import { useState } from 'react';
import { X, MapPin, Check, Plus } from 'lucide-react';
import type { Goal } from './goalModel';

export function RelocationPlanner({ onClose, onCreate }: { onClose: () => void; onCreate: (update: (goals: Goal[]) => Goal[]) => void }) {
  const [name,setName]=useState('Move To California');
  const [destination,setDestination]=useState('California');
  const [targetDate,setTargetDate]=useState('');
  const [moveMethod,setMoveMethod]=useState('');
  const [housing,setHousing]=useState('');
  const [rent,setRent]=useState('');
  const [moving,setMoving]=useState('');
  const [travel,setTravel]=useState('');
  const [deposit,setDeposit]=useState('');
  const [description,setDescription]=useState('');
  const [tasks,setTasks]=useState(['Research cities and neighborhoods','Set moving budget','Build $2,000 move fund','Choose a move method','Research housing','Price transportation','Declutter and sell or donate','Gather packing supplies','Set a target move date','Handle address and utilities','Pack essentials','Final walkthrough']);
  const [done,setDone]=useState<string[]>([]);
  const toggle=(task:string)=>setDone(v=>v.includes(task)?v.filter(x=>x!==task):[...v,task]);
  const create=()=>{if(!targetDate||!destination.trim())return;const now=new Date().toISOString();const goal:Goal={id:crypto.randomUUID(),name:name.trim()||'Move To California',type:'relocation',description:description.trim(),startDate:now.slice(0,10),targetDate,target:2000,current:0,unit:'$',context:destination.trim(),notes:'',status:'active',createdAt:now,history:[],milestones:[25,50,75,100].map(percent=>({id:crypto.randomUUID(),title:percent+'% milestone',percent,targetDate:targetDate})),relocation:{destination:destination.trim(),moveMethod,housingPlan:housing,estimatedRent:Number(rent)||0,movingCost:Number(moving)||0,travelCost:Number(travel)||0,depositCost:Number(deposit)||0,tasks:tasks.map(title=>({id:crypto.randomUUID(),title,done:done.includes(title)}))}};onCreate(goals=>[goal,...goals]);onClose();};
  return <div className="modal-backdrop"><div className="modal relocation-modal"><div className="modal-head"><div><p className="eyebrow">MOVE / RELOCATION</p><h2>Build your move plan.</h2><p className="calendar-sub">A dedicated space for the money, logistics, housing, and checklist behind the move.</p></div><button className="icon-button" onClick={onClose}><X size={18}/></button></div>
    <div className="relocation-hero"><MapPin size={18}/><div><strong>Save $2,000 to get there.</strong><span>Update the goal later from your normal progress screen.</span></div></div>
    <div className="form-grid">
      <label>Plan name<input value={name} onChange={e=>setName(e.target.value)}/></label><label>Destination<input value={destination} onChange={e=>setDestination(e.target.value)} placeholder="State or city"/></label>
      <label>Target move date<input type="date" min={new Date().toISOString().slice(0,10)} value={targetDate} onChange={e=>setTargetDate(e.target.value)}/></label>
      <label>Move method<select value={moveMethod} onChange={e=>setMoveMethod(e.target.value)}><option value="">Choose later</option><option>Drive my own car</option><option>Rental truck</option><option>Moving container</option><option>Professional movers</option><option>Sell most things and travel light</option></select></label>
      <label>Housing plan<input value={housing} onChange={e=>setHousing(e.target.value)} placeholder="Apartment, roommate, family..."/></label><label>Estimated monthly rent<input type="number" min="0" value={rent} onChange={e=>setRent(e.target.value)} placeholder="0"/></label>
      <label>Moving / shipping<input type="number" min="0" value={moving} onChange={e=>setMoving(e.target.value)} placeholder="0"/></label><label>Travel<input type="number" min="0" value={travel} onChange={e=>setTravel(e.target.value)} placeholder="0"/></label>
      <label>Deposit / setup<input type="number" min="0" value={deposit} onChange={e=>setDeposit(e.target.value)} placeholder="0"/></label>
      <label className="full">Notes<textarea rows={3} value={description} onChange={e=>setDescription(e.target.value)} placeholder="Why are you moving? What needs to be true before you go?"/></label>
    </div>
    <div className="relocation-checklist"><div className="relocation-checklist-head"><strong>Move checklist</strong><span>{done.length}/{tasks.length}</span></div>{tasks.map(task=><button key={task} className={done.includes(task)?'relocation-check done':'relocation-check'} onClick={()=>toggle(task)}><span>{done.includes(task)?<Check size={13}/>:''}</span>{task}</button>)}</div>
    <div className="modal-actions"><button className="secondary-button" onClick={onClose}>Cancel</button><button className="primary-button" onClick={create} disabled={!targetDate||!destination.trim()}><Plus size={17}/> Put plan in TheBox</button></div>
  </div></div>;
}