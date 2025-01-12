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
export interface Company {
    id: number;
    name: string;
    code: string;
    email: string;
    phone: string;
    address: string;
    city?: string;
    image: string;
    website?: string;
    since: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}
interface Image {
    id: number;                 // Unique identifier for the image
    url: string;                // URL of the original image
    thumbnails: {               // JSON object containing thumbnail URLs
        small: string;            // URL of the small version of the image
        medium: string;           // URL of the medium version of the image
    };
    created_at: string;         // Timestamp for when the image was created
    updated_at: string;         // Timestamp for when the image was last updated
}
export interface Project {
    id: number;
    name: string;
    code: string;
    Address: string;
    location?: string;
    start_date: Date;
    client_email: string;
    description: string;
    company: Company;
    status: 'Pending' | 'In Progress' | 'Completed' | 'On Hold' | 'Cancelled';
    images: string[]
}
export interface Member {
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
        user: {
            data: User;
        }
    };
    flash: {
        image: {
            data: Image | null
        }
        success: string | null;
        error: string | null;
    };
    ziggy: Config & { location: string };
};
