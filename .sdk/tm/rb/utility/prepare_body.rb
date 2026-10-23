# FactoringPriceIndex SDK utility: prepare_body
require_relative 'media'
module FactoringPriceIndexUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FactoringPriceIndexUtilities.raw_body(ctx.reqdata) if FactoringPriceIndexUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
