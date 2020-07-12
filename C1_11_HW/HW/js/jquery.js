function jQuery(selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this
}

jQuery.prototype.each = function (fn) {
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}

jQuery.prototype.click = function (fn) {
    this.each(element => element.addEventListener('click', fn))
    return this
}

jQuery.prototype.hide = function () {
    this.each(element => element.style.display = 'none')
    return this;
}

jQuery.prototype.show = function () {
    this.each(element => element.style.display = '')
    return this;
}

jQuery.prototype.remove = function () {
    this.each(element => element.remove())
    return this;
}

jQuery.prototype.class = function (name) {
    this.each(element => element.className = name)
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

const $ = (e) => new jQuery(e);

// $('button1').hide().show().click(e => console.log(e)).class('name')

// $('button1').click(e => console.log(e)).html('h1')

//Проверка путем замены первого аргумента вторым
// $('h1', 'h2').html();
$('h1').html();
//$().html();
//Проверка путем замены текста jQuery на jMyQuery
// $('.b').text('jMyQuery'); //с аргументами изменяет jQuery на jMyQuery и возвращает измененного себя
//$('b',).text();
//$().text();  //без аргументов возвращает себя
