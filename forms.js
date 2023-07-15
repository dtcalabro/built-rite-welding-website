function markRequired() {
    var forms = document.getElementsByTagName("form");
    for (var formIter = 0; formIter < forms.length; formIter++) {
        var inputs = forms[formIter].querySelectorAll("input:not([type='submit'])");
        var textareas = forms[formIter].querySelectorAll("textarea");

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].required) {
                var label = forms[formIter].querySelector("label[for=\"" + inputs[i].name + "\"]");
                const asterisk = document.createElement('img');
                asterisk.src = "media/icons/asterisk-red.svg"
                asterisk.style.paddingLeft = "5px";
                asterisk.className = "asterisk-icon";

                label.insertAdjacentElement('beforeend', asterisk);
            }
        }

        for (var i = 0; i < textareas.length; i++) {
            if (textareas[i].required) {
                var label = forms[formIter].querySelector("label[for=\"" + textareas[i].name + "\"]");
                const asterisk = document.createElement('img');
                asterisk.src = "media/icons/asterisk-red.svg"
                asterisk.style.paddingLeft = "5px";
                asterisk.className = "asterisk-icon";

                label.insertAdjacentElement('beforeend', asterisk);
            }
        }
    }
}

function checkValidity(elem) {
    if (elem.required) { // Verify that the value is present if it is required
        if (elem.value == "") {
            elem.addClass("invalid-input");
            return false;
        }
    }

    if (elem.pattern != "") { // Verify that the value matches the pattern if a pattern is given
        var re = new RegExp(elem.pattern);
        if (!re.test(elem.value)) {
            elem.addClass("invalid-input");
            return false;
        }
    }

    elem.removeClassIfPresent("invalid-input");

    return true;
}

markRequired();