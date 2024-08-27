import{s as e,i as o,x as t}from"./9bde2683.js";import"./seb-contact-form.js";import"./5330295c.js";import"./seb-textfield.js";import"./seb-autocomplete.js";import"./seb-message.js";import"./seb-button.js";import"./seb-checkbox.js";import"./31b20069.js";import"./seb-crm-schedule-datepicker.js";class s extends e{render(){return t`
      <seb-contact-form
        style="--seb-text-color: black; --seb-primary-color: #6366F1"
        .btnSubmitTextColor=${"white"}
        .btnSubmitText=${"Enviar"}
        .loadingText=${"Carregando..."}
        .noResultsText=${"Nenhum resultado encontrado"}
        .fieldsLabels=${{name:"Nome",email:"E-mail",phone:"Telefone",zip:"CEP/ZIP",country:"País",state:"Estado",city:"Cidade"}}
      />
    `}}s.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0},s.styles=o`
    :host {
      display: block;
      color: var(--seb-text-color, #111927);
    }
  `,window.customElements.define("seb-demo",s);
