//TEST
const palindromo = require('../utils/palindromo.js')

test('palindromo de juan', () => {

    const result = palindromo ('juan');
    expect(result).toBe('nauj');
        
})