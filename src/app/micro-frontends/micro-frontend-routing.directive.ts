import { Directive, ElementRef, HostListener, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";

export interface RouterEvent {
    url: string;
    replaceUrl: boolean;
}

@Directive({
    selector: '[microFrontendRouting]'
})

export class MicroFrontendRoutingDirective implements OnInit, OnDestroy {

    constructor(
        private readonly element: ElementRef,
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {}

    private destroyed$ = new Subject();

    @HostListener('routeChange', ['$event'])
    handleRouteChange(event: { detail?: RouterEvent }) {
      console.log('host listener called on route changes');
      this.navigateToUrl(event.detail);
    }

    navigateToUrl(event: RouterEvent | undefined): void {
      console.log('navigateToUrl changes called', event);
        if (event?.url && event.url.startsWith('/')) {
          this.router.navigateByUrl(event.url, {
            replaceUrl: event.replaceUrl || false,
          });
        } else {
          console.warn(
            `The microFrontendRouting directive received an invalid router event.`,
            event
          );
        }
    }
    
    ngOnInit() {
        this.route.url.pipe(
            map(() => this.router.url),
            takeUntil(this.destroyed$)
        ).subscribe((url) => {
            this.element.nativeElement.route = url;
        })
    }

    ngOnDestroy() {
        this.destroyed$.next(null);
    }
}