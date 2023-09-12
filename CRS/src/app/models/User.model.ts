import { Role } from "./Role.model";

export interface User {
    userName:string;
	fullName:string;
	userpassword:string;
	role:Role;
}