import{i as e,_ as i,n as a,s as o,x as t}from"./48f1a509.js";class r extends o{constructor(){super(...arguments),this.logo="",this.navItems=[]}__treatedNavItems(){return JSON.parse(JSON.stringify(this.navItems||[]))}__openMobileNav(){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".mobile-nav");i&&(i.style.display="flex")}__closeMobileNav(){var e;const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".mobile-nav");i&&(i.style.display="none")}static __handleKeyDown(e){"Enter"!==e.key&&"Escape"!==e.key||(e.preventDefault(),e.stopPropagation())}render(){const e=this.__treatedNavItems()||[];return t`
      <header class="seb-header">
        <div class="header-container">
          <a href="#">
            ${this.logo?t`<img src=${this.logo} alt="logo" />`:t`<img
                  src="https://prd-gruposeb-escolasatualizadas.s3.amazonaws.com/prd-escolaseb/media/filer_public_thumbnails/filer_public/e0/7e/e07e5651-ece2-4ce5-b938-2d515f706e94/eseblogopreferencialpositivorgb.png__0x61_subsampling-2.png"
                  alt="logo"
                />`}
          </a>
          ${e?t`
                <div class="desktop-nav">
                  ${e.map((e=>t`
                      <li>
                        <a href=${e.url} target=${e.target||"_self"}>${e.title}</a>
                      </li>
                    `))}
                </div>
                <div 
                  class="menu-container"
                  @click=${this.__openMobileNav}
                  @keydown=${r.__handleKeyDown}
                >
                  <div class="open-menu">
                    Menu
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21.6" height="17.723" viewBox="0 0 5.715 4.689"><defs><filter id="a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 0.156863 0 0 0 0 0.200000 0 0 0 0 0.290196 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g stroke-linecap="round" stroke-linejoin="round" transform="matrix(.26458 0 0 .26458 -360.415 -19.616)"><g stroke="#000" stroke-width="2"><path d="M1364 83h18M1364 75.615h18M1364 90.385h18"></path></g></g></svg>
                </div>
                <div class="mobile-nav">
                  <div 
                    class="close-menu"
                    @click=${this.__closeMobileNav}
                    @keydown=${r.__handleKeyDown}
                    tabindex="0"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs><filter id="a"><feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></feColorMatrix></filter></defs><g transform="translate(-1358 -71)" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g fill-rule="nonzero" stroke="#036" stroke-width="2"><path d="M1362.138 75.139l15.158 15.158M1362.139 90.297l15.158-15.158"></path></g></g></svg>
                  </div>
                  <div class="mobile-nav-items">
                    <hr class="mobile-nav-separator" />
                    ${e.map((e=>t`
                        <a href=${e.url} target=${e.target||"_self"}>${e.title}</a>
                      `))}
                    <hr class="mobile-nav-separator" />
                  </div>
                  <div class="mobile-nav-logo">
                    ${this.logo?t`<img src=${this.logo} alt="logo" />`:t`<img
                          src="https://prd-gruposeb-escolasatualizadas.s3.amazonaws.com/prd-escolaseb/media/filer_public_thumbnails/filer_public/e0/7e/e07e5651-ece2-4ce5-b938-2d515f706e94/eseblogopreferencialpositivorgb.png__0x61_subsampling-2.png"
                          alt="logo"
                        />`}
                  </div>
                </div>
              `:t``}
        </div>
      </header>
    `}}r.styles=e`
    :host header {
      width: 100%;
      height: 100px;
      // height: var(--seb-header-height, 100px);
      background-color: var(--seb-header-bg-color, #fff);
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: var(--seb-header-box-shadow, 0px 3px 6px rgba(0, 0, 0, 0.16));
      z-index: 999;
    }

    header > div:first-child {
      height: 100%;
      width: 100%;
      max-width: var(--seb-max-width, 1284px);
      margin: 0 auto;
      padding-left: var(--seb-header-padding-left, 2vw);
      display: flex;
      align-items: center;
      position: relative;
    }

    header a {
      position: var(--seb-header-img-position);
      top: var(--seb-header-img-position-top);
    }

    header img {
      display: block;
      height: var(--seb-header-img-height, 61px);
      width: auto;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
    }

    header .desktop-nav {
      display: flex;
    }

    header .desktop-nav li {
      list-style: none;
      margin-right: 30px;
      text-decoration: none;
      padding: 27.25px 0 27.25px 0;

    }

    header .desktop-nav li:last-child {
      margin-right: 60px;
    }

    header .desktop-nav li a {
      color: var(--seb-header-nav-items-color, #414042);
      font-weight: var(--seb-header-nav-font-weight, 500);
      transition: color .25s ease-in-out;
      font-size: 1rem;
      line-height: 1rem;
      text-decoration: none;
    }

    header .menu-container {
      display: none;
    }

    header .mobile-nav {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: var(--seb-header-bg-color, #fff);
      flex-direction: column;
      align-items: center;
      transition: display 0.5s ease-in-out;
    }

    header .mobile-nav .close-menu{
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding-top: 3vh;
    }

    header .mobile-nav .close-menu svg{
      padding-right: 4vw;
    }

    header .mobile-nav .mobile-nav-items {
      display: flex;
      flex-direction: column;
      width: -webkit-fill-available;
      padding-top: 6vH;
      padding-left: 4vw;
      padding-right: 4vw;

    }

    header .mobile-nav .mobile-nav-items a {
      color: var(--seb-header-nav-items-color, #414042);
      font-weight: var(--seb-header-nav-font-weight, 500);
      font-size: var(--seb-header-nav-font-size, 2rem);
      line-height: var(--seb-header-nav-line-height, 2rem);
      text-decoration: none;
      margin-bottom: 20px;
    }

    header .mobile-nav .mobile-nav-separator {
      width: 100%;
      border: 1px solid var(--seb-header-nav-divider-color, #50AF31);
      margin: 1vh 0;
    }

    header .mobile-nav-logo {
      position: absolute;
      bottom: 8vh;
      left: 3vw;
    }

    @media (max-width: 940px) {
      :host header {
        height: 80px;
      }

      header > div:first-child {
        max-width: 93%;
      }

      header a {
        position: var(--seb-header-img-position);
        top: var(--seb-header-img-position-top);
      }

      header img {
        height: var(--seb-header-img-height, 51px);
      }

      header .desktop-nav {
        display: none;
      }

      header .menu-container {    
        display: flex;
        align-items: center;
      }
      
      header .menu-container .open-menu {
        color: var(--seb-header-nav-color, #000);
        font-weight: var(--seb-header-nav-font-weight, 500);
        font-size: 1rem;
        line-height: 1rem;
        cursor: pointer;
        margin-right: 10px;
      }
    }
  `,i([a({type:String})],r.prototype,"logo",void 0),i([a({type:Array})],r.prototype,"navItems",void 0),window.customElements.define("seb-header",r);
