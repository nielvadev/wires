import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllmessagesComponent } from './pages/allmessages/allmessages.component';
import { CreateComponent } from './pages/create/create.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MymessagesComponent } from './pages/mymessages/mymessages.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'all', component: AllmessagesComponent },
      { path: 'create', component: CreateComponent },
      { path: 'me', component: MymessagesComponent },
      { path: '**', redirectTo: 'all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
