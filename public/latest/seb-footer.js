import{i as o,_ as t,n as e,s as r,x as i}from"./48f1a509.js";class s extends r{constructor(){super(...arguments),this.logo="",this.facebook="",this.instagram="",this.youtube="",this.linkedin="",this.copyright="Copyright © Grupo SEB 2024 | Todos os direitos reservados",this.btnVoltaTopo="texto",this.hideBtnTopo=!1,this.divider=!1,this.workWithUs="",this.businessUnit="",this.conduct=""}render(){return i`
      <footer>
        <div class="footer-container">
          <div class="first-row">
            <div class="logo desktop-only">
              ${this.logo?i`<img src=${this.logo} alt="logo footer" />`:i`<img
                    src="https://prd-gruposeb-escolasatualizadas.s3.amazonaws.com/prd-escolaseb/media/filer_public/5b/37/5b37a144-0482-4049-ac78-081d546ae5e4/eseblogopreferencialnegativoprimauriorgb.png"
                    alt="logo footer"
                  />`}
                <slot name="after-logo" class="after-logo"></slot>
            </div>

            <div class="buttons">
              ${this.hideBtnTopo?i``:i`
                    <a
                      href="#"
                      class=${"icone"===this.btnVoltaTopo?"roll-top-ico":"roll-top"}
                      aria-label="Voltar ao topo"
                    >
                      <svg
                        width="55"
                        height="55"
                        viewBox="0 0 55 55"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <filter id="a">
                            <feColorMatrix
                              in="SourceGraphic"
                              values="0 0 0 0 0.227451 0 0 0 0 0.568627 0 0 0 0 0.247059 0 0 0 1.000000 0"
                            ></feColorMatrix>
                          </filter>
                        </defs>
                        <g
                          transform="translate(-1328 -297)"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            transform="rotate(90 543 840)"
                            stroke="#28334A"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M37.02 27.384H18.686M27.5 36.903l-9.167-9.166L27.5 18.57"
                            ></path>
                            <circle
                              transform="rotate(90 27.5 27.5)"
                              cx="27.5"
                              cy="27.5"
                              r="26.5"
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </a>
                  `}

              <div class="logo mobile-only">
                ${this.logo?i`<img src=${this.logo} alt="logo footer" />`:i`<img
                      src="https://prd-gruposeb-escolasatualizadas.s3.amazonaws.com/prd-escolaseb/media/filer_public/5b/37/5b37a144-0482-4049-ac78-081d546ae5e4/eseblogopreferencialnegativoprimauriorgb.png"
                      alt="logo footer"
                    />`}
                <slot name="menu-mobile" class="menu"></slot>
                <slot name="after-logo-mobile" class="after-logo"></slot>
              </div>

              <div class="socials">
                ${this.facebook?i`
                      <a
                        href=${this.facebook}
                        target="_blank"
                        rel="noreferer noopener"
                        aria-label="instance.social"
                        class=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="85.693"
                          height="85.697"
                          viewBox="0 0 22.673 22.674"
                        >
                          <path
                            fill="currentColor"
                            d="M16.485 12.72l.615-4.004h-3.842V6.117c0-1.095.536-2.163 2.257-2.163h1.747V.544s-1.585-.27-3.1-.27c-3.165 0-5.233 1.918-5.233 5.39v3.052H5.412v4.004h3.517v9.68h4.329v-9.68z"
                          ></path></svg
                      ></a>
                    `:""}
                ${this.instagram?i`
                      <a
                        href=${this.instagram}
                        target="_blank"
                        rel="noreferer noopener"
                        aria-label="instance.social"
                        class=""
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="85.693"
                          height="85.697"
                          viewBox="0 0 22.673 22.674"
                        >
                          <path
                            fill="currentColor"
                            d="M11.34 5.697a5.631 5.631 0 00-5.641 5.64 5.631 5.631 0 005.64 5.64 5.631 5.631 0 005.64-5.64 5.631 5.631 0 00-5.64-5.64zm0 9.307a3.674 3.674 0 01-3.668-3.667A3.67 3.67 0 0111.34 7.67a3.67 3.67 0 013.667 3.667 3.674 3.674 0 01-3.667 3.667zm7.186-9.538c0 .732-.59 1.316-1.316 1.316a1.316 1.316 0 111.316-1.316zm3.735 1.335c-.083-1.762-.486-3.323-1.777-4.609C19.198.906 17.637.503 15.874.415c-1.815-.103-7.26-.103-9.076 0C5.041.498 3.48.901 2.19 2.187.9 3.473.5 5.034.412 6.797c-.103 1.816-.103 7.26 0 9.076.084 1.762.486 3.323 1.777 4.61 1.291 1.285 2.847 1.688 4.61 1.776 1.816.103 7.26.103 9.076 0 1.762-.083 3.323-.486 4.61-1.777 1.285-1.286 1.688-2.847 1.776-4.61.103-1.815.103-7.254 0-9.07zm-2.346 11.02a3.712 3.712 0 01-2.091 2.092c-1.448.574-4.885.442-6.485.442-1.6 0-5.041.127-6.484-.442a3.712 3.712 0 01-2.092-2.091c-.574-1.448-.441-4.885-.441-6.485 0-1.6-.128-5.041.441-6.484A3.712 3.712 0 014.855 2.76c1.448-.574 4.884-.441 6.484-.441 1.6 0 5.042-.128 6.485.441a3.712 3.712 0 012.09 2.092c.575 1.448.443 4.884.443 6.484 0 1.6.132 5.041-.442 6.485z"
                          ></path></svg
                      ></a>
                    `:""}
                ${this.youtube?i`
                      <a
                        href=${this.youtube}
                        target="_blank"
                        rel="noreferer noopener"
                        aria-label="instance.social"
                        class=""
                        ><svg
                          xmlns:dc="http://purl.org/dc/elements/1.1/"
                          xmlns:cc="http://creativecommons.org/ns#"
                          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                          xmlns:svg="http://www.w3.org/2000/svg"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                          width="19px"
                          height="14px"
                          viewBox="0 0 19 14"
                          version="1.1"
                          id="svg5"
                          sodipodi:docname="youtube.svg"
                          inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"
                        >
                          <defs id="defs9"></defs>
                          <path
                            d="m 9.595881,0.32416 c 0.02082,5e-5 0.04487,1.2e-4 0.07198,2.1e-4 l 0.32232,0.002 c 1.452984,0.009 5.711596,0.0615 6.937096,0.36078 0.827535,0.23413 1.466637,0.893 1.675455,1.72728 0.273973,1.51887 0.406963,3.05982 0.397273,4.60318 0.0055,1.52029 -0.12751,3.03791 -0.397273,4.53409 -0.208818,0.83428 -0.84792,1.49315 -1.675455,1.72727 -1.336909,0.35755 -6.283472,0.3933 -7.259416,0.39688 H 9.332148 C 8.356205,13.67185 3.409641,13.63655 2.072732,13.27897 1.26267,13.05732 0.627307,12.42851 0.397277,11.62079 0.123304,10.10191 -0.009686,8.56097 5e-6,7.01761 -0.007595,5.48578 0.125417,3.9565 0.397277,2.44897 0.606095,1.61469 1.245197,0.95582 2.072732,0.7217 3.298232,0.39395 7.556844,0.33659 9.009828,0.32655 l 0.32232,-0.002 c 0.02711,-10e-5 0.05116,-1.7e-4 0.07197,-2.3e-4 z M 7.556818,4.1931 v 5.64818 l 4.965909,-2.82409 z"
                            id="Combined-Shape"
                            inkscape:connector-curvature="0"
                          ></path></svg
                      ></a>
                    `:""}
                ${this.linkedin?i`
                      <a
                        href=${this.linkedin}
                        target="_blank"
                        rel="noreferer noopener"
                        ><svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.3462 16.3985V16.3978H16.3502V10.4173C16.3502 7.49154 15.7309 5.23779 12.368 5.23779C10.7514 5.23779 9.66649 6.14011 9.22358 6.99554H9.17682V5.51093H5.98828V16.3978H9.30842V11.007C9.30842 9.58765 9.57297 8.21516 11.3012 8.21516C13.004 8.21516 13.0294 9.83497 13.0294 11.0981V16.3985H16.3462Z"
                            fill="#0064B4"
                          ></path>
                          <path
                            d="M0.462402 5.57568H3.57098V16.3982H0.462402V5.57568Z"
                            fill="#0064B4"
                          ></path>
                          <path
                            d="M2.01638 0.164551C0.967669 0.164551 0.116699 1.06931 0.116699 2.18431C0.116699 3.29931 0.967669 4.22299 2.01638 4.22299C3.0651 4.22299 3.91607 3.29931 3.91607 2.18431C3.91541 1.06931 3.06444 0.164551 2.01638 0.164551V0.164551Z"
                            fill="#0064B4"
                          ></path></svg
                      ></a>
                    `:""}
              </div>
            </div>
          </div>

          <div class="clear"></div>

          <div class="second-row desktop-only">
            <slot name="menu" class="menu"></slot>
          </div>

          ${this.divider?i`<div class="divider"></div>`:""}

          <div class="third-row">
            <div class="copyright">
              <p>${this.copyright}</p>
              <div>
                <slot name="copyright"></slot>
                <slot name="conduct"></slot>
                <slot name="workWithUs"></slot>
                <slot name="businessUnit"></slot>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `}}s.styles=o`
    :host {
      font-family: var(--seb-font, monospace);
    }

    .mobile-only {
      display: none;
    }

    .desktop-only {
      display: flex;
    }

    footer {
      background-color: var(--seb-footer-bg-color, #54565a);
      padding-top: var(--seb-footer-pd-top, 50px);
    }

    .footer-container {
      width: 100%;
      max-width: var(--seb-max-width, 1284px);
      margin: 0 auto;
    }

    .clear {
      clear: var(--seb-footer-clear, both);
    }

    .footer-container .first-row {
      width: 100%;
      height: 100%;
    }

    .footer-container .first-row .logo {
      float: left;
    }

    .footer-container .first-row .logo.mobile-only {
      justify-content: var(--seb-footer-logo-mobile-justify, center);
    }

    .footer-container .first-row .logo img {
      display: block;
      height: var(--seb-footer-img-height, 61px);
      width: auto;
    }

    .footer-container .first-row .buttons {
      float: right;
      display: flex;
      flex-direction: column;
      align-items: var(--seb-footer-buttons-align, center);
    }

    .footer-container .first-row .buttons > a.roll-top {
      display: block;
      text-align: center;
      padding-left: 15px;
      padding-bottom: 20px;
    }

    .footer-container .first-row .buttons > a.roll-top svg {
      display: none;
    }

    .footer-container .first-row .buttons > a.roll-top::after {
      color: var(--seb-primary-color, #f2bb24);
      font-size: 15px;
      font-weight: 600;
      line-height: 20px;
      text-decoration: underline;
      padding-right: 20px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIRJREFUeNpiYCABfNqtMh+ESdHDSIrhQCoByl3A53onkWoWoBnOQIoljGQaTrQljBQYTpQljBQaTtASRhINXwClE4i1hJEUw2EGEKMGqwWkaCRWLSM5hpOih5Fcw4m1hJESw4mxhAlIGFBiOAhA1S7AImUAssARiC+QazgeS0BmOgIEGACU1V+ig9fqGwAAAABJRU5ErkJggg==')
        no-repeat right top 50%;
      background-size: 12px auto;
      content: 'Voltar ao topo';
    }

    .footer-container .first-row .buttons > a.roll-top-ico {
      display: block;
      text-align: right;
      padding-left: 15px;
      padding-bottom: 20px;
    }

    .footer-container .first-row .buttons > a.roll-top-ico svg g {
      transition: stroke 0.25s ease-in-out;
      stroke: var(--seb-primary-color);
    }

    .footer-container .first-row .buttons > a.roll-top-ico:hover svg g {
      stroke: var(--seb-secondary-color);
    }

    .footer-container .first-row .buttons .socials {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .footer-container .first-row .buttons .socials a {
      border: var(--seb-footer-border, none);
      background-color: var(--seb-footer-socials-ico-bg, #fff);
      position: relative;
      display: inline-block;
      width: 44px;
      height: 44px;
      border-radius: 50%;
    }

    .footer-container .first-row .buttons .socials a:not(:first-child) {
      margin-left: 20px;
    }

    .footer-container .first-row .buttons .socials a svg {
      position: absolute;
      height: 20px;
      width: 20px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    .footer-container .first-row .buttons .socials a svg path {
      fill: var(--seb-footer-socials-ico-color, #54565a);
    }

    .footer-container .second-row {
      padding: var(--seb-footer-second-row-padding, 25px 0);
    }

    .footer-container .second-row .menu a {
      color: #fff;
      display: block;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
      text-decoration: none;
    }

    .footer-container .second-row .menu a:last-child {
      margin-bottom: 0;
    }

    .footer-container .third-row {
      display: flex;
      flex-direction: row;
    }

    .footer-container .third-row .copyright {
      color: var(--seb-footer-copyright-color, rgba(255, 255, 255, 0.5));
      width: 100%;
      display: flex;
      align-items: var(--seb-footer-copyright-align, center);
      justify-content: var(--seb-footer-copyright-justify);
      border-top: var(--seb-footer-copyright-border-top);
    }

    .footer-container .third-row .copyright p {
      display: inline-block;
      font-weight: 400;
      font-size: 14px;
      padding-right: 0;
    }

    .divider {
      width: 100%;
      border-top: 1px solid var(--seb-footer-divider-color, #b0b0b0);
    }

    @media (max-width: 940px) {
      .mobile-only {
        display: flex;
      }

      .desktop-only {
        display: none;
      }

      footer {
        height: 100%;
      }

      .footer-container {
        width: 80%;
        margin: 0 auto;
        padding: 0;
      }

      .footer-container .first-row {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        padding-bottom: 50px;
      }

      .footer-container .first-row .logo,
      .footer-container .first-row .buttons {
        float: unset;
        width: 100%;
      }

      .footer-container .first-row .buttons > * {
        padding: var(--seb-footer-buttons-padding, 30px 0);
      }

      .logo.mobile-only {
        display: grid;
        place-items: var(--seb-footer-logo-grid, unset);
        justify-items: var(--seb-footer-logo-mobile-justify, center);
      }

      .footer-container .first-row .logo.mobile-only img {
        padding-bottom: 50px;
      }

      .footer-container .first-row .buttons .socials {
        justify-content: center;
      }

      .footer-container .second-row > {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .footer-container .third-row .copyright {
        flex-direction: column-reverse;
      }

      .footer-container .third-row .copyright p {
        display: block;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-right: 0;
        text-align: center;
        padding-top: 61px;
        padding-bottom: var(--seb-footer-pd-bottom);
      }
    }
  `,t([e({type:String})],s.prototype,"logo",void 0),t([e({type:String})],s.prototype,"facebook",void 0),t([e({type:String})],s.prototype,"instagram",void 0),t([e({type:String})],s.prototype,"youtube",void 0),t([e({type:String})],s.prototype,"linkedin",void 0),t([e({type:String})],s.prototype,"copyright",void 0),t([e({type:String})],s.prototype,"btnVoltaTopo",void 0),t([e({type:Boolean,reflect:!0})],s.prototype,"hideBtnTopo",void 0),t([e({type:Boolean,reflect:!0})],s.prototype,"divider",void 0),t([e({type:String})],s.prototype,"workWithUs",void 0),t([e({type:String})],s.prototype,"businessUnit",void 0),t([e({type:String})],s.prototype,"conduct",void 0),window.customElements.define("seb-footer",s);
