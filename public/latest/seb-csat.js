import{s as t,i as e,_ as o,n as s,x as n}from"./9bde2683.js";import{i}from"./5330295c.js";import"./seb-checkbox.js";import"./seb-radio.js";import{v as a}from"./31b20069.js";function c(t,e,o){let s=o;arguments.length<3&&(s=.5);const n=t.slice();for(let o=0;o<3;o+=1)n[o]=Math.round(n[o]+s*(e[o]-t[o]));return n}function r(t){const e=[255,0,0],o=[0,128,0],s=[];for(let n=0;n<t;n+=1){const i=n/(t-1);s.push(c(e,o,i))}return s.map((t=>`rgb(${t[0]}, ${t[1]}, ${t[2]})`))}class l extends t{constructor(){super(...arguments),this.show=!1,this.autoClose=!1,this.apiUrl="https://smo-graphapi-dev.azurewebsites.net/api/graphql",this.canClose="false",this.type="popup",this.closeText="Fechar",this.position="bottom",this.scoreTitle="O quanto você está satisfeito com o nosso produto?",this.scoreHideValue=!1,this.icon="circle",this.showTitle=!1,this.scoreRange=5,this.scoreRangeStartAtZero=!1,this.scoreColor=null,this.lowScoreLabel="Pouco Satisfeito",this.highScoreLabel="Muito Satisfeito",this.commentLabel="Em poucas palavras, descreva o que motivou a sua nota.",this.commentPlaceholder="Escreva aqui sua resposta",this.commentButtonLabel="Enviar",this.commentRemainingCharactersLabel="Caracteres restantes",this.commentMaxSize=255,this.score=null,this.onlyComment="false",this.comment="",this.isSaving=!1,this.showComment=void 0,this.scores=[],this.isSavingScore=!1,this.disableCommentDivider=!1,this.lowCommentSize=.3*this.commentMaxSize,this.mediumCommentSize=.7*this.commentMaxSize,this.highCommentSize=this.commentMaxSize,this.answerId=a(),this.context=null,this.checks=[],this.client=null,this.createMutation=null,this.updateMutation=null}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",(t=>this._handleKeydown(t))),window.addEventListener("csat.submit",(()=>{this._handleCommentSubmit()}))}disconnectedCallback(){window.removeEventListener("csat.submit",(()=>{this._handleCommentSubmit()})),super.disconnectedCallback()}render(){var t,e,o,s;const i=r(this.commentMaxSize),a=this.scoreRange+(this.scoreRangeStartAtZero?1:0),c=r(a);return n`
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="seb-component-csat-title"
        aria-hidden=${!this.show}
        class="seb-component-csat-root"
        ?hidden=${!this.show}
      >
        <span class="seb-component-csat-backdrop"></span>

        <div class="seb-component-csat-container">
          ${"true"===this.canClose?n`
              <button
                aria-label=${this.closeText}
                data-dismiss="modal"
                title=${this.closeText}
                id="seb-component-csat-close-button"
                class="seb-component-csat-close-button"
                @click=${this._handleClose}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            `:""}
          ${"true"!==this.onlyComment?n`
              <div class="seb-component-csat-score-container">
                ${"card"!==this.type||"card"===this.type&&this.showTitle?n`
                    <h1
                      id="seb-component-csat-title"
                      class="seb-component-csat-score-title"
                    >
                      ${this.scoreTitle}
                    </h1>
                  `:n``}

                <ul class="seb-component-csat-score-list${(null===(t=this.scores||[])||void 0===t?void 0:t.length)>0?" list-column":""}">
                  ${0===(null===(e=this.scores||[])||void 0===e?void 0:e.length)?Array.from({length:a},((t,e)=>e+(this.scoreRangeStartAtZero?0:1))).map((t=>this._renderScore(t,c,a))):null===(o=this.scores||[])||void 0===o?void 0:o.map((t=>{var e,o;if(1===this.scoreRange&&"radio"===this.icon)return n`
                        <seb-radio
                          .checked=${this.checks.includes(t.value)}
                          .value=${(null==t?void 0:t.value)===this.score?"on":""}
                          @click=${this._handleScoreClick(t.value)}
                        >
                          ${t.text}
                        </seb-radio>
                      `;if("check"===this.icon)return n`
                      <seb-checkbox
                        .checked=${this.checks.includes(t.value)}
                        @click=${this._handleScoreClick(t.value)}
                        .disabled=${this.checks.length>=this.scoreRange&&!this.checks.includes(t.value)}
                      >
                        ${t.text}
                      </seb-checkbox>
                    `;const s=r(null===(e=this.scores||[])||void 0===e?void 0:e.length);return this._renderScore(t.value,s,null===(o=this.scores||[])||void 0===o?void 0:o.length,t.text)}))}
                </ul>
              </div>
            `:n``}
          ${(null!==this.score||"true"===this.onlyComment)&&void 0===this.showComment||!0===this.showComment?n`
              ${"true"===this.onlyComment||this.disableCommentDivider?n``:n` <span class="seb-component-csat-divider"></span> `}

              <div class="seb-component-csat-comment-container">
                ${(null===(s=this.commentLabel||"")||void 0===s?void 0:s.length)>0?n`
                    <label
                      class="seb-component-csat-comment-title"
                      for="seb-component-csat-comment-textarea"
                    >
                      ${this.commentLabel}
                    </label>
                  `:n``}

                <div class="seb-component-csat-comment-input-group">
                  <textarea
                    maxlength=${this.commentMaxSize}
                    rows="5"
                    name="comment"
                    @input=${this._handleCommentChange}
                    id="seb-component-csat-comment-textarea"
                    class="seb-component-csat-comment-textarea"
                    placeholder=${this.commentPlaceholder}
                  ></textarea>
                  <button
                    class="seb-component-csat-comment-button"
                    @click=${this._handleCommentSubmit}
                    ?disabled=${this.isSaving||0===this.comment.length||null===this.score&&"true"!==this.onlyComment}
                    aria-label=${this.commentButtonLabel}
                  >
                    ${this._renderCommentIcon()}
                  </button>
                </div>
                <span
                  class="seb-component-csat-comment-characters-counter"
                  aria-hidden="true"
                >
                    ${this.commentRemainingCharactersLabel}:
                    <span
                      class=${"seb-component-csat-comment-characters-counter-value"}
                      style="color: ${i[this.commentMaxSize-this.comment.length]};"
                    >
                      ${this.commentMaxSize-this.comment.length}
                    </span>
                  </span>
              </div>
            `:""}
        </div>
      </div>
    `}_renderScore(t,e,o,s){return n`
      <li class="seb-component-csat-score-item ${s?"row":""}">
        <button
          class=${`seb-component-csat-score-button ${t===this.score?"active":""} ${this.isSavingScore?"loading":""} ${this.icon}`}
          @click=${this._handleScoreClick(t)}
          data-value=${t}
          ?disabled=${this.isSaving||this.isSavingScore&&t===this.score||t===this.score}
          type="button"
          style="${"star"!==this.icon?`background-color: ${this.scoreColor||e[this.scoreRangeStartAtZero?t:t-1]};`:""}"
        >
          ${"star"===this.icon?n`
              <svg
                width="88"
                height="84"
                viewBox="0 0 88 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="progress-${t}"
                    patternUnits="objectBoundingBox"
                    width="100%"
                    height="100%"
                    x="100%"
                    y="100%"
                  >
                    <rect
                      width="100%"
                      height="100%"
                      fill="${this.scoreColor||function(t){const e=t.includes(",")?",":" ",[o,s,n]=t.substr(4).split(")")[0].split(e).map((t=>parseInt(t,10)));return`#${o.toString(16).padStart(2,"0")}${s.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}`}(e[this.scoreRangeStartAtZero?t:t-1])}"
                    />
                    <rect
                      class="progress-rect"
                      id="progress-rect-${t}"
                      width="100%"
                      height="100%"
                      fill="var(--seb-primary-color, #0b5ed7)"
                      x="0"
                      y=${t===this.score||this.score&&"star"===this.icon&&this.score>=t?"0":"100"}
                    />
                  </pattern>
                </defs>
                <path
                  fill="url(#progress-${t})"
                  d="M44 1.61804L53.8521 31.9397L53.9644 32.2852H54.3276H86.2098L60.4166 51.0251L60.1227 51.2386L60.235 51.5841L70.0871 81.9058L44.2939 63.1659L44 62.9524L43.7061 63.1659L17.9129 81.9058L27.7651 51.5841L27.8773 51.2386L27.5834 51.0251L1.79024 32.2852H33.6724H34.0356L34.1479 31.9397L44 1.61804Z"
                  stroke="black"
                />
              </svg>
            `:""}
          ${this.scoreHideValue||"star"===this.icon?"":t}
        </button>
        ${s?n`<span
          @click=${this._handleScoreClick(t)}
          class="seb-component-csat-score-label"
        >${s}</span>`:""}
        ${t===(this.scoreRangeStartAtZero?0:1)&&this.lowScoreLabel.length>0?n`
            <span
              class="seb-component-csat-score-label low"
              aria-hidden="true"
            >
              ${this.lowScoreLabel}
            </span>
          `:""}
        ${t===(this.scoreRangeStartAtZero?o-1:o)&&this.highScoreLabel.length>0?n`
            <span
              class="seb-component-csat-score-label high"
              aria-hidden="true"
            >
              ${this.highScoreLabel}
            </span>
          `:""}
      </li>
    `}_handleKeydown(t){"Escape"===t.key&&(this.show=!1,this.requestUpdate("show"))}_renderCommentIcon(){return this.isSaving?n`
        <svg
          class="seb-component-csat-comment-button-loading"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="24"
          height="24"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="currentColor"
            stroke-width="10"
            r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      `:n`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <title>${this.commentButtonLabel}</title>
          <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
        </svg>
      `}_handleScoreClick(t){return()=>{(this.scores||[]).length>0&&"radio"!==this.icon&&this.checks.length>=this.scoreRange&&!this.checks.includes(t)||(this.score=t,this.isSavingScore=!0,this.checks.includes(t)?this.checks=this.checks.filter((e=>e!==t)):"radio"===this.icon?this.checks=[t]:this.checks=[...this.checks,t],this._saveAnswer().then((t=>{t&&!this.answerId&&(this.answerId=t.data.createAnswer.uuid)})).finally((()=>{this.isSavingScore=!1})),this.dispatchEvent(new CustomEvent("score-clicked",{detail:{score:t,checks:this.checks}})))}}_handleClose(){this.show=!1,this.score=null,this.answerId="",this.comment="",this._textarea&&(this._textarea.value=""),this.dispatchEvent(new CustomEvent("closed"))}_handleCommentChange(t){const e=t.target;this.comment=e.value||""}_handleCommentSubmit(){if(null===this.score&&"true"!==this.onlyComment||""===this.comment)return;const t={score:this.score,comment:this.comment,context:this.context};this.isSaving=!0,this._saveAnswer().then((t=>{t&&!this.answerId&&(this.answerId=t.data.createAnswer.uuid)})).finally((()=>{this.isSaving=!1,this.score=null,this.answerId="",this.comment="",this._textarea&&(this._textarea.value=""),this.show=!1})),this.dispatchEvent(new CustomEvent("submit",{detail:t}))}async _saveAnswer(){return null!==this.client?this.client.mutate({mutation:this.answerId?this.updateMutation:this.createMutation,variables:{answerId:this.answerId,input:{score:`${this.score}`,comment:`${this.comment}`,metadata:`${this.context}`}}}):null}}l.shadowRootOptions={...t.shadowRootOptions,delegatesFocus:!0},l.styles=e`
    :host {
      font-family: 'Segoe UI', sans-serif;
      display: block;
      box-sizing: border-box;
      text-align: center;
      height: 100%;
      width: 100%;
    }

    * {
      font-family: 'Segoe UI', sans-serif;
    }

    :host([type='card']) .seb-component-csat-root {
      z-index: auto;
      flex-wrap: wrap;
      display: flex;
    }

    :host([type='popup']) .seb-component-csat-root {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .seb-component-csat-container {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      padding: 20px;
      max-width: 100%;
      border: 1px solid #e0e0e0;
      margin: auto;
      z-index: 99999;
      background-color: var(--seb-background-color, white);
      pointer-events: auto;
      border-radius: 4px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
      box-sizing: border-box;
    }

    :host([type='card']) .seb-component-csat-container {
      max-height: fit-content;
    }

    :host([type='card']) .seb-component-csat-container {
      z-index: auto;
      margin: initial;
    }

    :host([type='popup']) .seb-component-csat-backdrop {
      display: block;
    }

    :host([type='popup']) .seb-component-csat-root {
      align-content: end;
    }

    :host([type='card']) .seb-component-csat-backdrop {
      display: none;
    }

    :host([type='card']) .seb-component-csat-container {
      box-shadow: none;
      border: none;
    }

    :host([position='bottom']) .seb-component-csat-container {
      margin-bottom: 10px;
    }

    :host([type='popup']) .seb-component-csat-container {
      margin-bottom: 0;
    }

    :host([type='card']) .seb-component-csat-close-button {
      display: none;
    }

    @media screen and (max-width: 768px) {
      .seb-component-csat-container {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .seb-component-csat-comment-container {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
    }

    .seb-component-csat-close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      border: none;
      color: #6a737d;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.3;
      width: 30px;
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 0;
      margin: 0;
      background-color: transparent;
    }

    .seb-component-csat-close-button:hover {
      filter: brightness(0.4);
    }

    .seb-component-csat-backdrop {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
    }

    .seb-component-csat-score-container {
      padding: 10px 0 0 0;
      width: 100%;
      max-width: 100%;
      margin: auto;
    }

    .seb-component-csat-score-title,
    .seb-component-csat-comment-title {
      font-size: 1.2rem;
      padding-bottom: 10px;
      font-family: 'Segoe UI', sans-serif;
      font-weight: 700;
      color: #242a30;
      width: 100%;
    }

    .seb-component-csat-comment-title {
      font-family: Segoe UI, sans-serif;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      color: #666666;
    }

    .seb-component-csat-score-list {
      list-style: none;
      display: flex;
      justify-content: center;
      align-content: center;
      gap: 10px;
    }

    .seb-component-csat-score-list
    .seb-component-csat-score-item
    .seb-component-csat-score-button:focus,
    .seb-component-csat-score-list
    .seb-component-csat-score-item
    .seb-component-csat-score-button.active,
    .seb-component-csat-score-list
    .seb-component-csat-score-item
    .seb-component-csat-score-button.active.loading:after {
      outline: 2px solid var(--seb-primary-color, #0b5ed7);
      border-color: var(--seb-primary-color, #0b5ed7);
    }

    .seb-component-csat-score-list .seb-component-csat-score-item {
      position: relative;
    }

    .seb-component-csat-score-item.row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
      position: relative;
    }

    .seb-component-csat-score-item.row .seb-component-csat-score-label {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      color: #111927;
      color-scheme: light;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    }

    .seb-component-csat-score-item.row .seb-component-csat-score-button {
      margin-bottom: 0;
      width: 25px;
      height: 25px;
    }

    .seb-component-csat-score-button {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid #e1e4e8;
      background-color: white;
      cursor: pointer;
      color: white;
      font-weight: bold;
      transition: all 0.2s ease-in-out;
      position: relative;
      margin-bottom: 10px;
    }

    .seb-component-csat-score-button.star {
      background-color: transparent;
      border: none;
    }

    .seb-component-csat-score-button:disabled.loading.active {
      cursor: not-allowed;
    }

    .seb-component-csat-score-button:focus {
      outline-offset: 2px;
    }

    .seb-component-csat-score-button.active:not(.loading) {
      outline-offset: 1px;
      outline-width: 4px !important;
    }

    .seb-component-csat-score-button.active.loading {
      outline: none !important;
    }

    .seb-component-csat-score-button.active.loading:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid var(--seb-primary-color, #0b5ed7);
      border-top-color: white !important;
      animation: spin 1s linear infinite;
    }

    .seb-component-csat-score-item.row .seb-component-csat-score-button.active.loading:after {
      width: 20px;
      height: 20px;
      border: 2px solid var(--seb-primary-color, #0b5ed7);
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .seb-component-csat-score-button:hover {
      filter: brightness(1.2);
    }

    .seb-component-csat-score-list {
      margin: 0;
      padding: 10px 20px;
      font-size: 12px;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #707478;
      min-height: 90px;
    }

    .seb-component-csat-score-list.list-column {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .seb-component-csat-score-label {
      text-align: center;
      font-size: 12px;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .seb-component-csat-score-list:not(.list-column) .seb-component-csat-score-label {
      position: absolute;
      left: 0;
      top: 60px;
    }

    .seb-component-csat-score-list.list-column .seb-component-csat-score-label.low,
    .seb-component-csat-score-list.list-column .seb-component-csat-score-label.high {
      display: none;
    }

    .seb-component-csat-divider {
      display: block;
      width: 100%;
      height: 1px;
      background-color: #e1e4e8;
      margin: 5px auto;
      max-width: 100%;
    }

    .seb-component-csat-comment-input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      gap: 20px;
      position: relative;
      box-sizing: border-box;
      max-width: 600px;
      margin: auto;
    }

    .seb-component-csat-comment-textarea {
      display: block;
      width: 100%;
      max-width: 600px;
      height: auto;
      border: 1px solid #e1e4e8;
      border-radius: 4px;
      resize: none;
      flex: 4;
      margin-bottom: 5px;
      box-sizing: border-box;
      padding: 5px 60px 5px 5px;
    }

    .seb-component-csat-comment-textarea::placeholder {
      font-size: 1rem;
    }

    .seb-component-csat-comment-textarea:focus {
      border: 1px solid var(--seb-primary-color, #0b5ed7);
      outline: none;
    }

    .seb-component-csat-comment-button {
      color: var(--seb-primary-color, #0b5ed7);
      background-color: transparent;
      border: none;
      flex: 1;
      max-width: 50px;
      max-height: 50px;
      position: absolute;
      right: 25px;
      top: 50%;
      transform: translateY(-50%);
    }

    .seb-component-csat-comment-button svg {
      pointer-events: none;
    }

    .seb-component-csat-comment-button:hover {
      filter: brightness(1.2);
      cursor: pointer;
    }

    .seb-component-csat-comment-button:focus svg path {
      stroke: var(--seb-primary-color, #0b5ed7);
      stroke-width: 1px;
      stroke-dashoffset: 2px;
      stroke-linejoin: round;
    }

    .seb-component-csat-comment-button:disabled {
      cursor: not-allowed;
      color: grey;
    }

    .seb-component-csat-comment-characters-counter {
      font-size: 0.9rem;
      color: #6a737d;
      font-weight: 600;
      line-height: 1;
      text-shadow: 0 1px 0 #fff;
      width: 100%;
      max-width: 600px;
      text-align: start;
      margin: auto;
    }

    .seb-component-csat-comment-characters-counter-value {
      font-weight: bold;
      margin-left: 4px;
    }

    @media only screen and (max-device-width: 667px) and (orientation: landscape) {
      .seb-component-csat-container {
        padding: 0;
      }

      .seb-component-csat-score-list {
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        gap: 4px;
      }

      .seb-component-csat-score-button {
        width: 28px;
        height: 28px;
      }

      .seb-component-csat-score-label {
        display: none;
      }

      .seb-component-csat-score-button.active.loading:after {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (max-width: 600px) {
      .seb-component-csat-container {
        padding: 0;
      }

      .seb-component-csat-score-list {
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        gap: 4px;
      }

      .seb-component-csat-score-button {
        width: 28px;
        height: 28px;
      }

      .seb-component-csat-score-label {
        display: none;
      }

      .seb-component-csat-score-button.active.loading:after {
        width: 20px;
        height: 20px;
      }
    }
  `,o([s({type:Boolean,reflect:!0})],l.prototype,"show",void 0),o([s({type:Boolean,reflect:!0})],l.prototype,"autoClose",void 0),o([s({type:String})],l.prototype,"apiUrl",void 0),o([s({type:String})],l.prototype,"canClose",void 0),o([s({type:String,reflect:!0})],l.prototype,"type",void 0),o([s({type:String})],l.prototype,"closeText",void 0),o([s({type:String})],l.prototype,"position",void 0),o([s({type:String})],l.prototype,"scoreTitle",void 0),o([s({type:Boolean,reflect:!0})],l.prototype,"scoreHideValue",void 0),o([s({type:String})],l.prototype,"icon",void 0),o([s({type:Boolean,reflect:!0})],l.prototype,"showTitle",void 0),o([s({type:Number})],l.prototype,"scoreRange",void 0),o([s({type:Boolean})],l.prototype,"scoreRangeStartAtZero",void 0),o([s({type:String})],l.prototype,"scoreColor",void 0),o([s({type:String})],l.prototype,"lowScoreLabel",void 0),o([s({type:String})],l.prototype,"highScoreLabel",void 0),o([s({type:String})],l.prototype,"commentLabel",void 0),o([s({type:String})],l.prototype,"commentPlaceholder",void 0),o([s({type:String})],l.prototype,"commentButtonLabel",void 0),o([s({type:String})],l.prototype,"commentRemainingCharactersLabel",void 0),o([s({type:Number})],l.prototype,"commentMaxSize",void 0),o([s({type:Number})],l.prototype,"score",void 0),o([s({type:String})],l.prototype,"onlyComment",void 0),o([s({type:String})],l.prototype,"comment",void 0),o([s({type:Boolean})],l.prototype,"isSaving",void 0),o([s({type:Boolean})],l.prototype,"showComment",void 0),o([s({type:Array})],l.prototype,"scores",void 0),o([s({type:Boolean})],l.prototype,"isSavingScore",void 0),o([s({type:Boolean})],l.prototype,"disableCommentDivider",void 0),o([s({type:Number})],l.prototype,"lowCommentSize",void 0),o([s({type:Number})],l.prototype,"mediumCommentSize",void 0),o([s({type:Number})],l.prototype,"highCommentSize",void 0),o([s({type:String})],l.prototype,"answerId",void 0),o([s({type:String})],l.prototype,"context",void 0),o([s({type:Array})],l.prototype,"checks",void 0),o([s()],l.prototype,"client",void 0),o([s()],l.prototype,"createMutation",void 0),o([s()],l.prototype,"updateMutation",void 0),o([i("#seb-component-csat-comment-textarea")],l.prototype,"_textarea",void 0),window.customElements.define("seb-csat",l);
