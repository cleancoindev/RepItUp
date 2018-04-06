import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { KvkIdentityWidgetComponent } from './kvk-identity-widget/kvk-identity-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    KvkIdentityWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
