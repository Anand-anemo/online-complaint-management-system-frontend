import { User } from "./User.model";


export interface Complaint {

        category: string;
		heading: string;
		details:string;
		address:string;
		pincode:string;
		fullname:string;
		complaintStatus:string;
		engusername:string;
		customer:User[];
		
}