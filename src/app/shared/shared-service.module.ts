import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BaseService } from './services/helpers/base.service';

@NgModule({
    providers: [
        BaseService
    ]
})
export class SharedServicesModule {
    constructor(@Optional() @SkipSelf() parentModule: SharedServicesModule) {
        if (parentModule) {
            throw new Error('SharedServicesModule is already loaded. Import it in the AppModule only');
        }
    }
}
