<?php
declare(strict_types=1);

// FactoringPriceIndex SDK utility: result_headers

class FactoringPriceIndexResultHeaders
{
    public static function call(FactoringPriceIndexContext $ctx): ?FactoringPriceIndexResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
