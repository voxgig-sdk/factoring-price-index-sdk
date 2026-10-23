import { FactoringPriceIndexEntityBase } from '../FactoringPriceIndexEntityBase';
import type { FactoringPriceIndexSDK } from '../FactoringPriceIndexSDK';
import type { Control } from '../types';
import type { Mcp, McpLoadMatch, McpCreateData } from '../FactoringPriceIndexTypes';
declare class McpEntity extends FactoringPriceIndexEntityBase<Mcp> {
    constructor(client: FactoringPriceIndexSDK, entopts: any);
    make(this: McpEntity): McpEntity;
    load(this: any, reqmatch?: McpLoadMatch, ctrl?: Control): Promise<McpEntity>;
    create(this: any, reqdata?: McpCreateData, ctrl?: Control): Promise<McpEntity>;
}
export { McpEntity };
