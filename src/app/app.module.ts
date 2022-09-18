import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';


const routes = [
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
  // { path: 'register', loadChildren: () => import('app/public/register/register.module').then(m => m.RegisterModule) },
  // { path: 'user', loadChildren: () => import('app/employer/employer.module').then(m => m.EmployerModule), canLoad: [EmployerGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  // { path: 'agent', loadChildren: () => import('app/agent/agent.module').then(m => m.AgentModule) },

  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatIconModule, MatDialogModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
