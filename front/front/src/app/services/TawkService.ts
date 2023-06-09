import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";

// services
import { AuthenticationService } from '../auth/authentication-service/authentication-service';
import {Config} from '../config';

declare var Tawk_API: any;

@Injectable()
export class TawkService {

    private loaded: boolean = false;
    private renderer: Renderer2;

    constructor(
        private rendererFactory: RendererFactory2,
        private readonly authenticationService: AuthenticationService,
        @Inject(DOCUMENT) private _document: Document) {
            this.renderer = rendererFactory.createRenderer(null, null);
            this.load();
        }

    private load(){
        if(this.loaded || Config.APP_URL.includes('5000'))
            return;

        const s = this.renderer.createElement('script');
        s.type = 'text/javascript';
        s.text = `  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6474d870ad80445890efbf86/1h1k6quae';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
        `;
        this.renderer.appendChild(this._document.body, s);
        Tawk_API.onLoad = this.loadedEvent.bind(this);
    }

    private async loadedEvent(){
        this.loaded = true;
       setTimeout(() => {
            // Set visitor attributes
            Tawk_API.setAttributes({
                'name': this.authenticationService.getUser()?.firstname+' '+this.authenticationService.getUser()?.lastname+':'+this.authenticationService.getTenant(),
                'Email': this.authenticationService.getUser()?.email,
                'Organization': this.authenticationService.getTenant()
            });
       }, 1000);
    }
    
}