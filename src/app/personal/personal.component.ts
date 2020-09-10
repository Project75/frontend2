import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Personal }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-personal'
    ,templateUrl: './personal.component.html'
})

export class PersonalComponent implements OnInit {
    title = 'Enter Issue details';
    personal: Personal;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        this.personal.userid = "test user";
        this.personal.location = "None";
        console.log('Personal feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setPersonal(this.personal);
        this.formDataService.setCI(this.personal.description);
        //this.formDataService.setAG(this.personal.description);
        this.formDataService.setUrgency(this.personal.description);
        console.log("setAG called");
        
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work',this.personal.description]);
        }
    }
}
