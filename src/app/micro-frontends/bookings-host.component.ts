
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bookings-host',
    template: `<mf-bookings-entry microFrontendRouting></mf-bookings-entry>`
})

export class BookingsHostComponent implements OnInit{
    ngOnInit() {
        // this.load('http://localhost:4201/main_child.js');
    }
 
    // load(url: string): Promise<void> {
    //     return new Promise((resolve, reject) => {
    //         const script = document.createElement('script');
    //         script.src = url;
    //         script.onload = () => resolve();
    //         script.onerror = ()  => reject({
    //             error: `Bundle ${url} could not be loaded`,
    //         });
    //         document.body.appendChild(script);
    //     })
    // }
}
