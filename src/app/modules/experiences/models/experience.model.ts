export class Experience {
    public id: number;
    public title: string;
    public subtitle: string;
    public description: string;
    public startDate: Date;
    public endDate: Date;

    constructor(id: number, title: string, subtitle: string, description: string, startDate: Date, endDate: Date) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
