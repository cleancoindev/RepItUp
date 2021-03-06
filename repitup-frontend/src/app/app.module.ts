import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { CivilComponent } from './civil/civil.component';
import { CivilIdeaComponent } from './civil/civil-idea.component';
import { CivilVoteFormComponent } from './civil/civil-vote-form.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { KvkIdentityWidgetComponent } from './kvk-identity-widget/kvk-identity-widget.component';
import { ActivityDialogComponent } from './activity-dialog/activity-dialog.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ideaServiceProvider } from './idea.service.provider';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { MainModule } from "./main/main.module";
import { EntrepreneurModule } from "./entrepreneur/entrepreneur.module";
import { NavbarComponent } from './navbar/navbar.component';
import { ContractsService } from './contracts.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MunicipalityComponent,
    CivilComponent,
    CivilIdeaComponent,
    CivilVoteFormComponent,
    EntrepreneurComponent,
    KvkIdentityWidgetComponent,
    ActivityDialogComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MainModule,
    EntrepreneurModule
    
  ],
  providers: [
    AuthService,
    ideaServiceProvider,
    ContractsService 
  ],
  entryComponents: [ActivityDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
