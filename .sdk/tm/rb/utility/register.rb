# FactoringPriceIndex SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FactoringPriceIndexUtility.registrar = ->(u) {
  u.clean = FactoringPriceIndexUtilities::Clean
  u.clean_add = FactoringPriceIndexUtilities::CleanAdd
  u.clean_explain = FactoringPriceIndexUtilities::CleanExplain
  u.done = FactoringPriceIndexUtilities::Done
  u.make_error = FactoringPriceIndexUtilities::MakeError
  u.feature_add = FactoringPriceIndexUtilities::FeatureAdd
  u.feature_hook = FactoringPriceIndexUtilities::FeatureHook
  u.feature_init = FactoringPriceIndexUtilities::FeatureInit
  u.fetcher = FactoringPriceIndexUtilities::Fetcher
  u.make_fetch_def = FactoringPriceIndexUtilities::MakeFetchDef
  u.make_context = FactoringPriceIndexUtilities::MakeContext
  u.make_options = FactoringPriceIndexUtilities::MakeOptions
  u.make_request = FactoringPriceIndexUtilities::MakeRequest
  u.make_response = FactoringPriceIndexUtilities::MakeResponse
  u.make_result = FactoringPriceIndexUtilities::MakeResult
  u.make_point = FactoringPriceIndexUtilities::MakePoint
  u.make_spec = FactoringPriceIndexUtilities::MakeSpec
  u.make_url = FactoringPriceIndexUtilities::MakeUrl
  u.param = FactoringPriceIndexUtilities::Param
  u.prepare_auth = FactoringPriceIndexUtilities::PrepareAuth
  u.prepare_body = FactoringPriceIndexUtilities::PrepareBody
  u.prepare_headers = FactoringPriceIndexUtilities::PrepareHeaders
  u.prepare_method = FactoringPriceIndexUtilities::PrepareMethod
  u.prepare_params = FactoringPriceIndexUtilities::PrepareParams
  u.prepare_path = FactoringPriceIndexUtilities::PreparePath
  u.prepare_query = FactoringPriceIndexUtilities::PrepareQuery
  u.graphql_body = FactoringPriceIndexUtilities::GraphqlBody
  u.graphql_errors = FactoringPriceIndexUtilities::GraphqlErrors
  u.result_basic = FactoringPriceIndexUtilities::ResultBasic
  u.result_body = FactoringPriceIndexUtilities::ResultBody
  u.result_headers = FactoringPriceIndexUtilities::ResultHeaders
  u.transform_request = FactoringPriceIndexUtilities::TransformRequest
  u.transform_response = FactoringPriceIndexUtilities::TransformResponse
}
