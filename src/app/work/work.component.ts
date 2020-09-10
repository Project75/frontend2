import { Component, OnInit }   from '@angular/core';
import { ActivatedRoute, Router  }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';
import { AsgGrp,ASG }            from '../data/formData.model';

@Component ({
    selector:     'mt-wizard-work'
    ,templateUrl: './work.component.html'
})


export class WorkComponent implements OnInit {
    sub: any;
    title = 'Predicted Assignment group';
    workType: string;
    workTypeNew: string;
    form: any;
    //
    radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: AsgGrp[] ;

    constructor(private route: ActivatedRoute ,private router: Router, private formDataService: FormDataService) {
    }
    getSelecteditem(){
       // this.radioSel = this.itemsList.find(Item => Item.value === this.radioSelected);
       // this.radioSelectedString = JSON.stringify(this.radioSel);
      }
   
      onItemChange(item){
        this.getSelecteditem();
      }
    ngOnInit() {
        this.sub = this.route.snapshot.params.id;
        console.log("param -",this.sub);
        this.workTypeNew = "";
        //this.workType = this.formDataService.getWork();
        this.formDataService.getPredictedAG2(this.sub).subscribe(
            (res: any) => {
                this.itemsList = res["AssignGrp"];
                console.log("itemlist is ",this.itemsList);}
        );
        //this.itemsList = this.formDataService.getFormData().asgGrp;
        console.log("itemsList=",this.itemsList);
        //this.radioSelected = this.itemsList[0].value;
        //this.getSelecteditem();
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
            this.router.navigate(['/inputpage']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/ci']);
        }
    }
}