interface ISales_OrderDTO {

    idSales_Order?: number;
    Created_at?: Date;
    Value : number;
    Id_Seller : number;
    Id_Client : number;
    Observations : string;
    Enterprise_idEnterprise : number;
    Types_Sales_idTypes_Sales : number;
    
}

export { ISales_OrderDTO };