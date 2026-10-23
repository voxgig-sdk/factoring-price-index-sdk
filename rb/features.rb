# FactoringPriceIndex SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FactoringPriceIndexFeatures
  def self.make_feature(name)
    case name
    when "base"
      FactoringPriceIndexBaseFeature.new
    when "ratelimit"
      FactoringPriceIndexRatelimitFeature.new
    when "retry"
      FactoringPriceIndexRetryFeature.new
    when "test"
      FactoringPriceIndexTestFeature.new
    when "timeout"
      FactoringPriceIndexTimeoutFeature.new
    else
      FactoringPriceIndexBaseFeature.new
    end
  end
end
