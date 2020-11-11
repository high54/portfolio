export class Degree {
    private _id: number;
    private _title: string;
    private _date: Date;
    private _isObtained: boolean;
    private _description: string;
    private _report: string;
    constructor(id: number, title: string, date: Date, isObtained: boolean, description: string, report?: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.isObtained = isObtained;
        this.description = description;
        this.report = report ? report : null;
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
    get isObtained(): boolean {
        return this._isObtained;
    }
    set isObtained(isObtained: boolean) {
        this._isObtained = isObtained;
    }
    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }
    get report(): string {
        return this._report;
    }
    set report(report: string) {
        this._report = report;
    }
}