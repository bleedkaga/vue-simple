import Vue from '../src/index'

describe('Method', function(){
    it('Basic', () => {
        let vm = new Vue({
            methods: {
                hello(){
                    return {
                        self: this,
                        msg: 'hello'
                    }
                }
            }
        })

        let ret = vm.hello()
        expect(ret.self).toEqual(vm)
        expect(ret.msg).toEqual('hello')
    })
})
