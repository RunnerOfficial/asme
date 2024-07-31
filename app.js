const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;


app.get('/.well-known/assetlinks.json', (req, res) => {
    const jsonData =[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "net.runner.jetpacktests",
    "sha256_cert_fingerprints":
    ["F8:72:94:82:C3:C0:DB:97:16:FE:8D:DD:0E:EC:5B:83:20:74:FB:FE:21:5B:2B:50:95:F6:2E:E7:8B:98:A9:E5"]
  }
}]

    res.json(jsonData);
});
app.get('/callback', async (req, res) => {
    const { code, state } = req.query;

            const redirectUri = "https://asme-xi.vercel.app/getAuth";
            res.redirect(redirectUri);

       
   
});
app.get('/uptime',(req,res)=>{
  res.json({"name":"timed!"})
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
