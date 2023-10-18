import { sayHello} from "../src/say-hello";

describe('sayHello', function () : void {
    it('should return hello eko', function () {
        expect(sayHello("eko")).toBe('Hello eko');
    })
})