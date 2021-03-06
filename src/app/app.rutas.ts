import { RouterModule, Routes } from "@angular/router";

import {
  AboutComponent,
  ItemComponent,
  PortafolioComponent,
  BuscadorComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  {path: "home", component: PortafolioComponent},
  {path: "about", component: AboutComponent},
  {path: "item/:id", component: ItemComponent},
  {path: "buscar/:termino", component: BuscadorComponent},
  {path: "**", pathMatch: "full", redirectTo: ""}
];
export const app_routing = RouterModule.forRoot(app_routes);
