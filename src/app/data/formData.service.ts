import { Injectable }                        from '@angular/core';

import { FormData, Personal, AsgGrp }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isWorkForm2Valid: boolean = false;
   // private isAddressFormValid: boolean = false;
//private workflowService: WorkflowService
    constructor() { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            
            userid: this.formData.userid,
            location: this.formData.location,
            description: this.formData.description
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.userid = data.userid;
        this.formData.location = data.location;
        this.formData.description = data.description;
        // Validate Personal Step in Workflow
       // this.workflowService.validateStep(STEPS.personal);
    }

    getWork() : string {
        // Return the work type
        return this.formData.asgGrp;
    }
    
    setCI(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.ci = data;
        // Validate Work Step in Workflow
       // this.workflowService.validateStep(STEPS.work);
    }
    getCI() : string {
        // Return the work type
        return this.formData.ci;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.asgGrp = data;
        // Validate Work Step in Workflow
       // this.workflowService.validateStep(STEPS.work);
    }

    getUrgency() : string {
        // Return the work type
        return this.formData.urgency;
    }
    
    setUrgency(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkForm2Valid = true;
        this.formData.urgency = data;
        // Validate Work Step in Workflow
        //this.workflowService.validateStep(STEPS.work);
    }
    getImpact() : string {
        // Return the work type
        return this.formData.impact;
    }
    
    setImpact(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkForm2Valid = true;
        this.formData.impact = data;
        // Validate Work Step in Workflow
        //this.workflowService.validateStep(STEPS.work);
    }

    

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        //this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid =  false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isWorkFormValid ;
    }
}