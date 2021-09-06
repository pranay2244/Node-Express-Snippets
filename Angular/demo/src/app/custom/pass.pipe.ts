import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"pass"})
export class PassPipe implements PipeTransform{
    
    transform(value: any) {
        if(value>5)
            return "Pass";
        return "Fail";
    }
}

