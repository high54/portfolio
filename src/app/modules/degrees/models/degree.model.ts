export class Degree {
    private _id: number;
    private _title: string;
    private _date: Date;

    constructor(id: number, title: string, date: Date) {
        this.id = id;
        this.title = title;
        this.date = date;
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
    get date(): Date {
        return this._date;
    }
    set date(date: Date) {
        this._date = date;
    }
}