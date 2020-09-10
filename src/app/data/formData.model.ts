export class AsgGrp{
    id?:number;
    value:string;
    prob?:string;
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
    id?:number;
    value:string;
    text?:string;
}
export const CI: ci[] = [
    {
        id:1,
        value:'Default Category'
     }
    ]

export const URG: Urgency[] = [
    {
        id:1,
        value:'3 - Moderate'
     }]
export const IMP: Impact[] = [
    {
        id:1,
        value:'No Impact'
     }]
export const ASG: AsgGrp[] = [
    
     {
         id:0,
         value:'Service Desk',
         prob:'60.0'
      }

]
export class FormData {
    
    userid: string = '';
    location : string = '';
    description: string = '';
    asgGrp: AsgGrp[] ;
    cat: string = '';
    priority: string = '';
    oldAG:string = '';
    oldCat:string ='';
    oldPrio:string='';
    createDate:string='';

    clear() {
        
        this.userid = '';
        this.location = '';
        this.description = '';
        //this.asgGrp = null;
        this.cat = '';
        this.priority = '';       
        this.oldAG = '';
        this.oldCat = '';
        this.oldPrio = '';
        this.createDate = '';    
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