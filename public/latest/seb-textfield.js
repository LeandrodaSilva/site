import{s as e,i as t,_ as i,n as o,x as s}from"./9bde2683.js";class a extends e{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.button=!1,this.required=!1,this.firstSubmit=!1,this.name="",this.value="",this.searchValue="",this.label="Label"}connectedCallback(){super.connectedCallback(),window.addEventListener("seb-button-submit",(e=>this.firstSubmit=!0))}disconnectedCallback(){window.removeEventListener("csat.submit",(()=>{this.firstSubmit=!1})),super.disconnectedCallback()}__handleClick(){this.checked=!this.checked}__handleFocus(){var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("span"))||void 0===t||t.classList.add("focus")}__handleBlur(e){var t,i;const o=e.target;("cf_ptr_telefonecelular"===o.name&&this.value.startsWith("+55")&&this.value.length<19||"cf_ptr_telefonealuno"===o.name&&this.value.startsWith("+55")&&this.value.length<19)&&(o.value=""),("cf_ptr_datadenascimentoaluno"===o.name&&this.value.length<10||"cf_ptr_nascimentoresponsavel"===o.name&&this.value.length<10)&&(o.value=""),null===(i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("span"))||void 0===i||i.classList.remove("focus"),this.__handleInput(e),this.dispatchEvent(new InputEvent("input"))}__handleKeydown(e){"Backspace"===e.key&&this.__handleInput(e)}__handleInput(e){if(this.button)return this.value="",void(e.target.value="");const t=e.target;"cf_ptr_horaagenda"!==this.name&&"cf_ptr_dataagenda"!==this.name?("cf_ptr_telefonecelular"===this.name||"cf_ptr_telefonealuno"===this.name)&&t.value.startsWith("+55")&&(e instanceof KeyboardEvent&&"Backspace"===e.key&&(e.preventDefault(),t.value.length>4&&(t.value=t.value.slice(0,-1))),t.value.length>=15&&t.value.length>19)?t.value=t.value.slice(0,19):this.value=t.value:t.value=this.value}render(){var e;return s`
      <label>
        <span class=${(null===(e=null==this?void 0:this.value)||void 0===e?void 0:e.length)?"with-content":""}>
          ${this.label}
        </span>
        <input
          role="presentation"
          autocomplete="off"
          type="text"
          name=${this.name||""}
          .value=${""!==this.searchValue?this.searchValue:this.value||""}
          @click=${this.__handleClick}
          @focus=${this.__handleFocus}
          @blur=${this.__handleBlur}
          @input=${this.__handleInput}
          @keydown=${this.__handleKeydown}
          ?required=${this.required&&this.firstSubmit}
          ?disabled=${this.disabled}
        />
        <slot></slot>
      </label>
    `}}a.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0},a.styles=t`
    :host {
      display: block;
      color: var(--seb-text-color, #111927);
      width: 100%;
    }

    :host:focus,
    :host label:focus {
      outline: none;
    }

    :host label {
      position: relative;
      height: 55px;
      width: 100%;
      font-size: 16px;
      box-sizing: border-box;
      transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    :host label span {
      position: absolute;
      top: -10px;
      left: 20px;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color-scheme: light;
      --Grid-columns: 12;
      --Grid-columnSpacing: 32px;
      --Grid-rowSpacing: 32px;
      box-sizing: border-box;
      color: #7B8088;
      line-height: 1.4375em;
      padding: 0;
      font-family: var(--seb-textfield-span-font);
      font-size: 1rem;
      font-weight: var(--seb-textfield-font-weight, 500);
      display: block;
      transform-origin: top left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(100% - 24px);
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      z-index: 1;
      pointer-events: none;
    }

    :host label span.focus,
    :host label span.with-content {
      top: -18px;
      transform: scale(0.75);
    }

    :host label input {
      background: white;
      font: inherit;
      letter-spacing: inherit;
      height: 55px;
      margin: 0;
      -webkit-tap-highlight-color: transparent;
      min-width: 0;
      padding: 25px 19px 8px;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color-scheme: light;
      --Grid-columns: 12;
      --Grid-columnSpacing: 32px;
      --Grid-rowSpacing: 32px;
      font-size: 16px;
      font-weight: 400;
      font-family: var(--seb-textfield-input-font);
      line-height: 1.4375em;
      color: #111927;
      box-sizing: border-box;
      cursor: text;
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      position: relative;
      border-radius: var(--seb-border-radius, 8px);
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-color: #e5e7eb;
    }

    :host label input:disabled {
      background: #e9eaea;
      color: #555964;
      cursor: not-allowed;
    }

    :host([button='true']) label input {
      cursor: pointer;
      caret-color: transparent;
    }

    :host label input:focus {
      outline: none;
      border: 2px solid var(--seb-primary-color, #ff0000);
    }

    :host label input:invalid {
      border: 1px solid red;
    }
  `,i([o({type:Boolean})],a.prototype,"checked",void 0),i([o({type:Boolean})],a.prototype,"disabled",void 0),i([o({type:Boolean})],a.prototype,"button",void 0),i([o({type:Boolean})],a.prototype,"required",void 0),i([o({type:Boolean})],a.prototype,"firstSubmit",void 0),i([o({type:String})],a.prototype,"name",void 0),i([o({type:String})],a.prototype,"value",void 0),i([o({type:String})],a.prototype,"searchValue",void 0),i([o({type:String})],a.prototype,"label",void 0),window.customElements.define("seb-textfield",a);
