function myJQuery(element) {
    this.element = element;
    this.on = function (eventname, f) {
        for (var i = 0, i < this.element.length; i++) {
            this.element[i].addEventListener(eventname, f)
        }
        return this;
    }
}