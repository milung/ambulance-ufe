/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PfxAmbulanceWlList {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPfxAmbulanceWlListElement extends Components.PfxAmbulanceWlList, HTMLStencilElement {
    }
    var HTMLPfxAmbulanceWlListElement: {
        prototype: HTMLPfxAmbulanceWlListElement;
        new (): HTMLPfxAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "pfx-ambulance-wl-list": HTMLPfxAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PfxAmbulanceWlList {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "pfx-ambulance-wl-list": PfxAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "pfx-ambulance-wl-list": LocalJSX.PfxAmbulanceWlList & JSXBase.HTMLAttributes<HTMLPfxAmbulanceWlListElement>;
        }
    }
}
