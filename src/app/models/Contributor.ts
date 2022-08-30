
import {User} from "./User";
export class Contributor {
  contributorId!:number;
  name!:string;
  domain!: string;
  adress!:string;
  legalStatus!:string;
  email!:string;
  phone!:number;
  typeContributor!: string;
  userContributor!: User;
}
