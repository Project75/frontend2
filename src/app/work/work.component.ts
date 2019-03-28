import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';
import { AsgGrp,ASG }            from '../data/formData.model';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work.component.html'
})


export class WorkComponent implements OnInit {
    
    title = 'Predicted Assignment group';
    workType: string;
    workTypeNew: string;
    form: any;
    //
    radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: AsgGrp[] = ASG;

    constructor(private router: Router, private formDataService: FormDataService) {
    }
    getSelecteditem(){
        this.radioSel = ASG.find(Item => Item.value === this.radioSelected);
        this.radioSelectedString = JSON.stringify(this.radioSel);
      }
   
      onItemChange(item){
        this.getSelecteditem();
      }
    ngOnInit() {
        this.workTypeNew = "";
        this.workType = this.formDataService.getWork();
        this.itemsList = ASG;
        this.radioSelected = this.itemsList[0].value;
        this.getSelecteditem();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setWork(this.radioSelected);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/personal']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/ci']);
        }
    }
}