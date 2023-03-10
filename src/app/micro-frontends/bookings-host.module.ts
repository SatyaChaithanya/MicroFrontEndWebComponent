import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BookingsHostComponent } from "./bookings-host.component";
import { LoadMicroFrontendGuard } from "./load-micro-frontend.guard";
import { MicroFrontendRoutingDirective } from "./micro-frontend-routing.directive";

@NgModule({
    declarations: [BookingsHostComponent,  MicroFrontendRoutingDirective],
    imports: [
        RouterModule.forChild([
            {
                path: '**',
                component: BookingsHostComponent,
                canActivate: [LoadMicroFrontendGuard],
                data: {
                    bundleUrl: 'http://localhost:4201/main_child.js'
                }
            }
       ])
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BookingsHostModule {}