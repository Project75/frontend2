import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { Work2Component }      from './work2/work2.component';
//import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UrgencyComponent } from './urgency/urgency.component';
import { CiComponent } from './ci/ci.component';
import { HttpClientModule } from '@angular/common/http';
import { Ci1Component } from './ci1/ci1.component';
@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,HttpClientModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, Work2Component, ResultComponent, MainNavComponent, UrgencyComponent, CiComponent, Ci1Component ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}