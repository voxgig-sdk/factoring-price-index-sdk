import { FactoringPriceIndexEntityBase } from '../FactoringPriceIndexEntityBase';
import type { FactoringPriceIndexSDK } from '../FactoringPriceIndexSDK';
import type { Control } from '../types';
import type { Calculator, CalculatorCreateData } from '../FactoringPriceIndexTypes';
declare class CalculatorEntity extends FactoringPriceIndexEntityBase<Calculator> {
    constructor(client: FactoringPriceIndexSDK, entopts: any);
    make(this: CalculatorEntity): CalculatorEntity;
    create(this: any, reqdata?: CalculatorCreateData, ctrl?: Control): Promise<CalculatorEntity>;
}
export { CalculatorEntity };
