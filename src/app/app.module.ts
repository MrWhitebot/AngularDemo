import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import {APP_BASE_HREF} from "@angular/common";

// Rutas
import { app_routing } from "./app.rutas";

// Servicios
import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";

// Componentes
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PortafolioComponent } from "./components/portafolio/portafolio.component";
import { AboutComponent } from "./components/about/about.component";
import { ItemComponent } from "./components/item/item.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing

  ],
  providers: [
    InformacionService,
    ProductosService,
    {provide: APP_BASE_HREF, useValue : "/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
