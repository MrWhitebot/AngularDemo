import { RouterModule, Routes } from '@angular/router';

import {AboutComponent, ItemComponent, PortafolioComponent} from './components/index.paginas';

const app_routes: Routes = [
  {path: '', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];
export const app_routing = RouterModule.forRoot(app_routes);
