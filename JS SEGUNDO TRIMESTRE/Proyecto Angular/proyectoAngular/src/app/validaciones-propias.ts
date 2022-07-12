import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class ValidacionesPropias {

    
    static codPostal(control: AbstractControl): ValidationErrors | null {
        let post: string = control.value;
        let patron = /^\d{5}$/;
        if (patron.test(post) || post == "") {
            return null;
        } else {
            return { codPos: true }
        }
    }


}

