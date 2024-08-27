import{i as e,_ as t,n as i,s as r,x as o}from"./9bde2683.js";class s extends r{constructor(){super(...arguments),this.redirectLink=null,this.message=null,this.redirectMessage="Agendar visita"}render(){return o`
      <div>
        <p class="seb-redirect-message">${this.message}</p>
        ${this.redirectLink?o`
              <button
                @on-click
                @click=${this.__handleRedirect}
                class="seb-redirect-button"
              >
                ${this.redirectMessage}
              </button>
            `:null}
      </div>
    `}__handleRedirect(){this.redirectLink&&(window.location.href=this.redirectLink)}}s.styles=e`
    @import url('https://fonts.googleapis.com/css2?family=Gentona:wght@400;600&display=swap');

    .seb-redirect-button {
      position: relative;
      cursor: pointer;
      border-radius: 8px;
      padding: 15px 30px 15px 35px;
      max-width: 100%;
      font-size: 15px;
      font-weight: var(--redirect-button-font-weight, 600);
      letter-spacing: 0.1em;
      line-height: 25px;
      text-align: center;
      background-color: var(--redirect-button-bg-color, #409bb8);
      display: block;
      color: var(--redirect-button-color, white);
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      text-decoration: none;
      border: none;
      transition: all 0.25s ease-in-out;
    }

    .seb-redirect-button:after {
      display: var(--redirect-button-after-display);
      position: absolute;
      width: 18px;
      height: 100%;
      top: 0;
      right: -13px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAB4CAYAAACeuYApAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAotJREFUeNrs3M1twkAQBWAzSgGU4BIowblxCyXAgXOgArIVQM45xCXALbdsCSmBEugg2UWCiB/D/szMPkUZyZcIW5+e1vaLZLvXvH18V7+zdtvGTodtVXh6Z7DDbN02cUBbCkYdf6/d9unQYzTYYd5L4SjgNx43QIT5WaLCGpdagwjzs0CFNZonAkX+foEKq7VSo4R9Fqgwn9oMEbZPzeH6iDCPmiHC/DxLppYDE02NMvcXSy0X1pe6wRPDMcYutRoRJnLR5YKxp0aMx1qiwkacZZKYl8YCFcZWwblhbKlJwHxqI0QYyxkqBcuu4FKw7LUmCctKTRK2X2uptUgallwmpWHJZVIDlpSaBiwpNS1YdAXXgkWXSU1Y1EVXGxacmjYs+AZfAhZUwUvAgtZaKdjdCl4Kdje1krCbFbwk7OYZWhrWWSZLwzrXGgLsamoIsH1q57UIBVafl0kU2EWZRIKdVHAk2ElqaLBjamgwP0+osAEqrPqH/RXYFypsgwjbuW2FCHu10+EODXZMCw12TAsJtnWoF8TLhUG8jm2vPUVKiGkhwGzXM7eEmFZpmL31ADAhplUStr73uHQp2Byxj7UurS0izCA22FVIWtqwXWha2rCTWoMCOymBSLCotLRgFyUQBWZSdiKFtFpEmEndURJmc168IsS0JGE29y0wQkxLCrbmeGdOAjbnOAg3rA2tNdoww3UgTpjhSosTFl1rtGDRtUYDxp4WF8xwp8UB87WGPS0OmKmEhjLTahFh80pwUmG+1qwRYaYSHkpMyyLCxNNKgbVaH04gxLRiYS1nreGEqaUVAzOaaYXCRGoNB2wiUWtyYRPpW08szK+nx5Jfo3k4/y+6Avk8zo8AAwCbfMlf9vpM8gAAAABJRU5ErkJggg==)
        no-repeat center;
      background-size: auto 100%;
      content: '';
    }

    .seb-redirect-button:before {
      display: var(--redirect-button-before-display);
      position: absolute;
      width: 37px;
      height: 100%;
      top: 0;
      right: -34px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAB4CAYAAAAOhjujAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABJBJREFUeNrsnb1Ok1Ech9+WtmIpUEJEEhYYqAMMMrk4dHbCKwCvQLgC6BUAVwDcAbNTV11gkEEcYCExGmL5RkD0PaAn1gQ//+fjPed5km7kJA1PHg9vf6a5Jy82viTgnGqpmAx0lpJabznpKnRIHLmRvprpa2lqdHDH1fvKIZh/jPdVkrFqRfLIRirZPIKBRtXs8f2+pJjPSR2pavY0Fa1l833k+VX6yfuz8+Tlh33JI+vpa9n2+0Awj9k9OUu2j04lj5xcfftuGsFAs753mFxcid5iFlLJqggG11xcXSVbB8eif7CmrxkEA82b/RPpij23VTEEo2IIBjcVO778LF2xYQQDXbHNj0fSFZtDMNCoRxbCFZs2XTEEyxjCFUtMVwzBMlix1vmldMUeIhho1vcOpI9cQDDQqM8p1UuQelqxOoJB5u5iCEbFjFYMwTLMK9k5j2IZwUCjnokJz3mGpec8CMZdzOhdDMECqNjWwYl0xWYQDDSv04oJz3nmpOY8CBYAPs95ECwQfB0lIhgVM1oxBAvsLiY855n73zkPggWGb48tECwwfBslIhgVM1oxBAu0YsIfhE//6wfhCEbFjFYMwQLFlzkPglExoxVDsMArtnvySbpikwgGGtf/QQTBAsf1KBHBuIsZvYshWCQVczVKRLBIcDVKRLBIcDXnQbCIcDFKRDAqZrRiCBbhXczmKBHBIsTmYwsEixCbo0QEo2JGK4ZgEVfMxigRwaiY0YohWMTYGCUiGBUzWjEEo2LSc576j3MeBAOjFUMwMDpKRDAwWjEEA12xzZaoZKpi8wgGmu3DU+kjpxAM2iom/D1IwwgGbQg/eOUOBu2oUSKCQWZAMGijmM8jGJhjoLOEYGCGrkJHUi0VJI/cQTDQjHTflT5yFcFA12usWhGt19ToIE/y4Yaxvor0kQ3uYKDrNVIR/edR1WsFwcBovRAMrh9LCNer+b1eCAZG64Vg1Ev6waqqVxPBwEq9ECxi1L1LuF4rP9cLwaiX0XohWMT1Us++hOu1g2BgtV4IFiHjqVzC9WrcVi8Eiww1Jqz1dEke2Upfi7/6AQSLiAe95VSynOSRS2m9WggGTuqFYJHdvYTr1fhdvRAsEtSlvtZTljxSzXEW/+QHESwCbD6WQLAI62VqTIhgkEz090gfOfs3P4xgAaM+zB4q35E8Us1x1hAMnN+9ECyCepkeEyIY9XJaLwQLFFtjQgSjXk7rhWCB1svWmBDBqJfTeiFYYNgeEyJYRLia4yBYJLgYEyIY9XJaLwQL6O7lYkyIYBHgckyIYBHg22MJBAusXi7HhAgWOK7HhAgWMD6MCRGMu5ezuxeCZbxePowJEYy7l7O7F4JlFPVXo/D3Cak5zgaCQabuXgiW0Xr5NCZEsIBQH2gL16tlul4IliHUHEe4Xkum64VgGaqXr3McBAukXj6OCRGMejmtF4JlgIn+bul6zdqqF4J5zlC5U3qOsyY9x0GwjKI+a3x0r1fyyGb6emb7fRT4VfqH2tgLf0G72tjPu3gvCOYJ1VLxulo1ueddG9+qZeV51218FWAAdBLiW4/5dM4AAAAASUVORK5CYII=)
        no-repeat right center;
      background-size: auto 100%;
      content: '';
    }

    .seb-redirect-message {
      font-size: 18px;
      max-width: 500px;
      line-heiight: 1.35;
      margin-top: 30px;
      font-family: 'Gentona', sans-serif;
    }
  `,t([i({type:String})],s.prototype,"redirectLink",void 0),t([i({type:String})],s.prototype,"message",void 0),t([i({type:String})],s.prototype,"redirectMessage",void 0),window.customElements.define("seb-message",s);
