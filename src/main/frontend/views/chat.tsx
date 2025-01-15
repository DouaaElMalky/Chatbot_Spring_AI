import {TextField} from "@vaadin/react-components";
import {useState} from "react";
import {ChatAiService} from "Frontend/generated/endpoints";
import Markdown from "react-markdown";

export default function Chat(){
    const [question,setQuestion]=useState<string>("");
    const [response,setResponse]=useState<string|undefined>("");

    async function send(){
      ChatAiService.ragchat(question).then(resp=>{setResponse(resp);});
    }

    return(
        <div>
          <h3 className="p-m"> Chat Bot</h3>
            <div>
                <TextField style={{width:'80%'}} onChange={(e=>setQuestion(e.target.value))}/>
                <button className="btn btn-primary" onClick={send}>Send</button>
                  <div>
                          <Markdown>
                                                {response}

                      </Markdown>
                  </div>
            </div>
        </div>

    )
}