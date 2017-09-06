export class Recipe{
    public name:string;
    public description:string;
    public imagePath:string;

    constructor(name:string, descrip:string, imagepath:string){
        this.name= name;
        this.description= descrip;
        this.imagePath= imagepath;
    }

}