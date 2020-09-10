import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';
import { Urgency,URG,IMP,Impact }            from '../data/formData.model';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work2.component.html'
})


export class Work2Component implements OnInit {
    
    title = 'Predicted Priority';
    urgency: string = '3 - Moderate';
    impact: string;
    form: any;
    //
    radioSel:any;
    radioSelected:string;
    radioSelectedString:string;
    itemsList: Impact[] = IMP;
    radioSel2:any;
    radioSelected2:string;
    radioSelectedString2:string;
    itemsList2: Urgency[] = URG;

    constructor(private router: Router, private formDataService: FormDataService) {
    }
    getSelecteditem(){
        this.radioSel = IMP.find(Item => Item.value === this.radioSelected);
        this.radioSelectedString = JSON.stringify(this.radioSel);
        this.radioSel2 = URG.find(Item => Item.value === this.radioSelected2);
        this.radioSelectedString2 = JSON.stringify(this.radioSel2);
      }
   
      onItemChange(item){
        this.getSelecteditem();
      }
    ngOnInit() {       

        console.log('Work2 feature loaded1!',this.urgency);

        this.urgency = this.formDataService.getUrgency();
        console.log('Work2 feature loaded2!',this.urgency);
        if (!this.urgency){
            this.urgency = "3 - Moderate";
        } 
        console.log('Work2 feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        
        this.formDataService.setUrgency(this.radioSelected2);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/ci']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/result']);
        }
    }
}