// @angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { EmailTemplateComponent } from './components/email-template/email-template.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-search/update/:id', component: UserEditComponent },

  { path: 'email-template', component: EmailTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
