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
      transform(value: any, filterName: string, filterCity: string, filterState: string, filterArea: string, filter5Star: string, filter4Star: string, filter3Star: string, filter2Star: string, filter1Star: string){
        if (value && value.length){
            return value.filter(item =>{
            	let name = item.firstName+' '+item.lastName+' '+item.office
                if (filterName && (!name || name.toLowerCase().indexOf(filterName.toLowerCase()) === -1)){
                    return false;
                }
                if (filterCity && (!item.city || item.city.toLowerCase().indexOf(filterCity.toLowerCase()) === -1)){
                    return false;
                }
                if (filterState && (!item.state || item.state.toLowerCase().indexOf(filterState.toLowerCase()) === -1)){
                    return false;
                }
                if (filterArea && !this.areaInselectedValues(filterArea, item.selectedValues)) {
                    return false;
                }
                ///////////////
                if (filter5Star && (item.overallRating !== 5 && item.overallRating !== 0)) {
                    return false;
                }
                if (filter4Star && (item.overallRating !== 4 && item.overallRating !== 0)) {
                    return false;
                }
                if (filter3Star && (item.overallRating !== 3 && item.overallRating !== 0)) {
                    return false;
                }
                if (filter2Star && (item.overallRating !== 2 && item.overallRating !== 0)) {
                    return false;
                }
                if (filter1Star && (item.overallRating !== 1 && item.overallRating !== 0)) {
                    return false;
                }
                ///////////////
                return true;
           })
        }
        else{    
            return value;
        }
    }

}