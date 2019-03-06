

import { FormDataService }     from '../data/formData.service';
import { Urgency,URG }            from '../data/formData.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urgency',
  templateUrl: './urgency.component.html',
  styleUrls: ['./urgency.component.css']
})
export class UrgencyComponent implements OnInit {
  urgency: string;
  radioSel2:any;
  radioSelected2:string;
  radioSelectedString2:string;
  itemsList2: Urgency[] = URG;
  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    this.urgency = this.formDataService.getUrgency();
    this.itemsList2 = URG;
    this.radioSelected2 = this.itemsList2[0].value;
    this.getSelecteditem();
    console.log('Urgency feature loaded!');
  }
  getSelecteditem(){
   
    this.radioSel2 = URG.find(Item => Item.value === this.radioSelected2);
    this.radioSelectedString2 = JSON.stringify(this.radioSel2);
  }

  onItemChange(item){
    this.getSelecteditem();
  }
}
