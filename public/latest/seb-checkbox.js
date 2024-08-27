import{i as e,_ as t,n as i,s as o,x as n}from"./9bde2683.js";import{i as r,t as s}from"./5330295c.js";import{v as l}from"./31b20069.js";class a extends o{constructor(){super(...arguments),this.disabled=!1,this.checked=!1,this.name="",this.uuid=l()}render(){return n`
      <div>
        <span>
          <input
            id=${this.uuid}
            type="checkbox"
            name=${this.name}
            ?checked=${this.checked}
            .disabled=${this.disabled?"disabled":""}
          />
          ${this.checked?n`
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                font-size="medium"
              >
                <path
                  clip-rule="evenodd"
                  d="M9 3.5C5.68629 3.5 3 6.18629 3 9.5V15.5C3 18.8137 5.68629 21.5 9 21.5H15C18.3137 21.5 21 18.8137 21 15.5V9.5C21 6.18629 18.3137 3.5 15 3.5H9ZM16.7179 10.1961C17.1024 9.79966 17.0926 9.16657 16.6961 8.7821C16.2997 8.39763 15.6666 8.40737 15.2821 8.80385L10.6667 13.5635L8.7179 11.5539C8.33343 11.1574 7.70034 11.1476 7.30385 11.5321C6.90737 11.9166 6.89763 12.5497 7.2821 12.9461L9.94877 15.6961C10.1371 15.8904 10.3961 16 10.6667 16C10.9372 16 11.1962 15.8904 11.3846 15.6961L16.7179 10.1961Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>`:n`
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                font-size="medium"
              >
                <rect
                  height="16"
                  rx="5"
                  stroke="currentColor"
                  stroke-width="2"
                  width="16"
                  x="4"
                  y="4.5"
                ></rect>
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
    `}}a.styles=e`
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

    input {
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

    :host([disabled]) div {
      cursor: not-allowed;
      pointer-events: none;
      opacity: 0.5;
      border: 0;
    }

    :host([disabled]) input {
      cursor: not-allowed;
      pointer-events: none;
    }

    svg {
      pointer-events: none;
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
      text-align: left;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    }
  `,t([i({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),t([i({type:Boolean,reflect:!0})],a.prototype,"checked",void 0),t([i({type:String})],a.prototype,"name",void 0),t([r("input")],a.prototype,"input",void 0),t([s()],a.prototype,"uuid",void 0),window.customElements.define("seb-checkbox",a);
