import { ComputerService } from './services/computer.service';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SingleFormationComponent } from './formations/single-formation/single-formation.component';
import { ManageFormationsComponent } from './formations/manage-formations/manage-formations.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { ComputersListComponent } from './computers/computers-list/computers-list.component';
import { SingleComputerComponent } from './computers/single-computer/single-computer.component';
import { CreateComputerComponent } from './computers/create-computer/create-computer.component';
import { EditComputerComponent } from './computers/edit-computer/edit-computer.component';
import { SearchComputersComponent } from './computers/search-computers/search-computers.component';
import { FormateurComponent } from './formateurs/formateur/formateur.component';
import { EditFormateurComponent } from './formateurs/formateur/edit-formateur/edit-formateur.component';
import { SingleInternComponent } from './stagiaires/single-intern/single-intern.component';
import { AdressesComponent } from './adresses/adresses.component';
import { SingleAdresseComponent } from './adresses/single-adresse/single-adresse.component';
import { ContactComponent } from './contact/contact.component';
import { AdminsListComponent } from './admins/admins-list/admins-list.component';
import { SingleAdminComponent } from './admins/single-admin/single-admin.component';
import { CreateAdminComponent } from './admins/create-admin/create-admin.component';
import { SingleProjectorComponent } from './projectors/single-projector/single-projector.component';
import { SearchProjectorsComponent } from './projectors/search-projectors/search-projectors.component';
import { EditProjectorComponent } from './projectors/edit-projector/edit-projector.component';
import { CreateProjectorComponent } from './projectors/create-projector/create-projector.component';
import { ProjectorsListComponent } from './projectors/projectors-list/projectors-list.component';

const appRoutes: Routes =
    [{ path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'user', component: UserComponent },
    { path: 'formateur', component: FormateurComponent },
    { path: 'edit-formateur', component: EditFormateurComponent },
    { path: 'not-found', component: FourOFourComponent },
    { path: 'ordinateurs', component: ComputersListComponent },
    { path: 'ordinateurs/create', component: CreateComputerComponent },
    { path: 'ordinateurs/edit', component: EditComputerComponent },
    { path: 'ordinateurs/search', component: SearchComputersComponent },
    { path: 'admins', component: AdminsListComponent },
    { path: 'admins/create', component: CreateAdminComponent },
    { path: 'projectors', component: ProjectorsListComponent },
    { path: 'projectors/create', component: CreateProjectorComponent },
    { path: 'projectors/edit', component: EditProjectorComponent },
    { path: 'projectors/search', component: SearchProjectorsComponent },
    ];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UserComponent,
        SingleFormationComponent,
        ManageFormationsComponent,
        FourOFourComponent,
        ComputersListComponent,
        SingleComputerComponent,
        CreateComputerComponent,
        EditComputerComponent,
        SearchComputersComponent,
        FormateurComponent,
        EditFormateurComponent,
        SingleInternComponent,
        AdressesComponent,
        SingleAdresseComponent,
        ContactComponent,
        AdminsListComponent,
        SingleAdminComponent,
        CreateAdminComponent,
        SingleProjectorComponent,
        SearchProjectorsComponent,
        EditProjectorComponent,
        CreateProjectorComponent,
        ProjectorsListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
    ],
    providers: [LoginService, ComputerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
