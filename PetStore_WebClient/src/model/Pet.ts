export class Pet {
    public id!: Number;
    public name: string | undefined;
    public description: string | undefined;
    public animalType: number | undefined;
    public birthDate!: Date;
    public birthDateString!: string;
    public sexString!: string;
    public sex: boolean | undefined;
    public price: number = 0;

    /**
     *
     */
    constructor() {
        
    }


}