class CustomInputWidget extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // Input Field
        this.inputElement = document.createElement("input");
        this.inputElement.type = "text";
        this.inputElement.placeholder = this.getAttribute("placeholder") || "Veri giriniz...";

        // Submit Button
        this.buttonElement = document.createElement("button");
        this.buttonElement.textContent = this.getAttribute("buttonText") || "Gönder";

        // Event Listener for Submit Button
        this.buttonElement.addEventListener("click", () => {
            const event = new CustomEvent("submitEvent", {
                detail: { value: this.inputElement.value }
            });
            this.dispatchEvent(event);
        });

        // Append Elements
        this.shadowRoot.appendChild(this.inputElement);
        this.shadowRoot.appendChild(this.buttonElement);
    }

    static get observedAttributes() {
        return ["placeholder", "buttonText"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "placeholder") {
            this.inputElement.placeholder = newValue;
        }
        if (name === "buttonText") {
            this.buttonElement.textContent = newValue;
        }
    }
}

// Web Component'i Tanımla
customElements.define("custom-input-widget", CustomInputWidget);
