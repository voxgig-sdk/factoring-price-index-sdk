package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCalculatorEntityFunc func(client *FactoringPriceIndexSDK, entopts map[string]any) FactoringPriceIndexEntity

var NewEnquiryEntityFunc func(client *FactoringPriceIndexSDK, entopts map[string]any) FactoringPriceIndexEntity

var NewMcpEntityFunc func(client *FactoringPriceIndexSDK, entopts map[string]any) FactoringPriceIndexEntity

