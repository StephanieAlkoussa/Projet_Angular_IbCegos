export interface Employe {
    id: number;
    name: string;
    picture: string; 
    roles : Array<string>; //tableau de role
    birthDate: Date;
    level: number;
    seniority: number; 
}