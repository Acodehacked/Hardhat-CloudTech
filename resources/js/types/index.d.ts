import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    cc: string;
    phone: string;
    permissions: string[];
    roles: string[];
}
export interface Company{
    id: number;
    name: string;
    code: string;
    email: string;
    phone: string;
    address: string;
    city?: string;
    logo: string;
    website?: string;
    since: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
export interface Project{
    id:number;
    name: string;
    code: string;
    Address: string;
    location?: string;
    start_date: Date;
    client_email: string;
    description: string;
    company: Company;
    status: 'Pending'|'In Progress'|'Completed'|'On Hold'|'Cancelled';
    images: string[]
}
export interface Member{
    id: number;
    type: 'Client' | 'EPC' | 'Contractor' | 'Subcontractor';
    reg_id: string;
    avatar: string;
    adress: string;
    user: User;
    company: Company;
    date: Date;
    created_at: Date;
    updated_at: Date;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user:{
            data: User;
        }
    };
    ziggy: Config & { location: string };
};
