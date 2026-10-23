# FactoringPriceIndex SDK utility: make_context

from factoringpriceindex_sdk.core.context import FactoringPriceIndexContext


def make_context_util(ctxmap, basectx):
    return FactoringPriceIndexContext(ctxmap, basectx)
