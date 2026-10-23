import { FactoringPriceIndexEntityBase } from '../FactoringPriceIndexEntityBase';
import type { FactoringPriceIndexSDK } from '../FactoringPriceIndexSDK';
import type { Control } from '../types';
import type { Enquiry, EnquiryCreateData } from '../FactoringPriceIndexTypes';
declare class EnquiryEntity extends FactoringPriceIndexEntityBase<Enquiry> {
    constructor(client: FactoringPriceIndexSDK, entopts: any);
    make(this: EnquiryEntity): EnquiryEntity;
    create(this: any, reqdata?: EnquiryCreateData, ctrl?: Control): Promise<EnquiryEntity>;
}
export { EnquiryEntity };
