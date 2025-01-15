import { EndpointRequestInit as EndpointRequestInit_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
async function ragchat_1(question: string | undefined, init?: EndpointRequestInit_1): Promise<string | undefined> { return client_1.call("ChatAiService", "ragchat", { question }, init); }
export { ragchat_1 as ragchat };
