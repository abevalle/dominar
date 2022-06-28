import fetch from 'node-fetch'
import log4js from 'log4js'
import https from 'https'
import { debugPort } from 'process';

const logLevel = process.env.log_level || 'info';
let logger = log4js.getLogger();
logger.level = logLevel;

let key:string = process.env.namecheap_key!;
let user:string = process.env.namecheap_user!;
let pass:string = process.env.namecheap_pass!;

export class namecheap {
    static api_key: string;
    static api_user: string;
    static api_pass: string;
    static api_endpoint: string;

    private static async getPublicIp() {
        logger.info('test')
        let ipfy:string = "https://api.ipify.org?format=json"
        let publicIP:string;
        let options:object = {
            method: 'GET',
            header: {},
            body: null,
            redirect: 'follow'
        }

        try {
            return await fetch(ipfy, options)
            .then(res => res.json())
        } catch (err) {
            logger.error(err)
        }
    }

    public static async getApiResponse(endpoint:string) {        
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
        
        if (env = 'dev' || 'DEV') {
            logger.warn('In DEV mode connecting to namecheap sandbox...')
            let params = new URLSearchParams({
                ApiUser: process.env.apiUsername!,
                ApiKey: this.api_key,
                UserName: this.api_user,
                command: endpoint,
                ClientIp: await `${this.getPublicIp()}`
            })
        }


        try {
            const response = await fetch('finalUrl', options);
            const data = await response.json(); 
        } catch (error) { 
            if(error) {
                logger.error('Fatal Error:', error);
            }

            return false;
        }
    }
    
}
