import { Injectable } from "@angular/core";

function load(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = ()  => reject({
            error: `Bundle ${url} could not be loaded`,
        });
        document.body.appendChild(script);
    })
}

type LoadingState = 'UNKNOWN' | 'LOADING' | 'LOADED' | 'FAILED';

@Injectable ({ providedIn: 'root'})

export class MicroFrontendRegistryService {
    
    private loadingStates: Record<string, LoadingState> = {};

    async loadBundle(bundleUrl: string): Promise<boolean> {
        if (['LOADING' , 'LOADED'].includes(this.getLoadingState(bundleUrl))) {
            return true;
        }
        this.loadingStates[bundleUrl] = 'LOADING';
        const isSuccess = await load(bundleUrl)
            .then(() => true)
            .catch(() => false);
        this.loadingStates[bundleUrl] = isSuccess ? 'LOADED': 'FAILED';
        return isSuccess;
    }

    getLoadingState(bundleUrl: string): LoadingState {
        return this.loadingStates[bundleUrl] || 'UNKNOWN';
    }

    isBundleLoaded(bundleUrl: string): boolean {
        return this.getLoadingState(bundleUrl) === 'LOADED';
    }
}