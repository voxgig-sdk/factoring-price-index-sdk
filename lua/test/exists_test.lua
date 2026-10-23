-- FactoringPriceIndex SDK exists test

local sdk = require("factoring-price-index_sdk")

describe("FactoringPriceIndexSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
