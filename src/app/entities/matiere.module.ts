export class MatiereModule {
    constructor(public id: number,
                public titre: string,
                public duree: number,
                public objectif: string,
                public prerequis: string,
                public contenu: string,
                public listeDuMateriel: string) {
    }
}