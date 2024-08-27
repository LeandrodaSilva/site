import{i as t,_ as e,n as i,s as o,x as n}from"./48f1a509.js";class s extends o{constructor(){super(...arguments),this.titlePart1="Agende",this.titlePart2="uma visita",this.subtitle1="Você poderá nos visitar para conhecer nossa proposta pedagógica e tudo o que podemos oferecer para a sua família.",this.subtitle2="",this.subtitle3="",this.tip="Os campos com (*) são obrigatórios.",this.onlyOneContent=!1,this.titlesAlign="direita",this.stepsAlign="direita",this.formAlign="direita",this.showSteps=!1}firstUpdated(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#conversion-form");e&&e.addEventListener("submit",(()=>this.handleFormSubmit()))}handleFormSubmit(){this.etapaAtual()}etapaAtual(){const{shadowRoot:t}=this;if(t){const e=t.querySelector(".step-1"),i=t.querySelector(".step-2");e&&i&&(e.classList.toggle("current"),i.classList.toggle("current"))}}render(){const t=n`
      <div>
        <div>
          <h2>
            ${this.titlePart1} <br />
            ${this.titlePart2}
          </h2>
        </div>

        <div class="subtitle">
          <p>${this.subtitle1}</p>
          ${this.subtitle2?n`<p>${this.subtitle2}</p>`:n``}
          ${this.subtitle3?n`<p>${this.subtitle3}</p>`:n``}
        </div>
      </div>
    `,e=n`
      <div class="form-first-row">
        ${this.showSteps?n`
              <div class="steps">
                <div class="step step-1 current"><p>1</p></div>
                <div class="connector"></div>
                <div class="step step-2"><p>2</p></div>
              </div>
            `:n``}
        <p class="tip">${this.tip}</p>
      </div>
    `,i=n` <slot name="form"></slot> `;return n`
      <section @submit=${this.handleFormSubmit}>
        <div class="content">
          <div class="content-container">
             ${this.onlyOneContent?n``:n`
            <div class="column left">
              <slot name="left-top"></slot>

              <div class="container-left">
                ${"esquerda"===this.titlesAlign?t:n``}
                ${"esquerda"===this.stepsAlign?e:n``}
                ${"esquerda"===this.formAlign?i:n``}
              </div>

              <slot name="left-bottom"></slot>
            </div>
          `}

            <div class="column right">
              <slot name="right-top"></slot>

              <div class="container-right">
                ${"direita"===this.titlesAlign?t:n``}
                ${"direita"===this.stepsAlign?e:n``}
                ${"direita"===this.formAlign?i:n``}
              </div>

              <slot name="right-bottom"></slot>
            </div>
          </div>

          <slot name="content-out"></slot>

          <slot name="address"></slot>
        </div>
      </section>
    `}}s.styles=t`
    :host {
      font-family: var(--seb-font, monospace);
    }

    section {
      margin: 0;
      padding: 0;
      padding-bottom: var(--seb-section-pd-bot, 125px);
      padding-top: var(--seb-section-pd-top, 150px);
      background-color: var(--seb-section-bg-color, #54565a);
      min-height: var(--seb-section-min-height, 100vh);
      background: var(--seb-section-bg);
    }

    section::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: var(--seb-section-background-height, 100%);
      background: var(--seb-section-background);
      content: ' ';
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .content-container {
      width: 100%;
      max-width: var(--seb-max-width, 1284px);
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: var(--seb-section-content-direction, row);
      z-index: 1;
    }

    .column.right {
      width: var(--seb-section-column-right-width, 50%);
      position: var(--seb-section-column-right-position);
    }

    .column.left {
      width: var(--seb-section-column-left-width, 50%);
      position: var(--seb-section-column-left-position);
    }

    .container-right{
      height: var(--seb-section-container-right-height , unset);
    }

    .container-left{
      height: var(--seb-section-container-left-height , unset);
    }

    .container-right,
    .container-left {
      padding: 0 25px;
      padding-bottom: 15px;
      position: relative;
    }

    @media (max-width: 940px) {
      .container-right,
      .container-left {
        padding: 0 15px;
        padding-bottom: 15px;
      }
    }

    .container-right {
      background: var(--seb-section-background-right);
      border-radius: var(--seb-section-radius-right);
      z-index: var(--seb-section-container-right-z);
    }

    .container-left {
      background: var(--seb-section-background-left);
      border-radius: var(--seb-section-radius-left);
      z-index: var(--seb-section-container-left-z);
    }

    h2 {
      font-family: var(--seb-section-title-font);
      color: var(--seb-section-title-color, #f2bb24);
      font-size: var(--seb-section-title-font-size, 80px);
      line-height: 80px;
      font-weight: 700;
      margin: 0;
      padding: 0;
      margin-bottom: var(--seb-section-title-margin-bot, 20px);
    }

    .subtitle {
      padding: var(--seb-section-subtitle-padding, 0 0 50px 0);
    }

    p {
      font-family: var(--seb-section-subtitle-font);
      color: var(--seb-section-subtitle-color, #ffffff);
      font-size: var(--seb-section-subtitle-font-size, 30px);
      line-height: var(--seb-section-subtitle-line-height, 35px);
      font-weight: var(--seb-section-subtitle-weight, 600);
      margin: 0;
      padding: 0;
    }

    .content-container .column .form-first-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--seb-section-step-padding, 0 0 20px 0);
    }

    .content-container .column .form-first-row .steps {
      display: flex;
      align-items: center;
    }

    .content-container .column .form-first-row .steps .step {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      background-color: #ffffff;
      box-shadow: var(--seb-section-steps-shadow);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.5s ease-in-out;
    }

    .content-container .column .form-first-row .steps .step.current {
      background-color: var(--seb-section-step-color, #49b9cf);
      transform: scale(1.33);
      transform-origin: center;
    }

    .content-container .column .form-first-row .steps .step:not(:first-child) {
      border: var(--seb-section-steps-border-color);
    }

    .content-container .column .form-first-row .steps .step p {
      color: #53565a;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      text-align: center;
      transition: color 0.5s ease-in-out;
      color: var(--seb-section-step-text-color, #53565a);
    }

    .content-container .column .form-first-row .steps .step.current p {
      color: var(--seb-section-step-current-text-color, #ffffff);
    }

    .content-container .column .form-first-row .steps .connector {
      width: 30px;
      height: 1px;
      background-color: var(--seb-section-step-connector-color, #ffffff);
    }

    .content-container .column .form-first-row .tip {
      font-size: var(--seb-section-tip-size, 16px);
      color: var(--seb-section-tip-color);
      font-weight: var(--seb-section-tip-weight, 400);
      line-height: 26px;
    }

    @media (max-width: 940px) {
      :host section {
        padding-top: var(--seb-section-pd-top, 100px);
        // margin-bottom: 100px;
      }

      .content-container {
        flex-direction: column;
        max-width: var(--seb-max-width-mobile, 93%);
      }

      .column.right,
      .column.left {
        width: auto;
        max-width: unset;
      }

      // .column.right {
      //   width: var(--seb-section-column-right);
      // }

      // .column.left {
      //   width: var(--seb-section-column-left);
      // }

      h2 {
        font-size: 32px;
        line-height: 42px;
        margin-bottom: 10px;
      }

      p {
        font-size: 20px;
        line-height: 30px;
      }

      .content-container .column .form-first-row {
        justify-content: flex-start;
        flex-direction: column;
        align-items: start;
      }

      .content-container .column .form-first-row .tip {
        padding-top: 20px;
      }
    }
  `,e([i({type:String})],s.prototype,"titlePart1",void 0),e([i({type:String})],s.prototype,"titlePart2",void 0),e([i({type:String})],s.prototype,"subtitle1",void 0),e([i({type:String})],s.prototype,"subtitle2",void 0),e([i({type:String})],s.prototype,"subtitle3",void 0),e([i({type:String})],s.prototype,"tip",void 0),e([i({type:Boolean})],s.prototype,"onlyOneContent",void 0),e([i({type:String})],s.prototype,"titlesAlign",void 0),e([i({type:String})],s.prototype,"stepsAlign",void 0),e([i({type:String})],s.prototype,"formAlign",void 0),e([i({type:Boolean,reflect:!0})],s.prototype,"showSteps",void 0),window.customElements.define("seb-rdstation-section",s);
