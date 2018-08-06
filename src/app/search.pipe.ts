import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attorneyFilter'
})

export class SearchPipe implements PipeTransform {

      areaInselectedValues(filterArea: String, selectedValues) {
          for(let  i=0; i< selectedValues.length;i++){
              var value = selectedValues[i];
              if(value.toLowerCase().includes(filterArea.toLowerCase())) {
                  return true;
              }
          }
          return false;
      }

      transform(value: any, filterName: string, filterCity: string, filterState: string, filterArea: string){
        if (value && value.length){
            return value.filter(item =>{
            	let name = item.firstName+' '+item.lastName
                if (filterName && name.toLowerCase().indexOf(filterName.toLowerCase()) === -1){
                    return false;
                }
                if (filterCity && item.city.toLowerCase().indexOf(filterCity.toLowerCase()) === -1){
                    return false;
                }
                if (filterState && item.state.toLowerCase().indexOf(filterState.toLowerCase()) === -1){
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