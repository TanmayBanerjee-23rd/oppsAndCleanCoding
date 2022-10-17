class Test {
    
    test2() {
        console.log( "hey" );
    };

    test1() {
        this["test2"]();
    }
};

const testObj = new Test();
testObj.test1();