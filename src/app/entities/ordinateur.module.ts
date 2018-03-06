export class OrdinateurModule {
    constructor(public id: number,
                public code: string,
                public cout: number,
                public processeur: string,
                public ram: number,
                public hdd: number,
                public dateAchat: Date) {
    }

}