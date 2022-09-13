import { User } from "./User";
export class Report {
  id!:number;
 name!: string;
 postDate!:Date;
 state!:boolean;
 description!:string;
 postedBy!: User
 }

