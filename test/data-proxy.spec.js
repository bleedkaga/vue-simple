import Vue from '../src/index'

describe("Proxy test", function(){
    it('should proxy vm._data.a = vm.a', () => {
        let vm = new Vue({
            data(){
                return {
                    a: 2
                }
            }
        })

        expect(vm.a).toEqual(2)
    })
})
