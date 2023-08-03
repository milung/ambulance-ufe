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

  @Prop() basePath: string=""

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
      toRelative(path);  
    });
    
    toRelative(location.pathname)
  }


  render() {
    let element = "list"
    let entryId = "@new"

    if ( this.relativePath.startsWith("entry/"))
    {
      element = "editor";
      entryId = this.relativePath.split("/")[1]
    }

    return (
      <Host>
        { element === "editor" 
        ? <pfx-ambulance-wl-editor entry-id={entryId}
          oneditor-closed={ () => window.navigation.navigate("./list")}
        ></pfx-ambulance-wl-editor>
        : <pfx-ambulance-wl-list 
          onentry-clicked={ 
            (ev: CustomEvent<string>)=>window.navigation.navigate("./entry/" + ev.detail) }
          >
          </pfx-ambulance-wl-list>
        }
        
      </Host>
    );
  }

}
