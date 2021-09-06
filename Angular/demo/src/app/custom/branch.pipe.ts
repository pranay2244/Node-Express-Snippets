import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:"branch"})
export class BranchPipe implements PipeTransform{
    
    transform(value: any) {
        if(value[7]=='5')
            return "CSE";
        else if(value[7]=='3')
            return 'MECH';
        return "Invalid";
    }
}

