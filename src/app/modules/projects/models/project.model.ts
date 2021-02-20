export class Project {
    public id: number;
    public title: string;
    public description: string;
    public img: string;
    public link: string;

    constructor(id: number, title: string, description: string, img: string, link: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
        this.link = link;
    }
}
