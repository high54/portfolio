export class Skill {
    public id: number;
    public title: string;
    public level: number;
    public description: string;

    constructor(id: number, title: string, level: number, description: string) {
        this.id = id;
        this.title = title;
        this.level = level;
        this.description = description;
    }
}
