import{i as r,_ as e,n as i,s as o,x as t}from"./9bde2683.js";import"./68cb9b1b.js";class n extends o{constructor(){super(...arguments),this.primaryColor="#007bff"}render(){return t`
      <div
        style="--seb-primary-color: ${this.primaryColor}"
        class="loading-container"
      >
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `}}n.styles=r`
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .spinner-border {
      width: 3rem;
      height: 3rem;
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
  `,e([i({type:String})],n.prototype,"primaryColor",void 0),window.customElements.define("seb-loading",n);
