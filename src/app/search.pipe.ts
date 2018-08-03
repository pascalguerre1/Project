import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attorneyFilter'
})

export class SearchPipe implements PipeTransform {

 transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.lastName.toLocaleLowerCase().includes(args)) || (val.firstName.toLocaleLowerCase().includes(args)) || (val.city.toLocaleLowerCase().includes(args)) || (val.state.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}