
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FactoringPriceIndexSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FactoringPriceIndexSDK.test()
    equal(testsdk instanceof FactoringPriceIndexSDK, true,
      'FactoringPriceIndexSDK.test() must return a client synchronously')
  })

})
