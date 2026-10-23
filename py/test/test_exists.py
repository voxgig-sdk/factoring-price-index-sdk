# FactoringPriceIndex SDK exists test

import pytest
from factoringpriceindex_sdk import FactoringPriceIndexSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FactoringPriceIndexSDK.test(None, None)
        assert testsdk is not None
