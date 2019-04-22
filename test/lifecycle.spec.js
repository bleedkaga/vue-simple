import Vue from "../src/index.js";

describe('Lifecycle', function() {
    let cb = jasmine.createSpy('cb');

    it('mounted', function() {
        new Vue({
            mounted () {
                cb()
            },
            render (h) {
                return h('div', null, 'hello' /* string as children*/)
            }
        }).$mount()

        expect(cb).toHaveBeenCalled()
    });
});
