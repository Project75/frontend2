import { Injectable }                        from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; 
import { FormData, Personal, ci, AsgGrp }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isWorkForm2Valid: boolean = false;
    private predci:string = "Default";
    private urgency:string = "3 - Moderate"
    private asgGrpList:AsgGrp[];
   // private isAddressFormValid: boolean = false;
//private workflowService: WorkflowService
    constructor(private http: HttpClient) { 
    }
    getDescription():string {
        return this.formData.description;
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

    getWork() : any {
        // Return the work type
        return this.formData.asgGrp[0].value;
    }
    
    setCI(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.getPredictedCI(data)
        this.formData.cat = this.predci;
        // Validate Work Step in Workflow
       // this.workflowService.validateStep(STEPS.work);
    }
    
    getCI() : string {
        console.log("Categ:",this.formData.cat, this.predci)
        return this.predci;
    }
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        //this.formData.asgGrp = data;
        // Validate Work Step in Workflow
       // this.workflowService.validateStep(STEPS.work);
    }

    getUrgency() : string {
        // Return the work type
        return this.formData.priority;
    }
    
    setUrgency(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkForm2Valid = true;
        this.getPredictedUrgency(data)
        this.formData.priority = this.urgency;
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
    getPredictedCI(input) {
        this.http.post("http://localhost:5003/incidentassignment",
        {
        "description":  input
    
        })
        .subscribe(
        data  => {
            console.log("POST Request is successful ", data);
            this.predci =  data["Category"];
            //console.log("this.formData.ci ", this.predci);
        },
        error  => {
            console.log("Error", error);
        }
        );
    //return "test";
  }
  getPredictedUrgency(input) {
    this.http.post("http://localhost:5002/incidentassignment",
    {
    "description":  input

    })
    .subscribe(
    data  => {
        console.log("POST Request is successful ", data);
        this.urgency =  data["Priority"];
        //console.log("this.formData.ci ", this.predci);
    },
    error  => {
        console.log("Error", error);
    }
    );
//return "test";
}
  getPredictedAG(input) {
    return this.http.post("http://localhost:5001/incidentassignment",
    {
    "description":  input

    })
    .subscribe(
    data  => {
        console.log("POST Request is successful ", data);
        //const usersJson: any[] = Array.of(res.json());
        //this.asgGrpList =  data["AssignGrp"];
        this.formData.asgGrp = data["AssignGrp"];
        //console.log("this.asgGrpList ", );
    },
    error  => {
        console.log("Error", error);
    }
    
    );
//return "test";
    }

    getAG() : AsgGrp[] {
        //const usersJson: any[] =  JSON.parse(this.formData.asgGrp);
        console.log("getAG asgGrpList",this.formData.asgGrp)
        return this.formData.asgGrp;
    }
    setAG(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.getPredictedAG2(data).subscribe(
            (res: any) => {
                this.formData.asgGrp = res["AssignGrp"];
                console.log("setAG asgGrpList",this.formData.asgGrp);}
        );
        //this.formData.asgGrp = this.predci;
        // Validate Work Step in Workflow
       // this.workflowService.validateStep(STEPS.work);
    }
    getAsgGroup(input) {
      
      //return this.http.post('https://reqres.in/api/register',{"email": "sydney@fife","password": "pistol"})
      return this.http.post('http://localhost:5001/incidentassignment',{"description":"desktop issue"})
  }

  getPredictedAG2(input): Observable<AsgGrp[]> {
    return this.http.post<AsgGrp[]>('http://localhost:5001/incidentassignment',{"description":input})
    .pipe(
        tap(AsgGrp => console.log('fetched interface'))
        );
  }
}