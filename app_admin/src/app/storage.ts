// Injection a token from the core Angular
import { InjectionToken } from '@angular/core';

// Using a factory method to set up for local storage
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});