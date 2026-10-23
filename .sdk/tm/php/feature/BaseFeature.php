<?php
declare(strict_types=1);

// FactoringPriceIndex SDK base feature

class FactoringPriceIndexBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FactoringPriceIndexContext $ctx, array $options): void {}
    public function PostConstruct(FactoringPriceIndexContext $ctx): void {}
    public function PostConstructEntity(FactoringPriceIndexContext $ctx): void {}
    public function SetData(FactoringPriceIndexContext $ctx): void {}
    public function GetData(FactoringPriceIndexContext $ctx): void {}
    public function GetMatch(FactoringPriceIndexContext $ctx): void {}
    public function SetMatch(FactoringPriceIndexContext $ctx): void {}
    public function PrePoint(FactoringPriceIndexContext $ctx): void {}
    public function PreSpec(FactoringPriceIndexContext $ctx): void {}
    public function PreRequest(FactoringPriceIndexContext $ctx): void {}
    public function PreResponse(FactoringPriceIndexContext $ctx): void {}
    public function PreResult(FactoringPriceIndexContext $ctx): void {}
    public function PreDone(FactoringPriceIndexContext $ctx): void {}
    public function PreUnexpected(FactoringPriceIndexContext $ctx): void {}
}
