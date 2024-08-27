import{i as t,_ as e,n as o,s as i,x as r}from"./9bde2683.js";class s extends i{constructor(){super(...arguments),this.type="button",this.disabled=!1}__click(t){"submit"==this.type?window.dispatchEvent(new CustomEvent("seb-button-submit",{detail:""})):this.click(t)}render(){return r`
      <button
        type="${this.type||"button"}"
        ?disabled="${this.disabled}"
        @click="${this.__click}"
      >
        <slot></slot>
      </button>
    `}}s.styles=t`
    :host {
      display: flex;
      color: var(--seb-text-color, #111927);
      margin: 0 auto;
    }

    :host button {
      margin: var(--seb-button-margin, 0 auto);
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color-scheme: light;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      outline: 0;
      border: 0;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      -webkit-appearance: none;
      text-decoration: none;
      font-weight: var(--seb-button-font-weight, 600);
      font-family: var(--seb-button-font);
      font-size: 1rem;
      line-height: 1.75;
      width: var(--seb-button-width);
      min-width: 64px;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      color: var(--seb-text-color, white);
      background-color: var(--seb-primary-color, #6366f1);
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.08);
      border-radius: var(--seb-button-border-radius, 30px);
      text-transform: var(--seb-button-text-transform, none);
      padding: var(--seb-button-padding, 8px 20px);
    }

    :host button:hover {
      filter: brightness(0.9);
    }

    :host button:active {
      filter: brightness(0.7);
    }

    :host button:disabled {
      filter: brightness(0.5) grayscale(1);
      cursor: not-allowed;
    }
  `,e([o({type:String})],s.prototype,"type",void 0),e([o({type:Boolean})],s.prototype,"disabled",void 0),e([o()],s.prototype,"click",void 0),window.customElements.define("seb-button",s);
