import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { MicroFrontendRegistryService } from "./micro-frontend-registry.service";

@Injectable({ providedIn: 'root' })

export class LoadMicroFrontendGuard implements CanActivate {
    
    constructor(
        private readonly microFrontendRegistryService: MicroFrontendRegistryService
    ) {}
    canActivate(route: ActivatedRouteSnapshot):  Promise<boolean> {
        console.log('bundle Url', route);
        const bundleUrl = route.data["bundleUrl"] as unknown;
        if (!(typeof bundleUrl === 'string')) {
            console.error(`Load Microfrontend missing informaiton`);
            return Promise.resolve(false);
        }
        return this.microFrontendRegistryService.loadBundle(bundleUrl);
    }
}
