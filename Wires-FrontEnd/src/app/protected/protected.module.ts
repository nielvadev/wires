import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { AllmessagesComponent } from './pages/allmessages/allmessages.component';
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MymessagesComponent } from './pages/mymessages/mymessages.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateComponent,
    MymessagesComponent,
    AllmessagesComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
