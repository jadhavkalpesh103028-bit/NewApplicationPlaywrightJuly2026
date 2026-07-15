import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class Dataprovider {
    static getdatafromJson(filepath: string) {

        const data: string = JSON.parse(fs.readFileSync("filepath", 'utf8'));
        return data;
    }
    static getdatafromCsv(filepath: string) {
        const data = parse(fs.readFileSync(filepath), { columns: true, skip_empty_lines: true });
        return data;
    }
}