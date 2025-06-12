export class Pet {
    public id: Number | undefined;
    public name: string;
    public description: string;
    public animalType: number;
    public birthDate: Date;
    public sex: boolean;

    /**
     *
     */
    constructor(Id: Number,
        name: string, description: string, animalType: number,
        birthDate: Date, sex: boolean) {
        this.id = Id;
        this.name = name;
        this.description = description;
        this.animalType = animalType;
        this.birthDate = birthDate;
        this.sex = sex;
    }


}