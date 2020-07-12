function jQuery(selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this
}

jQuery.prototype.each = function (fn) {
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}

jQuery.prototype.text = function (txt_content = null) {
    if (txt_content === null) {
        this.each(element => element.text());
        return this;
    }
    else {
        console.log(this);
        this.each(element => element.textContent = txt_content);
        console.log(this);
        return this;
    }
}
