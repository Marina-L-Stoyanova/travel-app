import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { IgxInputGroupModule, IgxCheckboxModule, IgxButtonModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    SetNewPasswordComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule
  ]
})
export class HomeModule {
}
