<?php
declare(strict_types=1);

// FactoringPriceIndex SDK exists test

require_once __DIR__ . '/../factoringpriceindex_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FactoringPriceIndexSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
