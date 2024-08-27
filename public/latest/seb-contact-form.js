import{i as a,_ as i,n as e,s,x as o}from"./9bde2683.js";import{t as l}from"./5330295c.js";import"./seb-textfield.js";import"./seb-autocomplete.js";import"./seb-button.js";import"./seb-checkbox.js";import"./seb-crm-schedule-datepicker.js";import"./seb-message.js";import"./31b20069.js";const n=[{nome_pais:"Afeganistão",sigla:"AF"},{nome_pais:"África do Sul",sigla:"ZA"},{nome_pais:"Albânia",sigla:"AL"},{nome_pais:"Alemanha",sigla:"DE"},{nome_pais:"Andorra",sigla:"AD"},{nome_pais:"Angola",sigla:"AO"},{nome_pais:"Anguilla",sigla:"AI"},{nome_pais:"Antártida",sigla:"AQ"},{nome_pais:"Antígua e Barbuda",sigla:"AG"},{nome_pais:"Arábia Saudita",sigla:"SA"},{nome_pais:"Argélia",sigla:"DZ"},{nome_pais:"Argentina",sigla:"AR"},{nome_pais:"Armênia",sigla:"AM"},{nome_pais:"Aruba",sigla:"AW"},{nome_pais:"Austrália",sigla:"AU"},{nome_pais:"Áustria",sigla:"AT"},{nome_pais:"Azerbaijão",sigla:"AZ"},{nome_pais:"Bahamas",sigla:"BS"},{nome_pais:"Bahrein",sigla:"BH"},{nome_pais:"Bangladesh",sigla:"BD"},{nome_pais:"Barbados",sigla:"BB"},{nome_pais:"Belarus",sigla:"BY"},{nome_pais:"Bélgica",sigla:"BE"},{nome_pais:"Belize",sigla:"BZ"},{nome_pais:"Benin",sigla:"BJ"},{nome_pais:"Bermudas",sigla:"BM"},{nome_pais:"Bolívia",sigla:"BO"},{nome_pais:"Bósnia-Herzegóvina",sigla:"BA"},{nome_pais:"Botsuana",sigla:"BW"},{nome_pais:"Brasil",sigla:"BR"},{nome_pais:"Brunei",sigla:"BN"},{nome_pais:"Bulgária",sigla:"BG"},{nome_pais:"Burkina Fasso",sigla:"BF"},{nome_pais:"Burundi",sigla:"BI"},{nome_pais:"Butão",sigla:"BT"},{nome_pais:"Cabo Verde",sigla:"CV"},{nome_pais:"Camarões",sigla:"CM"},{nome_pais:"Camboja",sigla:"KH"},{nome_pais:"Canadá",sigla:"CA"},{nome_pais:"Canárias",sigla:"IC"},{nome_pais:"Cazaquistão",sigla:"KZ"},{nome_pais:"Ceuta e Melilla",sigla:"EA"},{nome_pais:"Chade",sigla:"TD"},{nome_pais:"Chile",sigla:"CL"},{nome_pais:"China",sigla:"CN"},{nome_pais:"Chipre",sigla:"CY"},{nome_pais:"Cingapura",sigla:"SG"},{nome_pais:"Colômbia",sigla:"CO"},{nome_pais:"Comores",sigla:"KM"},{nome_pais:"Congo",sigla:"CG"},{nome_pais:"Coréia do Norte",sigla:"KP"},{nome_pais:"Coréia do Sul",sigla:"KR"},{nome_pais:"Costa do Marfim",sigla:"CI"},{nome_pais:"Costa Rica",sigla:"CR"},{nome_pais:"Croácia",sigla:"HR"},{nome_pais:"Cuba",sigla:"CU"},{nome_pais:"Curaçao",sigla:"CW"},{nome_pais:"Diego Garcia",sigla:"DG"},{nome_pais:"Dinamarca",sigla:"DK"},{nome_pais:"Djibuti",sigla:"DJ"},{nome_pais:"Dominica",sigla:"DM"},{nome_pais:"Egito",sigla:"EG"},{nome_pais:"El Salvador",sigla:"SV"},{nome_pais:"Emirados Árabes Unidos",sigla:"AE"},{nome_pais:"Equador",sigla:"EC"},{nome_pais:"Eritréia",sigla:"ER"},{nome_pais:"Eslováquia",sigla:"SK"},{nome_pais:"Eslovênia",sigla:"SI"},{nome_pais:"Espanha",sigla:"ES"},{nome_pais:"Estados Unidos",sigla:"US"},{nome_pais:"Estônia",sigla:"EE"},{nome_pais:"Etiópia",sigla:"ET"},{nome_pais:"Fiji",sigla:"FJ"},{nome_pais:"Filipinas",sigla:"PH"},{nome_pais:"Finlândia",sigla:"FI"},{nome_pais:"França",sigla:"FR"},{nome_pais:"Gabão",sigla:"GA"},{nome_pais:"Gâmbia",sigla:"GM"},{nome_pais:"Gana",sigla:"GH"},{nome_pais:"Geórgia",sigla:"GE"},{nome_pais:"Gibraltar",sigla:"GI"},{nome_pais:"Grã-Bretanha (Reino Unido, UK)",sigla:"GB"},{nome_pais:"Granada",sigla:"GD"},{nome_pais:"Grécia",sigla:"GR"},{nome_pais:"Groelândia",sigla:"GL"},{nome_pais:"Guadalupe",sigla:"GP"},{nome_pais:"Guam (Território dos Estados Unidos)",sigla:"GU"},{nome_pais:"Guatemala",sigla:"GT"},{nome_pais:"Guernsey",sigla:"GG"},{nome_pais:"Guiana",sigla:"GY"},{nome_pais:"Guiana Francesa",sigla:"GF"},{nome_pais:"Guiné",sigla:"GN"},{nome_pais:"Guiné Equatorial",sigla:"GQ"},{nome_pais:"Guiné-Bissau",sigla:"GW"},{nome_pais:"Haiti",sigla:"HT"},{nome_pais:"Holanda",sigla:"NL"},{nome_pais:"Honduras",sigla:"HN"},{nome_pais:"Hong Kong",sigla:"HK"},{nome_pais:"Hungria",sigla:"HU"},{nome_pais:"Iêmen",sigla:"YE"},{nome_pais:"Ilha Bouvet",sigla:"BV"},{nome_pais:"Ilha de Ascensão",sigla:"AC"},{nome_pais:"Ilha de Clipperton",sigla:"CP"},{nome_pais:"Ilha de Man",sigla:"IM"},{nome_pais:"Ilha Natal",sigla:"CX"},{nome_pais:"Ilha Pitcairn",sigla:"PN"},{nome_pais:"Ilha Reunião",sigla:"RE"},{nome_pais:"Ilhas Aland",sigla:"AX"},{nome_pais:"Ilhas Cayman",sigla:"KY"},{nome_pais:"Ilhas Cocos",sigla:"CC"},{nome_pais:"Ilhas Cook",sigla:"CK"},{nome_pais:"Ilhas Faroes",sigla:"FO"},{nome_pais:"Ilhas Geórgia do Sul e Sandwich do Sul",sigla:"GS"},{nome_pais:"Ilhas Heard e McDonald (Território da Austrália)",sigla:"HM"},{nome_pais:"Ilhas Malvinas",sigla:"FK"},{nome_pais:"Ilhas Marianas do Norte",sigla:"MP"},{nome_pais:"Ilhas Marshall",sigla:"MH"},{nome_pais:"Ilhas Menores dos Estados Unidos",sigla:"UM"},{nome_pais:"Ilhas Norfolk",sigla:"NF"},{nome_pais:"Ilhas Salomão",sigla:"SB"},{nome_pais:"Ilhas Seychelles",sigla:"SC"},{nome_pais:"Ilhas Tokelau",sigla:"TK"},{nome_pais:"Ilhas Turks e Caicos",sigla:"TC"},{nome_pais:"Ilhas Virgens (Estados Unidos)",sigla:"VI"},{nome_pais:"Ilhas Virgens (Inglaterra)",sigla:"VG"},{nome_pais:"Índia",sigla:"IN"},{nome_pais:"Indonésia",sigla:"ID"},{nome_pais:"Irã",sigla:"IR"},{nome_pais:"Iraque",sigla:"IQ"},{nome_pais:"Irlanda",sigla:"IE"},{nome_pais:"Islândia",sigla:"IS"},{nome_pais:"Israel",sigla:"IL"},{nome_pais:"Itália",sigla:"IT"},{nome_pais:"Jamaica",sigla:"JM"},{nome_pais:"Japão",sigla:"JP"},{nome_pais:"Jersey",sigla:"JE"},{nome_pais:"Jordânia",sigla:"JO"},{nome_pais:"Kiribati",sigla:"KI"},{nome_pais:"Kosovo",sigla:"XK"},{nome_pais:"Kuait",sigla:"KW"},{nome_pais:"Laos",sigla:"LA"},{nome_pais:"Lesoto",sigla:"LS"},{nome_pais:"Letônia",sigla:"LV"},{nome_pais:"Líbano",sigla:"LB"},{nome_pais:"Libéria",sigla:"LR"},{nome_pais:"Líbia",sigla:"LY"},{nome_pais:"Liechtenstein",sigla:"LI"},{nome_pais:"Lituânia",sigla:"LT"},{nome_pais:"Luxemburgo",sigla:"LU"},{nome_pais:"Macau",sigla:"MO"},{nome_pais:"Macedônia (República Yugoslava)",sigla:"MK"},{nome_pais:"Madagascar",sigla:"MG"},{nome_pais:"Malásia",sigla:"MY"},{nome_pais:"Malaui",sigla:"MW"},{nome_pais:"Maldivas",sigla:"MV"},{nome_pais:"Mali",sigla:"ML"},{nome_pais:"Malta",sigla:"MT"},{nome_pais:"Marrocos",sigla:"MA"},{nome_pais:"Martinica",sigla:"MQ"},{nome_pais:"Maurício",sigla:"MU"},{nome_pais:"Mauritânia",sigla:"MR"},{nome_pais:"Mayotte",sigla:"YT"},{nome_pais:"México",sigla:"MX"},{nome_pais:"Micronésia",sigla:"FM"},{nome_pais:"Moçambique",sigla:"MZ"},{nome_pais:"Moldova",sigla:"MD"},{nome_pais:"Mônaco",sigla:"MC"},{nome_pais:"Mongólia",sigla:"MN"},{nome_pais:"Montenegro",sigla:"ME"},{nome_pais:"Montserrat",sigla:"MS"},{nome_pais:"Myanma",sigla:"MM"},{nome_pais:"Namíbia",sigla:"NA"},{nome_pais:"Nauru",sigla:"NR"},{nome_pais:"Nepal",sigla:"NP"},{nome_pais:"Nicarágua",sigla:"NI"},{nome_pais:"Níger",sigla:"NE"},{nome_pais:"Nigéria",sigla:"NG"},{nome_pais:"Niue",sigla:"NU"},{nome_pais:"Noruega",sigla:"NO"},{nome_pais:"Nova Caledônia",sigla:"NC"},{nome_pais:"Nova Zelândia",sigla:"NZ"},{nome_pais:"Omã",sigla:"OM"},{nome_pais:"Países Baixos Caribenhos",sigla:"BQ"},{nome_pais:"Palau",sigla:"PW"},{nome_pais:"Palestina",sigla:"PS"},{nome_pais:"Panamá",sigla:"PA"},{nome_pais:"Papua-Nova Guiné",sigla:"PG"},{nome_pais:"Paquistão",sigla:"PK"},{nome_pais:"Paraguai",sigla:"PY"},{nome_pais:"Peru",sigla:"PE"},{nome_pais:"Polinésia Francesa",sigla:"PF"},{nome_pais:"Polônia",sigla:"PL"},{nome_pais:"Porto Rico",sigla:"PR"},{nome_pais:"Portugal",sigla:"PT"},{nome_pais:"Qatar",sigla:"QA"},{nome_pais:"Quênia",sigla:"KE"},{nome_pais:"Quirguistão",sigla:"KG"},{nome_pais:"República Centro-Africana",sigla:"CF"},{nome_pais:"República Democrática do Congo",sigla:"CD"},{nome_pais:"República Dominicana",sigla:"DO"},{nome_pais:"República Tcheca",sigla:"CZ"},{nome_pais:"Romênia",sigla:"RO"},{nome_pais:"Ruanda",sigla:"RW"},{nome_pais:"Rússia (antiga URSS) - Federação Russa",sigla:"RU"},{nome_pais:"Saara Ocidental",sigla:"EH"},{nome_pais:"Saint-Pierre e Miquelon",sigla:"PM"},{nome_pais:"Samoa Americana",sigla:"AS"},{nome_pais:"Samoa Ocidental",sigla:"WS"},{nome_pais:"San Marino",sigla:"SM"},{nome_pais:"Santa Helena",sigla:"SH"},{nome_pais:"Santa Lúcia",sigla:"LC"},{nome_pais:"São Bartolomeu",sigla:"BL"},{nome_pais:"São Cristóvão e Névis",sigla:"KN"},{nome_pais:"São Martim",sigla:"MF"},{nome_pais:"São Martinho",sigla:"SX"},{nome_pais:"São Tomé e Príncipe",sigla:"ST"},{nome_pais:"São Vicente e Granadinas",sigla:"VC"},{nome_pais:"Senegal",sigla:"SN"},{nome_pais:"Serra Leoa",sigla:"SL"},{nome_pais:"Sérvia",sigla:"RS"},{nome_pais:"Síria",sigla:"SY"},{nome_pais:"Somália",sigla:"SO"},{nome_pais:"Sri Lanka",sigla:"LK"},{nome_pais:"Suazilândia",sigla:"SZ"},{nome_pais:"Sudão",sigla:"SD"},{nome_pais:"Sudão do Sul",sigla:"SS"},{nome_pais:"Suécia",sigla:"SE"},{nome_pais:"Suíça",sigla:"CH"},{nome_pais:"Suriname",sigla:"SR"},{nome_pais:"Svalbard",sigla:"SJ"},{nome_pais:"Tadjiquistão",sigla:"TJ"},{nome_pais:"Tailândia",sigla:"TH"},{nome_pais:"Taiwan",sigla:"TW"},{nome_pais:"Tanzânia",sigla:"TZ"},{nome_pais:"Território Britânico do Oceano índico",sigla:"IO"},{nome_pais:"Territórios do Sul da França",sigla:"TF"},{nome_pais:"Timor-Leste",sigla:"TL"},{nome_pais:"Togo",sigla:"TG"},{nome_pais:"Tonga",sigla:"TO"},{nome_pais:"Trinidad e Tobago",sigla:"TT"},{nome_pais:"Tristão da Cunha",sigla:"TA"},{nome_pais:"Tunísia",sigla:"TN"},{nome_pais:"Turcomenistão",sigla:"TM"},{nome_pais:"Turquia",sigla:"TR"},{nome_pais:"Tuvalu",sigla:"TV"},{nome_pais:"Ucrânia",sigla:"UA"},{nome_pais:"Uganda",sigla:"UG"},{nome_pais:"Uruguai",sigla:"UY"},{nome_pais:"Uzbequistão",sigla:"UZ"},{nome_pais:"Vanuatu",sigla:"VU"},{nome_pais:"Vaticano",sigla:"VA"},{nome_pais:"Venezuela",sigla:"VE"},{nome_pais:"Vietnã",sigla:"VN"},{nome_pais:"Wallis e Futuna",sigla:"WF"},{nome_pais:"Zâmbia",sigla:"ZM"},{nome_pais:"Zimbábue",sigla:"ZW"}],t=[{nome:"Acre",sigla:"AC"},{nome:"Alagoas",sigla:"AL"},{nome:"Amapá",sigla:"AP"},{nome:"Amazonas",sigla:"AM"},{nome:"Bahia",sigla:"BA"},{nome:"Ceará",sigla:"CE"},{nome:"Distrito Federal",sigla:"DF"},{nome:"Espírito Santo",sigla:"ES"},{nome:"Goiás",sigla:"GO"},{nome:"Maranhão",sigla:"MA"},{nome:"Mato Grosso",sigla:"MT"},{nome:"Mato Grosso do Sul",sigla:"MS"},{nome:"Minas Gerais",sigla:"MG"},{nome:"Pará",sigla:"PA"},{nome:"Paraíba",sigla:"PB"},{nome:"Paraná",sigla:"PR"},{nome:"Pernambuco",sigla:"PE"},{nome:"Piauí",sigla:"PI"},{nome:"Rio de Janeiro",sigla:"RJ"},{nome:"Rio Grande do Norte",sigla:"RN"},{nome:"Rio Grande do Sul",sigla:"RS"},{nome:"Rondônia",sigla:"RO"},{nome:"Roraima",sigla:"RR"},{nome:"Santa Catarina",sigla:"SC"},{nome:"São Paulo",sigla:"SP"},{nome:"Sergipe",sigla:"SE"},{nome:"Tocantins",sigla:"TO"}];const m={succeeded:!0,data:{months:{"03":{month:"03",days:[{day:"28",times:[{name:"28/03/2024 08:00",time:"08:00",capacity:1,available:1,scheduled:0,schedulerId:"75a75e27-835c-ee11-8df0-002248de6491"},{name:"28/03/2024 09:15",time:"09:15",capacity:1,available:1,scheduled:0,schedulerId:"79a75e27-835c-ee11-8df0-002248de6491"},{name:"28/03/2024 10:30",time:"10:30",capacity:1,available:1,scheduled:0,schedulerId:"7ba75e27-835c-ee11-8df0-002248de6491"},{name:"28/03/2024 13:00",time:"13:00",capacity:1,available:1,scheduled:0,schedulerId:"7da75e27-835c-ee11-8df0-002248de6491"},{name:"28/03/2024 14:15",time:"14:15",capacity:1,available:1,scheduled:0,schedulerId:"7fa75e27-835c-ee11-8df0-002248de6491"},{name:"28/03/2024 15:30",time:"15:30",capacity:1,available:1,scheduled:0,schedulerId:"81a75e27-835c-ee11-8df0-002248de6491"}]},{day:"29",times:[{name:"29/03/2024 08:00",time:"08:10",capacity:1,available:1,scheduled:0,schedulerId:"83a75e27-835c-ee11-8df0-002248de6491"},{name:"29/03/2024 09:15",time:"09:20",capacity:1,available:1,scheduled:0,schedulerId:"85a75e27-835c-ee11-8df0-002248de6491"},{name:"29/03/2024 10:30",time:"10:40",capacity:1,available:1,scheduled:0,schedulerId:"87a75e27-835c-ee11-8df0-002248de6491"},{name:"29/03/2024 13:00",time:"13:10",capacity:1,available:1,scheduled:0,schedulerId:"89a75e27-835c-ee11-8df0-002248de6491"},{name:"29/03/2024 14:15",time:"14:25",capacity:1,available:1,scheduled:0,schedulerId:"8ba75e27-835c-ee11-8df0-002248de6491"},{name:"29/03/2024 15:30",time:"15:50",capacity:1,available:1,scheduled:0,schedulerId:"8da75e27-835c-ee11-8df0-002248de6491"}]}]},"04":{month:"04",days:[{day:"01",times:[{name:"01/04/2024 08:00",time:"08:10",capacity:1,available:1,scheduled:0,schedulerId:"8fa75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 09:15",time:"09:25",capacity:1,available:1,scheduled:0,schedulerId:"91a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 10:30",time:"10:40",capacity:1,available:1,scheduled:0,schedulerId:"93a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 13:00",time:"13:20",capacity:1,available:1,scheduled:0,schedulerId:"95a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 14:15",time:"14:35",capacity:1,available:1,scheduled:0,schedulerId:"97a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 15:30",time:"15:20",capacity:1,available:1,scheduled:0,schedulerId:"99a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 15:30",time:"16:20",capacity:1,available:1,scheduled:0,schedulerId:"99a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 15:20",time:"16:50",capacity:1,available:1,scheduled:0,schedulerId:"99a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 15:30",time:"17:20",capacity:1,available:1,scheduled:0,schedulerId:"99a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 15:50",time:"18:20",capacity:1,available:1,scheduled:0,schedulerId:"99a75e27-835c-ee11-8df0-002248de6491"},{name:"01/04/2024 19:30",time:"19:20",capacity:1,available:1,scheduled:0,schedulerId:"99a75e27-835c-ee11-8df0-002248de6491"}]}]}}}};class p extends s{constructor(){super(...arguments),this.action="",this.btnSubmitTextColor="white",this.btnSubmitText="Submit",this.loadingText="Loading...",this.noResultsText="No results found",this.fieldsLabels={},this.stateUF="",this.cities=[],this.loadingCities=!1,this.formValues={}}__handleStateChange(a){const i=a.target,e=t.find((a=>a.nome===i.value));e&&(this.stateUF=e.sigla,this.loadingCities=!0,this.formValues={...this.formValues,state_uf:this.stateUF},async function(a){return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${a}/distritos`).then((a=>a.json()))}(this.stateUF).then((a=>{this.cities=a.map((a=>({text:a.nome})))})).finally((()=>{this.loadingCities=!1}))),this.__handleInputChange(a)}__submit(){var a,i,e,s,o;if(this.formValues={...this.formValues,country_abbr:(null===(a=n.find((a=>a.nome_pais===this.formValues.country)))||void 0===a?void 0:a.sigla)||"",zip:(null===(e=null===(i=this.formValues)||void 0===i?void 0:i.zip)||void 0===e?void 0:e.replace(/\D/g,""))||"",phone:(null===(o=null===(s=this.formValues)||void 0===s?void 0:s.phone)||void 0===o?void 0:o.replace(/\D/g,""))||""},this.action){const a=new FormData;Object.entries(this.formValues).forEach((([i,e])=>{a.append(i,e)})),fetch(this.action,{method:"POST",body:a})}else this.dispatchEvent(new CustomEvent("submit",{detail:{values:this.formValues}}))}__handleInputChange(a){const i=a.target;this.formValues={...this.formValues,[i.name]:i.value}}render(){var a;const i=this.fieldsLabels||{name:"Name",email:"E-mail",phone:"Phone",zip:"Zip code",country:"Country",state:"State",city:"City"};let e="[]",s="[]";return"Brasil"===(null===(a=this.formValues)||void 0===a?void 0:a.country)&&(e=JSON.stringify(t.map((a=>({text:a.nome,value:a.sigla})))),this.stateUF&&(s=JSON.stringify(this.cities))),o`
      <form action=${this.action}>
        <fieldset>
          <div class="row">
            <div class="form-group">
              <seb-textfield
                class="field"
                label=${i.name}
                name="name"
                @input=${this.__handleInputChange}
              />
            </div>

            <div class="form-group">
              <seb-textfield
                class="field"
                label=${i.email}
                name="email"
                type="email"
                @input=${this.__handleInputChange}
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group">
              <seb-textfield
                class="field"
                label=${i.phone}
                name="phone"
                @input=${this.__handleInputChange}
              />
            </div>

            <div class="form-group">
              <seb-textfield
                class="field"
                label=${i.zip}
                name="zip"
                type="text"
                @input=${this.__handleInputChange}
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group">
              <seb-autocomplete
                class="field"
                label=${i.country}
                name="country"
                options=${JSON.stringify(n.map((a=>({text:a.nome_pais}))))}
                @input=${this.__handleInputChange}
                noResultsText=${this.loadingCities?this.loadingText:this.noResultsText}
              />
            </div>

            <div class="form-group">
              <seb-autocomplete
                class="field"
                label=${i.state}
                name="state"
                options=${e}
                @input=${this.__handleStateChange}
                noResultsText=${this.loadingCities?this.loadingText:this.noResultsText}
              />
            </div>
          </div>

          <div class="row">
            <div class="form-group">
              <seb-autocomplete
                class="field"
                label=${i.city}
                name="city"
                options=${s}
                @input=${this.__handleInputChange}
                noResultsText=${this.loadingCities?this.loadingText:this.noResultsText}
              />
            </div>

            <div class="form-group">
              <p>Áreas de interesse</p>

              <div class="row">
                <seb-checkbox
                  name="graduation-check"
                  @input=${this.__handleInputChange}
                >
                  Graduação
                </seb-checkbox>

                <seb-checkbox
                  name="post-graduation-check"
                  @input=${this.__handleInputChange}
                >
                  Pós-Graduação
                </seb-checkbox>

                <seb-checkbox
                  name="corporative-education-check"
                  @input=${this.__handleInputChange}
                >
                  Educação Corporativa
                </seb-checkbox>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="form-group">
              <seb-crm-schedule-datepicker
                label="Escolha o dia"
                .schedule="${m}"
              />
            </div>
          </div>
        </fieldset>

        <seb-button
          class="btn-submit"
          type="button"
          style=${`--seb-text-color: ${this.btnSubmitTextColor}; --seb-secondary-color: #000;`}
          .click=${()=>this.__submit()}
        >
          ${this.btnSubmitText}
        </seb-button>
      </form>
    `}}p.styles=a`
    :host {
      display: block;
      padding: 25px;
    }

    :host form fieldset {
      border: none;
      padding: 0;
      margin: 0 0 10px;
      width: 100%;
    }

    :host form fieldset div.row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      gap: 10px;
      margin-bottom: 20px;
    }

    :host form div.form-group {
      width: 100%;
      max-width: 50%;
    }

    :host form .btn-submit {
      display: flex;
      justify-content: flex-end;
      width: auto;
    }

    :host p {
      margin-top: 0;
      margin-bottom: 0;
    }
  `,i([e({type:String})],p.prototype,"action",void 0),i([e({type:String})],p.prototype,"btnSubmitTextColor",void 0),i([e({type:String})],p.prototype,"btnSubmitText",void 0),i([e({type:String})],p.prototype,"loadingText",void 0),i([e({type:String})],p.prototype,"noResultsText",void 0),i([e({type:Object})],p.prototype,"fieldsLabels",void 0),i([l()],p.prototype,"stateUF",void 0),i([l()],p.prototype,"cities",void 0),i([l()],p.prototype,"loadingCities",void 0),i([l()],p.prototype,"formValues",void 0),window.customElements.define("seb-contact-form",p);
