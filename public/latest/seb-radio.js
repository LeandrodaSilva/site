import{i as e,_ as t,n as i,s as o,x as n}from"./48f1a509.js";import{i as r,t as a,v as s}from"./5aea4bc9.js";class l extends o{constructor(){super(...arguments),this.name=self.crypto.randomUUID(),this.disabled=!1,this.checked=!1,this.uuid=s()}render(){return n`
      <div>
        <span>
          <input
            id=${this.uuid}
            type="radio"
            name=${this.name}
            ?checked=${this.checked}
            .disabled=${this.disabled}
          />
          ${this.checked?n`<svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                font-size="medium"
              >
                <path d="M12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
              </svg>`:n`<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                font-size="medium"
              >
                <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>`}
        </span>
        <label
          tabindex="0"
          for=${this.uuid}
          @click=${e=>{e.preventDefault(),e.stopPropagation(),this.input.click()}}
        >
          <p>
            <slot></slot>
          </p>
        </label>
      </div>
    `}}l.styles=e`
    :host {
      display: block;
      color: var(--seb-text-color, #111927);
    }

    label {
      padding-left: 5px;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
      color: #111927;
      color-scheme: light;
      box-sizing: border-box;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      vertical-align: middle;
      -webkit-tap-highlight-color: transparent;
      margin-left: -11px;
      margin-right: 16px;
    }

    span {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
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
      margin: 0;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      -webkit-appearance: none;
      text-decoration: none;
      padding: 9px;
      border-radius: 50%;
      background-color: transparent;
      color: var(--seb-primary-color, #6366f1);
      transition: background 400ms;
    }

    span:hover {
      background-color: rgba(99, 102, 241, 0.04);
    }

    span:active {
      background-color: rgba(var(--seb-primary-color, #6366f1), 0.1);
    }

    label:focus {
      border: none;
      outline: none;
    }

    span input {
      cursor: inherit;
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: 1;
    }

    svg {
      pointer-events: none;
    }

    svg path {
      fill: var(--seb-primary-color, #6366f1);
    }

    label p {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color: #111927;
      color-scheme: light;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
      margin: 0;
      font-size: 1rem;
      text-align: left;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    }
  `,t([i({type:String})],l.prototype,"name",void 0),t([i({type:Boolean,reflect:!0})],l.prototype,"disabled",void 0),t([i({type:Boolean,reflect:!0})],l.prototype,"checked",void 0),t([r("input")],l.prototype,"input",void 0),t([a()],l.prototype,"uuid",void 0),window.customElements.define("seb-radio",l);
