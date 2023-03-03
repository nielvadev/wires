import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { AllmessagesComponent } from './pages/allmessages/allmessages.component';
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MymessagesComponent } from './pages/mymessages/mymessages.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateComponent,
    MymessagesComponent,
    AllmessagesComponent,
  ],
  imports: [CommonModule, ProtectedRoutingModule, SharedModule, ReactiveFormsModule],
})
export class ProtectedModule {}
