import Vue from '../src/index'

describe('Raw vnode render', () => {
    it('basic usage', () => {
        const vm = new Vue({
            render (h) {
                return h('div', null, 'hello' /* string as children*/)
            }
        }).$mount()

        console.log(vm.$el.tagName)
        console.log(vm.$el.textContent)

        expect(vm.$el.tagName).toBe('DIV')
        expect(vm.$el.textContent).toBe('hello')
    })
})
