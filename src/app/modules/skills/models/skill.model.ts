export class Skill {
    private _id: number;
    private _title: string;
    private _level: number;

    constructor(id: number, title: string, level: number) {
        this.id = id;
        this.title = title;
        this.level = level;
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
    get level(): number {
        return this._level;
    }
    set level(level: number) {
        this._level = level;
    }
}
