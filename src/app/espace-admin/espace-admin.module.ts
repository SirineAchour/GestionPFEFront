import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { PfeComponent } from './pfe/pfe.component';
import { SoutenancesComponent } from './soutenances/soutenances.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { ItemComponent } from '../components/accordion/item/item.component';
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ROUTING } from '../app.routing';
import { AddSessionComponent } from './add-session/add-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { AppModule } from '../app.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { ModifySoutenanceComponent } from './modify-soutenance/modify-soutenance.component';
import { RegisterComponent } from './register/register.component';
import { AdminsComponent } from './admins/admins.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule,  DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { ModifySessionComponent } from './modify-session/modify-session.component';
import { ViewPfeDetailsComponent } from '../components/view-pfe-details/view-pfe-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SoutenanceFiliereComponent } from './soutenances/soutenance-filiere/soutenance-filiere.component';
import { ImportComponent } from './import/import.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImportModalComponent } from './import/import-modal/import-modal.component';

@NgModule({
  declarations: [
    EtudiantsComponent,
    EnseignantsComponent,
    PfeComponent,
    SoutenancesComponent,
    AccordionComponent,
    ItemComponent,
    SearchbarComponent,
    AddSessionComponent,
    ModalEditComponent,
    ModifySoutenanceComponent,
    RegisterComponent,
    AdminsComponent,
    ModifySessionComponent,
    ViewPfeDetailsComponent,
    SoutenanceFiliereComponent,
    ImportComponent,
    ImportModalComponent,

  ],
  exports: [AccordionComponent, ItemComponent, SearchbarComponent, ViewPfeDetailsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    DropDownListModule,
    MultiSelectModule,
    DateTimePickerModule,
    NgxPaginationModule,
    DatePickerModule,
    NgxDropzoneModule,
  ],
  providers: []
})
export class EspaceAdminModule { }
