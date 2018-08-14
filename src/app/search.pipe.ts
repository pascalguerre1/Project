import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attorneyFilter'
})

export class SearchPipe implements PipeTransform {

      areaInselectedValues(filterArea: String, selectedValues) {
        if(!selectedValues) {
            return false;
          }
          for(let  i=0; i< selectedValues.length;i++){
              var value = selectedValues[i];
              if (!value) {
                continue;
              }
              if(value.toLowerCase().includes(filterArea.toLowerCase())) {
                  return true;
              }
          }
          return false;
        }

      transform(value: any, filterName: string, filterCity: string, filterState: string, filterArea: string){
        if (value && value.length){
            return value.filter(item =>{
            	let name = item.firstName+' '+item.lastName+' '+item.office
                if (filterName && (!name || name.toLowerCase().indexOf(filterName.toLowerCase()) === -1)){
                    return false;
                }
                if (filterCity &&(!item.city || item.city.toLowerCase().indexOf(filterCity.toLowerCase()) === -1)){
                    return false;
                }
                if (filterState && (!item.state || item.state.toLowerCase().indexOf(filterState.toLowerCase()) === -1)){
                    return false;
                }
                if (filterArea && !this.areaInselectedValues(filterArea, item.selectedValues)) {
                    return false;
                }
                return true;
           })
        }
        else{    
            return value;
        }
    }

}