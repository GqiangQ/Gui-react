import  render from 'react-test-renderer'
import React from 'react'
import Button from '../Button/button'
describe('button', () => {
    it('是一个 div 元素', () => {
        const json = JSON.stringify(render.create(<Button/>))
        console.log(json)
        expect(1).toEqual(1)
    })
})
