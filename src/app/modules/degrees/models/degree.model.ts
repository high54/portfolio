export class Degree {
    public id: number;
    public title: string;
    public date: Date;
    public isObtained: boolean;
    public description: string;
    public report: string | null;
    constructor(id: number, title: string, date: Date, isObtained: boolean, description: string, report?: string) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.isObtained = isObtained;
        this.description = description;
        this.report = report ? report : null;
    }

}
