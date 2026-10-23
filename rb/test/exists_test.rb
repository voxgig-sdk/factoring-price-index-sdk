# FactoringPriceIndex SDK exists test

require "minitest/autorun"
require_relative "../FactoringPriceIndex_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FactoringPriceIndexSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
