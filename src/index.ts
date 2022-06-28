import { apiServer } from "./api";
import { namecheap } from "./namecheapConnector"

apiServer.start()
apiServer.endpoint('test')
// namecheap.getApiResponse('namecheap.domains.getList')