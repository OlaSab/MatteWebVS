import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MultiAddSubComponent } from './multiAddSub/multiAddSub.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { SettingsComponent } from './settings/settings.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  
   { path: 'settingsRouterLink',   component: SettingsComponent },
   { path: 'multiplicationLink',      component: MultiplicationComponent },
   { path: 'divisionLink',   component: DivisionComponent },
   { path: 'subtractionLink',      component: SubtractionComponent },
   { path: 'additionLink',      component: AdditionComponent },
   { path: '**', component: MultiplicationComponent }
  , { path: '', redirectTo: '/multiplicationLink',    pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    AppComponent,
    MultiplicationComponent,
    AdditionComponent,
    DivisionComponent,
    SubtractionComponent,
    SettingsComponent,
    MultiAddSubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
     ,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

