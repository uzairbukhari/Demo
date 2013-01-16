
var namespace = {};
namespace.Util = {};

namespace.Util.MyValidatorClass = (function () {
    var requiredField_Validation = function (text) {
        var reg = new RegExp('^[\s]*[\s]*$');
        return !reg.test(text);
    }
    var numeric_Validation = function (text) {
        if (!requiredField_Validation(text))
            return false;
        var reg = new RegExp('^\\d*$');
        return reg.test(text);
    }
    var alphaNumeric_Validation = function (text) {
        if (!requiredField_Validation(text))
            return false;
        var reg = new RegExp('^[a-zA-Z0-9_]*$');
        return reg.test(text);
    }
    var email_Validation = function (text) {
        if (!requiredField_Validation(text))
            return false;
        var reg = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
        return reg.test(text);
    }
    var GPA_Validation = function (text) {
        if (!requiredField_Validation(text))
            return false;
        var reg = new RegExp("^(?:[0-3](\.\d\d?)?)|4(\.0)?$");
        return reg.test(text);
    }
    var FormValidator_Onclick = function () {
        var elements = document.forms[0].elements;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.type == 'text') {
                namespace.Util.MyValidatorClass.FormValidator(element);
            }
        }
    }

    var Form_Validator = function (Element) {
        switch (Element.getAttribute("validationtype")) {
            case 'required':
                namespace.Util.Design.SetColorOnvalidation(requiredField_Validation(Element.value), Element);
                break;
            case 'numeric':
                namespace.Util.Design.SetColorOnvalidation(numeric_Validation(Element.value), Element);
                break;
            case 'email':
                namespace.Util.Design.SetColorOnvalidation(email_Validation(Element.value), Element);
                break;
            case 'alphanumeric':
                namespace.Util.Design.SetColorOnvalidation(alphaNumeric_Validation(Element.value), Element);
                break;
            case 'gpa':
                namespace.Util.Design.SetColorOnvalidation(GPA_Validation(Element.value), Element);
                break;
        }
    }
    return {
        FormValidator: Form_Validator,
        FormValidatorOnclick: FormValidator_Onclick
    };
})();

//alert(namespace.Util.MyValidatorClass.emailValidation("suzairgmail.com"));

$(function () {
    var elements = $('input:text');
    alert(elements.length);
    for (var i = 0; i < elements.length; i++) {
        (function (index) {
            var element = elements[index];
            element.value = 'hello';
            alert(element.value);
            element.onkeyup = function () {
                namespace.Util.MyValidatorClass.FormValidator(element);
            }
        })(i);
    }
    //    $('input:text').onkeyup(function () {
    //        namespace.Util.MyValidatorClass.FormValidator(this);
    //    });
});

//window.onload = function () {
//    var elements = document.forms[0].elements;
//    for (var i = 0; i < elements.length; i++) {
//        //alert(elements[i].getAttribute("validationtype"));
//        (function (index) {
//            var element = elements[index];
//            //alert(element.type);
//            if (element.type == 'text')
//                element.onkeyup = function () {
//                    namespace.Util.MyValidatorClass.FormValidator(element);
//                }
//            else if (element.type == 'button')
//                element.onclick = function () {
//                    namespace.Util.MyValidatorClass.FormValidatorOnclick();
//                }
//        })(i);
//    }
//}
namespace.Util.Design = {
    SetColorOnvalidation: function (Result, Element) {
        var className = Result ? "ValidInput" : "InValidInput";
        Element.setAttribute("class", className);
    }
};
