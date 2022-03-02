import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'general'
})
export class GeneralPipe implements PipeTransform {

  transform(value: unknown, args?:any[]): any {
    let response:string = '';
    args?.map((element)=>{
      if(value === element.id){
        response = element.name;
      }
    });
    return response;
  }

}
