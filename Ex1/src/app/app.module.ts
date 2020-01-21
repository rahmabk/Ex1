import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    PresentationComponent,
    ServiceComponent,
    ContactComponent,
    LoginComponent,
 RegistreComponent,
 FormulaireComponent,
 RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
