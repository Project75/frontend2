export class AsgGrp{
    id:number;
    value:string;
    text?:string;
}

export class Impact{
    id:number;
    value:string;
    text?:string;
}

export class Urgency{
    id:number;
    value:string;
    text?:string;
}

export class ci{
    id:number;
    value:string;
    text?:string;
}
export const CI: ci[] = [
    {
        id:1,
        value:'Desktop'
     },
     {
         id:2,
         value:'Printer'
      },
      {
          id:3,
          value:'Software'
       }
    ]

export const URG: Urgency[] = [
    {
        id:1,
        value:'No Urgency'
     }]
export const IMP: Impact[] = [
    {
        id:1,
        value:'No Impact'
     }]
export const ASG: AsgGrp[] = [
    {
        id:1,
        value:'End User Services',
        text:'Recommended 68%'
     },
     {
         id:2,
         value:'Helpdesk'
      },
      {
          id:3,
          value:'Telecom'
       }

]
export class FormData {
    
    userid: string = '';
    location : string = '';
    description: string = '';
    asgGrp: string = '';
    ci: string = '';
    urgency: string = '';
    impact: string = '';
    oldAG:string = '';
    oldCI:string ='';
    oldUR:string='';
    oldIMP:string='';

    clear() {
        
        this.userid = '';
        this.location = '';
        this.description = '';
        this.asgGrp = '';
        this.ci = '';
        this.urgency = '';
        this.impact = '';
        this.oldAG = '';
        this.oldCI = '';
        this.oldUR = '';
        this.oldIMP = '';    
    }
}

export class Personal {
    
    userid: string = '';
    location : string = '';
    description: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}