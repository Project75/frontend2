import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';
import { ci,CI }            from '../data/formData.model';
@Component({
  selector: 'app-ci',
  templateUrl: './ci.component.html',
  styleUrls: ['./ci.component.css']
})
export class CiComponent implements OnInit {

  title = 'Select Configuration Item?';
    workType: string;
    //workTypeNew: string;
    form: any;
    //
    radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  itemsList: ci[] = CI;

    constructor(private router: Router, private formDataService: FormDataService) {
    }
    getSelecteditem(){
        this.radioSel = CI.find(Item => Item.value === this.radioSelected);
        this.radioSelectedString = JSON.stringify(this.radioSel);
      }
   
      onItemChange(item){
        this.getSelecteditem();
      }
    ngOnInit() {
        //this.workTypeNew = "";
        this.workType = this.formDataService.getCI();
        this.itemsList = CI;
        this.radioSelected = this.itemsList[0].value;
        this.getSelecteditem();
        console.log('CI feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setCI(this.radioSelected);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the personal page
            this.router.navigate(['/work']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/work2']);
        }
    }

}
