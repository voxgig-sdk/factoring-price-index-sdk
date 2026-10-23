<?php
declare(strict_types=1);

// FactoringPriceIndex SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FactoringPriceIndexMakeContext
{
    public static function call(array $ctxmap, ?FactoringPriceIndexContext $basectx): FactoringPriceIndexContext
    {
        return new FactoringPriceIndexContext($ctxmap, $basectx);
    }
}
