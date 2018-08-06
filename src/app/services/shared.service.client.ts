import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
   user: any;
   attorneyRegs: boolean;
   practiceAreas: any[] = [];
   maxAreaError: boolean;
   item: any = {
   	name: "",
   	city: "",
   	state:"",
   	area:""
   };

}