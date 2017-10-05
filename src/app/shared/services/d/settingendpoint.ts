export interface  ISettingEndPoint {
    setting(parameters: any);
 }

export class  SettingEndPointAPIInHouse  implements  ISettingEndPoint {
    setting(inHouseParameters: any){

    }
}

export class  SettingEndPointAPIExternals  implements  ISettingEndPoint {
    setting(externalParameters: any){

    }
}