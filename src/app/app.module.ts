// @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//routing
import { AppRoutingModule } from './app-routing.module';
// external
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// components
import { AppComponent } from './app.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';
import { EmailTemplReactiveComponent } from './components/email-templ-reactive/email-templ-reactive.component';
// services
import { UsersService } from './services/users.service';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CKEditorModule,
  ],
  declarations: [
    AppComponent,
    UserSearchComponent,
    UsersListComponent,
    UserEditComponent,
    EmailTemplateComponent,
    EmailTemplReactiveComponent,
    PreviewComponent,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
