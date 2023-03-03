export interface Employee {
    id: string;
    picture: string;
    name: string;
    job: string;
    salary: number;
    status: boolean;
    date:  Date;
    beneficiary: Beneficiary[]
  }

  export interface Beneficiary {
    id: string;
    name: string;
    relationship: string;
    birth: Date;
    gender: string;
}