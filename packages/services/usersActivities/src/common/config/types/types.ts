import { APIGatewayEvent } from 'aws-lambda';

export interface IErrorObjects {
    [errorName: string] : {
      errorCode: number,
      httpCode: number,
      message: string
    }
}

export interface SlsAPIGatewayEvent extends Omit<APIGatewayEvent, 'body'|'pathParameters'> {
    body : object,
    pathParameters: {
        [param: string]: string
    }
}

export interface IActivityModel {
    name: string,
    executionDate: string,
    conclusionDate: string,
    status: string,
    priority: string
}
