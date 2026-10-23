# FactoringPriceIndex SDK utility: make_context
require_relative '../core/context'
module FactoringPriceIndexUtilities
  MakeContext = ->(ctxmap, basectx) {
    FactoringPriceIndexContext.new(ctxmap, basectx)
  }
end
