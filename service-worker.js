if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const i=e=>a(e,r),f={module:{uri:r},exports:c,require:i};s[r]=Promise.all(d.map((e=>f[e]||i(e)))).then((e=>(t(...e),c)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/404.html-c698d9e9.js",revision:"2d97adee95b577cb5297fe6dcccedf2e"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/ado.html-ba95ec06.js",revision:"499f93662a6088e785f95dc08124fc0d"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aggregateroot.html-fe02619b.js",revision:"405a717157541d6c516f96935b063f8d"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop-freesql-autofac.html-f78ea84b.js",revision:"d2cffbb9a47ba430b3d5ebdf75cc4ef4"},{url:"assets/aop.html-c940cfd9.js",revision:"5b6dbab5c8d86d97772e06795fd79387"},{url:"assets/aop.html-cf84b2ff.js",revision:"63101d66ce96a974c10153842f9fc45d"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/api.html-fbec8b73.js",revision:"9f306905590332b12ea090f47ca7e4bd"},{url:"assets/app-6d640be8.js",revision:"a6100dbacdf6955eb3a987bb7212870e"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/awesome-freesql.html-279c4e34.js",revision:"09c98d49a106a47123a415ba41280818"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/BaseEntity.html-bfe48fad.js",revision:"009e87ececd70a167ff097735edae578"},{url:"assets/cascade-delete.html-5da10dae.js",revision:"d75cede6ff6283bda5cc22dd17602a74"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-099fd508.js",revision:"9cf7eb12d70e9b4a63356b54d88b1123"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/Cascade-Saving.html-c9d20b28.js",revision:"dc2b99e40767f23652e10195b1104ec6"},{url:"assets/change-log.html-0f5b0aab.js",revision:"b81f9cd0a5ecd055e7907a98dea9c975"},{url:"assets/change-log.html-da6d1017.js",revision:"72d2c4886c9dc6d05fef170ea201ae7c"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/code-first.html-88bc5b70.js",revision:"3c15f688be1cbe8ec438a436171e2772"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/CodeFirst-Mode.html-9cabae24.js",revision:"8ad4ea812fb7a690dd0bbefc37b40b92"},{url:"assets/config-entity-from-db-first.html-4966e5db.js",revision:"31a74e88e8baa185cc4d0935827bd220"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/contributing.html-4d643ab6.js",revision:"ad414342620e61c76a0e3bb20c59fa64"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/custom-attribute.html-8fb82c5f.js",revision:"8198da182a42e192ad3761e8c0871a9a"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/db-context.html-0c9a3c97.js",revision:"edacc73d77cdbcaa58a94c3d52bfa51f"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-first.html-44365b06.js",revision:"bb430b6f2763f01fce30eff07c12090d"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/Delete-Data.html-bb7e1af6.js",revision:"d024c658daa91b444788796b629f22f7"},{url:"assets/Delete-Data.html-d4f639b4.js",revision:"fe77116e5a316c00bb25a30424aaff52"},{url:"assets/delete.html-6835bb85.js",revision:"b9b8ef3aceb4eee5c64123afa8b05390"},{url:"assets/delete.html-eb2b025a.js",revision:"b8a5eb43c029bcd590cf82ed35fe90fc"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-45f7f5a6.js",revision:"12b32db0e3321f46083ad96def08ea8e"},{url:"assets/donation.html-f1bb3d13.js",revision:"837b253d09ab538bbb133693f7c0b1ca"},{url:"assets/dynamic.html-65fcdeee.js",revision:"3fb59c744f0391884f82365a0b614f53"},{url:"assets/dynamic.html-84857319.js",revision:"e99e3186bf2681edcf3bc2f91d335b65"},{url:"assets/entity-attribute.html-5bda7b31.js",revision:"4314ccc5806a4547b2fc17cc83ba6f51"},{url:"assets/entity-attribute.html-c976ee73.js",revision:"d651aeb22956b65fe7c26d2dc4a1ae83"},{url:"assets/Entity-Relationship.html-900eb4ea.js",revision:"929cc92c33e1fc51f5134f88c2016277"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-5f40a09f.js",revision:"5eae71870eb9306dddf1d480277bb8db"},{url:"assets/faq.html-02291893.js",revision:"fd9459623c6aaa4242a18100d7f5786e"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/filters.html-cfdc3446.js",revision:"7bcbb4819dd6ae7a4a757e668cc2ec17"},{url:"assets/filters.html-f1f4368a.js",revision:"914a57005e9863823504651e33e645a6"},{url:"assets/fluent-api.html-35492d4d.js",revision:"8e4ac10c835067dbabc49b238bce3d37"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-28e96507.js",revision:"5bfa016c0368b326b6d743b731f71074"},{url:"assets/freeredis.html-1355d9b4.js",revision:"5b44cc453d09c7ef2f0a8f3ea8a1a375"},{url:"assets/freeredis.html-1baf9d51.js",revision:"cc9a6f05be9b7836fa5300bf54744a43"},{url:"assets/freescheduler.html-6bd79a00.js",revision:"488cb8fa8e468551aff1ab785a4c2cd2"},{url:"assets/freescheduler.html-9817f4e8.js",revision:"2d2a0a18363f7e23664b5d056a5611df"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-auditlog.html-da46cbdd.js",revision:"199454cf31201560dc19adafd1f0508f"},{url:"assets/freesql-cap.html-881a693f.js",revision:"b41f192e65ff34e7dbb3ce2b926843d3"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-docker.html-4ac280a5.js",revision:"cf01a052c6e23d78d7026fb8a490924e"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freeSql-extensions-baseentity.html-7a104d6e.js",revision:"b892ac663c92e2c38b4ab9a1dcc5bfdd"},{url:"assets/freeSql-extensions-baseentity.html-8d6e7f7c.js",revision:"aff63f008f6352f4d3506276550d2d52"},{url:"assets/freesql-extensions-jsonmap.html-b975db5b.js",revision:"8a2e174621b9bdbe710c3fc0e66bbd82"},{url:"assets/freesql-extensions-jsonmap.html-e87eb7f2.js",revision:"b1a74a0d193c95a575ea9ff24647a325"},{url:"assets/freesql-provider-custom.html-511011c6.js",revision:"5aa0096a5046db1c4dbc004435c41635"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-mysqlconnector.html-a8d1f1b5.js",revision:"10b13ef43efa48171d677bf105ec1ff4"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-odbc.html-f6839020.js",revision:"706e8b5e32f1fe775257a44d72463f0d"},{url:"assets/freesql-provider-oracle.html-025512da.js",revision:"10413540c30f8d55a68bc689a11fec8d"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-postgresql.html-1ce4832a.js",revision:"c394ce70623eadbde8ae8da392c4c405"},{url:"assets/freesql-provider-postgresql.html-efd0a126.js",revision:"8283c122f12086137c7ab8142fd75bed"},{url:"assets/freesql-provider-questdb.html-5ed7bd81.js",revision:"c0aeaecac4cf72eabcc5eb8fa0c61e25"},{url:"assets/freesql-provider-questdb.html-79e3b535.js",revision:"78ec2fe16ac25b43444a921a43f9a2d4"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesql-provider-sqlitecore.html-7a55e037.js",revision:"05551f526ba327f2eb46f0c934047c3b"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/freesqladminlte.html-fc86baef.js",revision:"616d58241de1bc674931b39564cdefde"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-87ec5a87.js",revision:"5334a62cd41dfcd3345d3de14a250c47"},{url:"assets/getting-started.html-d296fc8f.js",revision:"9c458b0d7d6890074016d24ef34fd21f"},{url:"assets/getting-started.html-f43a9f84.js",revision:"44cb702e5f76a7b1eb36143b78bf1862"},{url:"assets/Greed-Loading.html-9c4d928a.js",revision:"9e6ebfc6d115c434eed1c0f5f97f08fc"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-90a6273e.js",revision:"8e086882ea9bcbaf28cb6894a9bc6455"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/idlebus-freesql.html-d6f1607c.js",revision:"97d0e703568dd4004dbcc9b29414a4b4"},{url:"assets/ifreesql-context.html-193e96f3.js",revision:"156382258e8e50b304e9bfc56c41e565"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-10634006.js",revision:"8fe762b0a69c2e40df696efdcb664f4d"},{url:"assets/index.html-1344bd39.js",revision:"a62bb8cee0bc655c3646b9bdeea56812"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-211e9a7f.js",revision:"31586c2674330b5d37906f3d90aba6c0"},{url:"assets/index.html-42136802.js",revision:"f5b23cc18d23fc2cf56f218f1551a57f"},{url:"assets/index.html-637f856b.js",revision:"a85883a2e377522b824480c2aab1e938"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-763986e5.js",revision:"7013f504e5070f9ad8c9081299557f8c"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-a1464cc6.js",revision:"148cd1ac662a385dccb3318de704a82d"},{url:"assets/index.html-ce4ced24.js",revision:"1e208da3f956e9ce9276ca769bb31901"},{url:"assets/Insert-Data.html-52b4e353.js",revision:"b133dbc8911a28c2e6e98524f620dcef"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-a729ff52.js",revision:"0a4db02a9d54e51cad91c7d1f3db06ef"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert-or-update.html-dea6019f.js",revision:"2d535168b6828cb2cd57034fc6f53e96"},{url:"assets/insert.html-06e570f7.js",revision:"9e62d6fac3f98cf7d187d4379bb7380b"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-2c8a9e9e.js",revision:"fbebe468b32e904254ed286fff99c1d3"},{url:"assets/install.html-7083bd07.js",revision:"694f79e65e370ef9ec151b2d457d3117"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/iselect-depcopy.html-b3674db5.js",revision:"545a1b983a99ac6ca7441a86681d656d"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-5b4f86ba.js",revision:"ea2de914647224819353e7215b5145d6"},{url:"assets/issues-in-valuetype.html-8367df35.js",revision:"6eabf1c1516b6a11c9b543be2b280adc"},{url:"assets/issues-in-valuetype.html-e0d57c1b.js",revision:"22a9ef332ca8f7230e32ba3a5b79f70b"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/issues-mysql5_5.html-d98d0597.js",revision:"d03d5290932510b597686efccca17638"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Lazy-Loading.html-eda2ca17.js",revision:"cd07001a972b452e9fa0de73673cd9ee"},{url:"assets/linq-to-sql.html-70a4e30b.js",revision:"76bdf8dfe3957a5e05ac6ab88146b4aa"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/Linq-to-Sql.html-b0ceb5db.js",revision:"fd95661222d72896ebc2a624239dfa36"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-3eb43481.js",revision:"aa1341f967c9a4f9dc877291410de725"},{url:"assets/multi-tenancy.html-4bf0f9c1.js",revision:"09329cc8a1cd60979d9546bb11132c6d"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/navigate-attribute.html-0026618c.js",revision:"72e938c6200b94ab5f3fd60a8312472b"},{url:"assets/navigate-attribute.html-9c9dfc74.js",revision:"ce7ee1f94cac9a16e051155125a9c1a0"},{url:"assets/otherworks.html-5332edd4.js",revision:"201f2a249be42bb2b545f2993987224b"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/Pagination.html-7dc5a983.js",revision:"8dc78a60e95e3cdacb0851963d7c7547"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/paging.html-1307db61.js",revision:"5c3d2b573254e8e5ddb45355707cb408"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/Parent-Child-Relationship-Query.html-59ddbd7b.js",revision:"fa38f09b71420dfc11b70b0845061151"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/performance.html-74552aeb.js",revision:"3c137668a99ed2a6b69248f3f000c683"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-12bb2dc3.js",revision:"cc79d24260a3d910ded3b8a02749336b"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-from-Multi-Table.html-0624b11e.js",revision:"025005c39a6a998a9ac60cad245cedd1"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-3d53d851.js",revision:"998ea9276ad815804191c2aa2dfd7837"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-4269794d.js",revision:"a19292658ce417da042d72074a3e6f89"},{url:"assets/read-write-splitting.html-71855a96.js",revision:"b2961b33d31d5359650043654b2b00fb"},{url:"assets/Repository-Layer.html-33f4f9b8.js",revision:"d6aa40f1751dc9aa105d603581122d9d"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/repository.html-958c2a84.js",revision:"3f4de3733978043c24a36936acdc81a9"},{url:"assets/Return-Data.html-273dd780.js",revision:"d7ba4bf41fdf178c2a6751335dd66e71"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/select-as-tree.html-06198795.js",revision:"bd13f5a97f2809845dc9e4b9b5095822"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-group-by.html-412dbf18.js",revision:"de1b067245481864b9be98399b607169"},{url:"assets/select-group-by.html-fae94353.js",revision:"ce80cb1881a52c44c2ed923cba739b39"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-include.html-ecc3f354.js",revision:"cafda9637af95510518a8d18ac5991a9"},{url:"assets/select-lazy-loading.html-2f354c8f.js",revision:"7fe8bf632104d1427ef5e4d13bf26b4a"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-multi-table.html-fc38114e.js",revision:"3df031486f4bd314617e4be83645d397"},{url:"assets/select-return-data.html-0cc6a876.js",revision:"d9cfa3e031c702cab60c4277a8b52594"},{url:"assets/select-return-data.html-96380762.js",revision:"99d87884b9b830cc63b7cf6d3b6bdd62"},{url:"assets/select-single-table.html-059af849.js",revision:"5f8dd9482ff5d1940dedae4e357a903f"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/select.html-fabafad4.js",revision:"c9be98dea9f93b27b8f7ff5ff941d690"},{url:"assets/service-support.html-395c213a.js",revision:"2a3f65304faa8423772213a2bb79d28f"},{url:"assets/service-support.html-ff785f3a.js",revision:"81909dd7d7507a971fddd0ca38af066f"},{url:"assets/sharding.html-c34c9993.js",revision:"9d1ceb7eeb91707987deeae4f1514916"},{url:"assets/sharding.html-df31a987.js",revision:"bb6729810fd27d6632cce5dde599c997"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/transaction.html-bf743a00.js",revision:"37f687f36aedd45e6dd9e31f06744613"},{url:"assets/type-mapping.html-bfc237b7.js",revision:"8b04ddbe5108317062cb7890ee077828"},{url:"assets/type-mapping.html-d98c3950.js",revision:"11ceafab54dacbb3cb2ca8f9e6cecec6"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/unionall.html-e5471821.js",revision:"2f509c9648f38a74b6ac3c0ff461ebea"},{url:"assets/Unit-of-Work-Manager.html-54770a77.js",revision:"7cd66d4fbbc5d4b8f4789c7d7a0224fb"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/unit-of-work.html-00334254.js",revision:"7f1081a98f68dcc050227602a545e809"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/Unit-of-Work.html-9c91cdba.js",revision:"162b6f37a1fd9bfe31aed4d6931e9571"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/unitofwork-manager.html-a915b3fe.js",revision:"1ee2296fc058f1bb6e9d3853729db246"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/Update-Data.html-9e6bc51a.js",revision:"c93e503c38549ed4b982a746e8007372"},{url:"assets/update.html-11c6c719.js",revision:"e6ddf77dfa0f969fa234ea302c84d7e5"},{url:"assets/update.html-631a0808.js",revision:"60aae90470cb9f52e32cbfb7db77bdc6"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-dapper.html-c7773d7f.js",revision:"897a006b8366ebd0de2468d56ac168dd"},{url:"assets/vs-entity-framework.html-730ad7be.js",revision:"9aa7dab1866e909bb7544a571d4c15d5"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/With-Sql.html-2eabe74a.js",revision:"c91f9a266194c2cf62a1471503b8ef79"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-691111f7.js",revision:"cdd6d1cade4380e4f3a4eefc6db35cb0"},{url:"assets/withsql.html-c38922bc.js",revision:"44ac242bdc46d333b48ba07e7a112eb5"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"assets/withtempquery.html-fd1135b7.js",revision:"8ea2aa86d4ff0387812a1f0f76ef5a6f"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"6dfb6ca63f5f5c0ccd3d240f54692473"},{url:"404.html",revision:"0dd46c5df7674f3c0dcd1d5d71c19be0"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
