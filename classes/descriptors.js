'use strict';

class Example {
    constructor() {
        this.variable1 = 'variable1';
        this.variable2 = null;
        this.variable3 = undefined;
        this.variable4 = true;
        this.a = 15;
    }
    static staticFunction1() { return 'staticFunction1' }
    static staticFunction2() { return 'staticFunction2' }
    static staticFunction3() { return 'staticFunction3' }
    static staticFunction4() { return 'staticFunction4' }

    dynamicFunction1() { return this.a * 1; }
    dynamicFunction2() { return this.a * 2; }
    dynamicFunction3() { return this.a * 3; }
    dynamicFunction4() { return this.a * 4; }
}

function printAllProperties(source) {
    Object.getOwnPropertyNames(source)
        .concat(Object.getOwnPropertySymbols(source))
        .forEach(prop => {
            console.log('PROPERTY: ' + prop.toString() + '\nDESCRIPTORS: ', Object.getOwnPropertyDescriptor(source, prop));
        })
}

function printAllPrototypesWithOwnProperties(source) {
    let level = 0;
    let nextPrototype = source;
    while (true) {
        console.log('LEVEL: ' + level + ' NAME:' + nextPrototype.name);
        printAllProperties(nextPrototype);
        level++;
        if (nextPrototype['__proto__'] === null) {
            console.log('LEVEL: ' + level + ' NAME: NULL');
            break;
        } else {
            nextPrototype = Object.getPrototypeOf(nextPrototype);
        }
    }
};

function main() {
    const exClass = Example;
    const exObject = new Example;
    printAllPrototypesWithOwnProperties(exClass);
    console.log('----------------------------------------');
    printAllPrototypesWithOwnProperties(exObject);
};

main();



