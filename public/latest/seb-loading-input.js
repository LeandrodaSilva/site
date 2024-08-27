import{i as t,_ as e,n as i,s as r,x as o}from"./9bde2683.js";import"./68cb9b1b.js";class n extends r{constructor(){super(...arguments),this.primaryColor="#007bff",this.inputId=null,this.inputName=null}render(){return o`
      <div
        style="--seb-primary-color: ${this.primaryColor}"
        class="loading-container"
      >
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `}firstUpdated(){if(this.inputId||this.inputName){const t=this.inputId?document.getElementById(this.inputId):document.querySelector(`[name=${this.inputName}]`);if(t){t.style.position="relative";const e=document.createElement("seb-loading-input");t.appendChild(e)}}}}n.styles=t`
    :host {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--seb-border-radius, 8px);
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .spinner-border {
      width: 2rem;
      height: 2rem;
      border-width: 0.25em;
      border-color: var(--seb-primary-color, #007bff);
      border-right-color: transparent;
      border-radius: 50%;
      border-style: solid;
      animation: spinner-border 0.75s linear infinite;
    }

    @keyframes spinner-border {
      to {
        transform: rotate(360deg);
      }
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    .text-primary {
      color: #007bff;
    }
  `,e([i({type:String})],n.prototype,"primaryColor",void 0),e([i({type:String})],n.prototype,"inputId",void 0),e([i({type:String})],n.prototype,"inputName",void 0),window.customElements.define("seb-loading-input",n);
