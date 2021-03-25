"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
function validation() {
    return function (target, propertyName, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var idReg = /[^a-zA-Z0-9]/g;
            if (idReg.test(this.id)) {
                this.message = '아이디는 영문자 또는 숫자이어야 합니다.';
                this.isValid = false;
            }
            else {
                this.message = '';
            }
            if (this.id === '' || this.password === '') {
                this.isValid = false;
            }
            else {
                this.isValid = true;
            }
            method.apply(this);
        };
    };
}
// vue class component - createDecorator 사용
// function validation() {
//     return createDecorator((options, key) => {
//         const methods = options.methods[key]
//         options.methods[key] = function wrapperMethod(...args) {
//             const idReg = /[^a-zA-Z0-9]/g;
//             const value = args[0]
//             if (value === '') {
//                 throw new Error('파라미터를 입력하세요')
//             }
//             methods.apply(this, args)
//         }
//     })
// }
exports.Validation = validation;
//# sourceMappingURL=decoretor.js.map