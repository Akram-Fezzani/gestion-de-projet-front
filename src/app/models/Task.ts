import { Project } from "./project";


 export class Task {
  id!:number;
 advancement!:number;
 manager!:number;
 name!: string;
 startDate!:Date;
 endDate!:Date;
 estimatedEndDate!:Date;
 maxCost!:number;
 state!:boolean;
 description!:string;
 Project!: Project;

 }

