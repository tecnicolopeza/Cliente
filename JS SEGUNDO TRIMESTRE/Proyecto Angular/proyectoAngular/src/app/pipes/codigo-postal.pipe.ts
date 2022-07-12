import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigoPostal'
})
export class CodigoPostalPipe implements PipeTransform {

  transform(lugar: string, ...args: any[]): number {
    
    let codigoPostal = 0;

    if(lugar == 'Utrera') {
      codigoPostal = 41710;
    }


    return codigoPostal;

  }

}
