/* Add wibwawies */
const Discowd = require('discord.js'); /* Discowd API */
let CwyptoRPC = require('bitcoin-rpc-promise') /* Cwyptocuwwency RPC Intewface */

/* Inyitiawize Discowd Webhook and Meowcoin RPC */
let bot = new Discowd.Client();
let hook = new Discowd.WebhookClient("667038934592651274", "f7Y7bsDlExJpeTwk9rJTVAA9X-6tc-SUB-0lPIk--y9y_s-V5iwDiqIOykoTVl2K721Y");
let rpc = new CwyptoRPC('http://user:pass@localhost:26211');

/* Main bot stuffsies uwu */
let lastBlockHash = "";

let scanInterval = setInterval(function(){
    rpc.call("getbestblockhash").then(bHash => {
        if (bHash === lastBlockHash) return; // Nyo nyew bwocks yet!

        lastBlockHash = bHash;
        rpc.call("getblock", bHash).then(block => {
            var embed = {
                "color": 6080248,
                "description": "Block " + block.height + " was mined! <:yay:663911612507226131>",
                "fields": [
                {
                  "name": "Block Hash",
                  "value": "`" + bHash + "`",
                  "inline": false
                },
                {
                  "name": "Transactions inside block",
                  "value": block.tx.length + " TXs",
                  "inline": false
                }
                ]
            };
            
            hook.send({embeds: [embed]});
        });
    });
}, 1000);