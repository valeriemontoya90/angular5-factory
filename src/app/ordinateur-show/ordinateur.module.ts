export class OrdinateurModule {
    constructor(public id: number,
                public code: string,
                public cout: number,
                public isDisponible: string,
                public processeur: string,
                public ram: number,
                public disqueDur: number,
                public anneeAchat: Date,
                public stagiaire: string)                                
                {
    }
}
