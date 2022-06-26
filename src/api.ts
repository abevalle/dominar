import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import log4js from 'log4js'
const pjson = require('../package.json')

dotenv.config()

const app = express();
const port = process.env.port;
const logLevel = process.env.log_level || 'info';

let logger = log4js.getLogger();
logger.level = logLevel;

const appName = pjson.name;
const version = pjson.version;
let endpointPreamble = `/${appName}/v1/`
console.log(endpointPreamble)


export class apiServer {
    public static start() {
        app.get('/', (req: Request, res: Response) => {
            res.sendStatus(403)
        })
        
        app.listen(port, () => {
            logger.info('Running', appName, 'Version:', version)
            logger.info('Expres Server has started on port:', port)
        })
    }    

    public static endpoint(endpoint: string) {
        let fullEndpoint = `${endpointPreamble}${endpoint}`
        app.get(fullEndpoint, (req: Request, res: Response) => {
            res.json(res)
        })
    }
}

let server = new apiServer()

export interface apiServer {
    start(): void;
    stop(): void;
}