import { Directive, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from "rxjs";
import { map, takeUntil } from "rxjs/operators";

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