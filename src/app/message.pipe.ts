import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageFilter'
})

export class MessagePipe implements PipeTransform {

      transform(value: any, filterName: string){
        if (value && value.length){
            return value.filter(item1=>{
                if (filterName && (!item1.name || item1.name.toLowerCase().indexOf(filterName.toLowerCase()) === -1)){
                    return false;
                }
                return true;
           })
        }
        else {    
            return value;
        }
    }

}