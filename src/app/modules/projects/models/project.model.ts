export class Project {
    private _id: number;
    private _title: string;
    private _description: string;
    private _img: string;
    private _link: string;

    constructor(id: number, title: string, description: string, img: string, link: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
        this.link = link;
    }

    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }
    get img(): string {
        return this._img;
    }
    set img(img: string) {
        this._img = img;
    }
    get link(): string {
        return this._link;
    }
    set link(link: string) {
        this._link = link;
    }
}
