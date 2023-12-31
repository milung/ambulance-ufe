import { Component, Host, Prop, State, h } from '@stencil/core';

declare global {
  interface Window { navigation: any; }
}

@Component({
  tag: 'pfx-ambulance-wl-app', // @_pfx_@
  styleUrl: 'pfx-ambulance-wl-app.css', // @_pfx_@
  shadow: true,
})
export class PfxAmbulanceWlApp { // @_pfx_@

  @State() private relativePath = "";

  @Prop() basePath: string="";
  @Prop() apiBase: string;
  @Prop() ambulanceId: string;

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || "/").pathname;

    const toRelative = (path: string) => {
      if (path.startsWith( baseUri)) {
        this.relativePath = path.slice(baseUri.length)
      } else {
        this.relativePath = ""
      }
    }

    window.navigation?.addEventListener("navigate", (ev: Event) => {
      let path = new URL((ev as any).destination.url).pathname;
      if ((ev as any).canIntercept) { (ev as any).intercept(); }
      toRelative(path);  
    });
    
    toRelative(location.pathname)
  }


  render() {
    console.debug("<pfx>-ambulance-wl-app.render() - path: %s", this.relativePath);
    let element = "list"
    let entryId = "@new"

    if ( this.relativePath.startsWith("entry/"))
    {
      element = "editor";
      entryId = this.relativePath.split("/")[1]
    }

    const navigate = (path:string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute)
    }

    return (
      <Host>
        { element === "editor" 
        ? <pfx-ambulance-wl-editor entry-id={entryId}
          ambulance-id={this.ambulanceId} api-base={this.apiBase}
          oneditor-closed={ () => navigate("./list")}
        ></pfx-ambulance-wl-editor>
        : <pfx-ambulance-wl-list
            ambulance-id={this.ambulanceId} api-base={this.apiBase}
            onentry-clicked={ (ev: CustomEvent<string>)=> navigate("./entry/" + ev.detail) } >
          </pfx-ambulance-wl-list>
        }
        
      </Host>
    );
  }
}
