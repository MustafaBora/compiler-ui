import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import { AppComponent } from './app.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { Top3Component } from './components/top3/top3.component';
import { SubmitComponent } from './components/submit/submit.component';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    Top3Component,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AccordionModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    AppRoutingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    HttpClientModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
