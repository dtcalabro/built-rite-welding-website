/*
 * Element Wrapper Functions
 */
Element.prototype.addClass = function(classname) {
    this.classList.add(classname);
}

Element.prototype.removeClass = function(classname) {
    this.classList.remove(classname);
}

Element.prototype.removeClassIfPresent = function(classname) {
    if (this.classList.contains(classname)) {
        this.classList.remove(classname);
    }
}

Element.prototype.containsClass = function(classname) {
    return this.classList.contains(classname);
}

Element.prototype.replaceClassIfPresent = function(origClassname, newClassname) {
    if (this.classList.contains(origClassname)) {
        this.classList.remove(origClassname);
        this.classList.add(newClassname);
    }
}