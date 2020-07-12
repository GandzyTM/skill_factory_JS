function jQuery(selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this
}

jQuery.prototype.each = function (fn) {
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}

jQuery.prototype.html = function (new_elem = null) {
    if (new_elem === undefined) {
        this.each(element => element.html());
        return this;
    } else {
        this.each(element => element.html(new_elem));
        return this;
    }
}