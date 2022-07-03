import '@testing-library/jest-dom/extend-expect'
import {  formatCurrency } from "./currency"

describe("Format money amount", () => {
    it("Should format the money value like $1.234,99", () => {
        const amount = 1234;
        const decimals = 99;
        const functionResponse = formatCurrency(amount, decimals)
        expect(functionResponse).toEqual("$ 1.234,99")
    })

    it("Should call one time the function with params to format a value with decimals", () => {
        const amount = 0;
        const decimals = 0;
        const mockedFunction = jest.fn().mockImplementation((a,b) => "$ 0,00")
        expect(mockedFunction(amount, decimals)).toBe("$ 0,00")
        expect(mockedFunction).toHaveBeenCalledTimes(1)
        expect(mockedFunction).toHaveBeenCalledWith(amount, decimals)
    })

    it("Should call one time and format a value without decimals", () => {
        const amount = 55;
        const mockedFunction = jest.fn().mockImplementation((a) => `$ ${amount}`)
        expect(mockedFunction(amount)).toBe("$ 55")
        expect(mockedFunction).toHaveBeenCalledTimes(1)
        expect(mockedFunction).toHaveBeenCalledWith(amount)
    })
})