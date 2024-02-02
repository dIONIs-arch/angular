import { Pipe, PipeTransform } from "@angular/core";
import moment, { Moment } from "moment";

@Pipe({
    name: 'moment',
    standalone: true,
    pure: false
})

export class MomentPipe implements PipeTransform {
    transform(m: moment.Moment | null, format: string = 'MMMM YYYY'): string {
        return m!.format(format)
    }

}