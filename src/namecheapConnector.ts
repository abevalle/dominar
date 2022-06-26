import fetch from 'node-fetch'
import log4js from 'log4js'
import https from 'https'

const logLevel = process.env.log_level || 'info';
let logger = log4js.getLogger();
logger.level = logLevel;


let key:string = process.env.namecheap_key!;

export class namecheap {
    api_key: string;


    constructor() {
        this.api_key = key!;

    }

    private static getPublicIp() {
        
    }

    public static async getEndpoint() {        
        let env = process.env.env;
        let sandboxUrl = 'https://api.sandbox.namecheap.com/xml.response';
        let prodUrl = 'https://api.namecheap.com/xml.response';
        let options:object = {
            method: 'GET',
            header: {},
            body: null,
            redirect: 'follow'
        }
        let finalUrl:string;
        
        if (env = 'dev') {
            sandboxUrl + new URLSearchParams({
                ApiUser: process.env.apiUsername!,
                ApiKey: key,
                UserName: process.env.ncUsername!,
                command: command,
                ClientIp: publicIP
            })
        }


        try {
            const response = await fetch(finalUrl, options);
            const data = await response.json(); 
        } catch (error) { 
            if(error) {
                logger.error('Fatal Error:', error);
            }

            return false;
        }
    }
    
}

