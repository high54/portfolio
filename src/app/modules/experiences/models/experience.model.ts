export class Experience {
    private _id: number;
    private _title: string;
    private _subtitle: string;
    private _description: string;
    private _startDate: Date;
    private _endDate: Date;

    constructor(id: number, title: string, subtitle: string, description: string, startDate: Date, endDate: Date) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
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
    get subtitle(): string {
        return this._subtitle;
    }
    set subtitle(subtitle: string) {
        this._subtitle = subtitle;
    }
    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }
    get startDate(): Date {
        return this._startDate;
    }
    set startDate(startDate: Date) {
        this._startDate = startDate;
    }
    get endDate(): Date {
        return this._endDate;
    }
    set endDate(endDate: Date) {
        this._endDate = endDate;
    }
}
