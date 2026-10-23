export interface Calculator {
    advance?: number;
    debtorDays?: number;
    extras?: number;
    margin?: number;
    minFee?: number;
    serviceFee?: number;
    turnover?: number;
}
export interface CalculatorCreateData {
    advance?: number;
    debtorDays?: number;
    extras?: number;
    margin?: number;
    minFee?: number;
    serviceFee?: number;
    turnover?: number;
}
export interface Enquiry {
    answers: Record<string, any>;
    confirmation?: string;
    consent: boolean;
}
export interface EnquiryCreateData {
    answers: Record<string, any>;
    confirmation?: string;
    consent: boolean;
}
export interface Mcp {
    id?: string;
    jsonrpc: any;
    method: string;
    params?: Record<string, any>;
}
export interface McpLoadMatch {
    id: string;
    jsonrpc?: any;
    method?: string;
    params?: Record<string, any>;
}
export interface McpCreateData {
    id?: string;
    jsonrpc: any;
    method: string;
    params?: Record<string, any>;
}
