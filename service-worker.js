if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let i={};const d=e=>a(e,f),c={module:{uri:f},exports:i,require:d};s[f]=Promise.all(t.map((e=>c[e]||d(e)))).then((e=>(r(...e),i)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/404.html-e3477815.js",revision:"51614807c26bfbb371a9050adc2f5d99"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/ado.html-c3a76e9c.js",revision:"2b063009ed1773790120651804bb1396"},{url:"assets/aggregateroot.html-611932d0.js",revision:"beea7af0f120d2fcf959995f7deb17d6"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aop-freesql-autofac.html-32cceb3d.js",revision:"a3ae98ef4066adef8f416158b17eade5"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop.html-1b691ebd.js",revision:"15f85378107243b8222ccb1b7b7850ef"},{url:"assets/aop.html-5c30bf99.js",revision:"a3894c14d0adab0e46382236ec006f00"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/api.html-8af96a8e.js",revision:"af5929aac3bc580925c9a35638e47041"},{url:"assets/app-7b133bf0.js",revision:"f099badc2a0fe5ad132c65c3f54a373e"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/awesome-freesql.html-ec1e0a2d.js",revision:"d5cfbed163590d7c4c2f3d33406dfd0c"},{url:"assets/BaseEntity.html-1466226b.js",revision:"60a560f298f817a977b7181267ed93e1"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/cascade-delete.html-a9285970.js",revision:"7dbd54a0533df0746439c31d47a44d14"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/Cascade-Saving.html-bac775a1.js",revision:"147d570360999a456a6bc3c9078f3d0d"},{url:"assets/cascade-saving.html-f4105031.js",revision:"07ca7b3e8e8e7c02c9f4e2476f409e0f"},{url:"assets/change-log.html-21ddfc7b.js",revision:"cdf81226490448819bc2395126c11282"},{url:"assets/change-log.html-850e3570.js",revision:"0a31bcb9e8555a9a14ddeddb3246f590"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/code-first.html-d491a106.js",revision:"0f3c44d189e758bf10b7b24ac4215f42"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/CodeFirst-Mode.html-cbaacc3c.js",revision:"b1ef3565ac37d2434272cb469138836f"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/config-entity-from-db-first.html-f9404498.js",revision:"b83be87683ed49171311d57d2d86f48b"},{url:"assets/contributing.html-05b830c9.js",revision:"670ca11c8b7edb374faaf77786210d89"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/custom-attribute.html-2df55af7.js",revision:"99416911d741892ab2bc3ee7659a5fc1"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-context.html-a9f0183d.js",revision:"3356a9fea8310771ffc9bedfb8672bea"},{url:"assets/db-first.html-6352edb4.js",revision:"4eb60023dafa6ffe28395f4006c650e8"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/Delete-Data.html-cfa382f9.js",revision:"810b9969a47fef28d10065539c1a8c79"},{url:"assets/Delete-Data.html-ef978f95.js",revision:"fea197610122fa5f782dc9910f173037"},{url:"assets/delete.html-0bf5de80.js",revision:"c978d02e749b2bff4d890639d80fdfb0"},{url:"assets/delete.html-bb10f205.js",revision:"83873218541b1a8af700f0162da656fd"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-14b3b86e.js",revision:"4927d891219745a3d5d73b84fbf22131"},{url:"assets/donation.html-45f7f5a6.js",revision:"12b32db0e3321f46083ad96def08ea8e"},{url:"assets/dynamic.html-35f7f61e.js",revision:"f65a319595ffeb7ccbfa2c22da27bc57"},{url:"assets/dynamic.html-37c266b3.js",revision:"a571be1fc2adb32c6604537438e5089d"},{url:"assets/entity-attribute.html-0caf6592.js",revision:"7112a8f38fd87fe37b1fdd6e7894601f"},{url:"assets/entity-attribute.html-565be951.js",revision:"562cd3995e17aecb1ebd745fc6cc6a1a"},{url:"assets/Entity-Relationship.html-1c7b0b64.js",revision:"275fec3fde0c8dcdf83f339a91ceab38"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-e95c9cf5.js",revision:"f6fc2d1384127f0b704a3303f77ca940"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/faq.html-feca0dac.js",revision:"94fd4dabd90ed011d78fb2fa5d424c2d"},{url:"assets/filters.html-415eaaee.js",revision:"9c83337c5d881852b82e9a9a6d8cf144"},{url:"assets/filters.html-f1f4368a.js",revision:"914a57005e9863823504651e33e645a6"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/fluent-api.html-cc27e1ad.js",revision:"c48af64084404ccf8c3c1c35b187e41c"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-5de1fce0.js",revision:"9097c2086b064fa32f496b7a6f785746"},{url:"assets/freeredis.html-12eeeb25.js",revision:"5390b095457c853235a8c946056bf0b0"},{url:"assets/freeredis.html-b4ab0a8d.js",revision:"7906733f65aae397aac459e85b214707"},{url:"assets/freescheduler.html-81487856.js",revision:"4575ac1c905594c1fcb09117e1e2291c"},{url:"assets/freescheduler.html-d9034b8e.js",revision:"f6f48120cc6e7ae4e60899b43157124e"},{url:"assets/freesql-auditlog.html-200586df.js",revision:"8f7f701efe24c7e37694990a001c2cde"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-cap.html-4b5a195e.js",revision:"d8bc19512be3382544d8be8b85347572"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-docker.html-38245818.js",revision:"7c84c1d840a9bfa90479aad1db363b29"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freeSql-extensions-baseentity.html-6979d49b.js",revision:"db2ad30782db10c24cbd345249e31ed9"},{url:"assets/freeSql-extensions-baseentity.html-7a104d6e.js",revision:"b892ac663c92e2c38b4ab9a1dcc5bfdd"},{url:"assets/freesql-extensions-jsonmap.html-e7cd13af.js",revision:"664147988c75db6d8cae1b9db9a2095f"},{url:"assets/freesql-extensions-jsonmap.html-e87eb7f2.js",revision:"b1a74a0d193c95a575ea9ff24647a325"},{url:"assets/freesql-provider-custom.html-ae7f9785.js",revision:"3055b5fc1c7dd88479080917b319e7e0"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-8d364363.js",revision:"b4260a8148ced7e26e635f84709771b9"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-odbc.html-af247b75.js",revision:"7a9ae2ea92618dcd604b5120c6f6aa45"},{url:"assets/freesql-provider-oracle.html-04328d10.js",revision:"22fbcf7755f298722f0dcf6bc3c933d8"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-postgresql.html-1ce4832a.js",revision:"c394ce70623eadbde8ae8da392c4c405"},{url:"assets/freesql-provider-postgresql.html-3e18ffe2.js",revision:"53e7512ac9184931f4e685ca34cc28dd"},{url:"assets/freesql-provider-questdb.html-5ed7bd81.js",revision:"c0aeaecac4cf72eabcc5eb8fa0c61e25"},{url:"assets/freesql-provider-questdb.html-81818632.js",revision:"31413840d94c74163dcc83764710de57"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesql-provider-sqlitecore.html-fb62ec35.js",revision:"6ef4ed7afa5943b8037a2b37881df00b"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/freesqladminlte.html-c451e346.js",revision:"ae7bf7dcacbe00d5dee9755001c8198d"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-50d7a526.js",revision:"d6efc75081acfaf952431f230196e98f"},{url:"assets/getting-started.html-8a3fb637.js",revision:"98437a2870ea59a324bc6b71f753e6d6"},{url:"assets/getting-started.html-dad75e36.js",revision:"b7155d9e1acf08ff61a886306be3f1da"},{url:"assets/Greed-Loading.html-a3823cf1.js",revision:"37114f8a9f3a857ace2f8b58c5b8237e"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-c098efb9.js",revision:"3c7fe1ef66d27b0cf2065a24ff960163"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/idlebus-freesql.html-8b39c4f7.js",revision:"2c707ddf6c182685e46534f8609545f3"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/ifreesql-context.html-e345768b.js",revision:"aeb9f479562174ab091560145e3ffd41"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0036e9ab.js",revision:"b9b75edd9654f29229ebf042932fd2e7"},{url:"assets/index.html-16f9592b.js",revision:"1d50832bc8786364db9f4f2ca26209ab"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-4e8fa4b2.js",revision:"dce39808f83a45b9390938b59d3d2072"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8757fa1b.js",revision:"07c5fdd585c7075944f4e383e31cb987"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-9284109f.js",revision:"e5a2feae313b90a064898747550c2cac"},{url:"assets/index.html-aaafe00b.js",revision:"c52b7fb8bbd3e9c83a98d225e401678f"},{url:"assets/index.html-dc44e6e0.js",revision:"5e95f54c76a3d5827de3933c6c7063c3"},{url:"assets/index.html-fff932bb.js",revision:"4fbffa412fd29a5448df7eb013030459"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/Insert-Data.html-5b200996.js",revision:"e1bededa9ea7a8f2529f03b7ac530ca2"},{url:"assets/insert-or-update.html-814dbe2f.js",revision:"f52fe4176ae17b66f985cba067d7a364"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert-or-update.html-fff86e4f.js",revision:"73f865a50fca1385e17b16230b4dcb99"},{url:"assets/insert.html-8f290144.js",revision:"ce3e26074d55e2b1a23ddead769bf6fc"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-16843c68.js",revision:"e58b01773c709116f2441e009e137c06"},{url:"assets/install.html-1d8e9e39.js",revision:"e28cfbf210fe1d73920e695ffa7b6c7f"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/iselect-depcopy.html-beed70ca.js",revision:"e2d44cabba68a8cfaa23b80c91ab3fe2"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-eac960a5.js",revision:"d52ce0ddaaf7e6e4ecbabb2c39bf1fea"},{url:"assets/issues-in-valuetype.html-3428cb02.js",revision:"a2b90e02ae03f74030b3405626a6f3b7"},{url:"assets/issues-in-valuetype.html-9dd15629.js",revision:"59036e48d25faf5fe57354015543fb74"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/issues-mysql5_5.html-deb8abeb.js",revision:"01781650f29f2ffb3e86cc3774367a50"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Lazy-Loading.html-9b726378.js",revision:"b43b42ec7109b40864dbcb14cdc7fa4b"},{url:"assets/Linq-to-Sql.html-19f4d2d3.js",revision:"50d2c6732a098a996fe768c9b8152264"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/linq-to-sql.html-bcbe20d3.js",revision:"a3ff5b44527cd1edb5f8fb8c792619db"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-efc88d72.js",revision:"cfc20cb45a9878af8ac91b0b60d08b1d"},{url:"assets/multi-tenancy.html-64a5eeb6.js",revision:"8d4468b1593858493affc15fd033f90f"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/navigate-attribute.html-1028fc6f.js",revision:"21f175e80cd0e438cd83be1087857d21"},{url:"assets/navigate-attribute.html-1d0944b7.js",revision:"4772d8a9c888116598e6c0d04519935f"},{url:"assets/otherworks.html-0e744bf2.js",revision:"6aabb76f0f383a20df2b8fb1180017e4"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/Pagination.html-f5388109.js",revision:"4ac2d2b38ce0414f8a8714778ab223bd"},{url:"assets/paging.html-14b3cda8.js",revision:"d35092d0b4aff92c16f43911e456af0a"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/Parent-Child-Relationship-Query.html-2f011f08.js",revision:"893098caf4a066abe9b48add5d609d10"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/performance.html-b4d1562b.js",revision:"31903fdd400be2a62769f082c424dd8e"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-7fa905cf.js",revision:"58e34ee19cb5f4a318cd209381bc9299"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-from-Multi-Table.html-40438d44.js",revision:"6c625c86aac391b37dff31900ddb0db4"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-a0e019dd.js",revision:"c525394eefc24c509bd69928722a0cec"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-71855a96.js",revision:"b2961b33d31d5359650043654b2b00fb"},{url:"assets/read-write-splitting.html-76046476.js",revision:"44005c8b9b2129b07e452e8ef795bae9"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/Repository-Layer.html-bdd1a8b1.js",revision:"201b61ccd58143fcb6e87d99d713ae08"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/repository.html-2b05baf2.js",revision:"7fd668a02032291565e198203f8f5518"},{url:"assets/Return-Data.html-16d6d65d.js",revision:"0b8fabb0a48cb96a59fe349eeccdcc2e"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-as-tree.html-d34d1c0b.js",revision:"f12b8b614b95548890f600371538c79d"},{url:"assets/select-group-by.html-30188dcb.js",revision:"72ed571d8251fa14b7f91265acc34e0c"},{url:"assets/select-group-by.html-ec5c058e.js",revision:"b28e5b39811f873e6d14ec31f77f4a51"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-include.html-85c65a07.js",revision:"027764abefb7fb9297d9c98acb40a99e"},{url:"assets/select-lazy-loading.html-4672a10a.js",revision:"3eb5044b3ae3751e3d5ecdcfed649f52"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-multi-table.html-fd86671a.js",revision:"609e9d46c2e037b113640241eba2e163"},{url:"assets/select-return-data.html-c8ae6db7.js",revision:"f3e281cdc47cad10db3b2cf40895a672"},{url:"assets/select-return-data.html-e86b287b.js",revision:"a0d66395b740ca9c070cb2b3edaa1dcb"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select-single-table.html-b4a6c3c6.js",revision:"371a5d08de9fe85b872141604bd59503"},{url:"assets/select.html-58fa7860.js",revision:"6b4b0ade4b56ed3e98f94dd1319fec8f"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/service-support.html-395c213a.js",revision:"2a3f65304faa8423772213a2bb79d28f"},{url:"assets/service-support.html-e712db31.js",revision:"3a6f77a9e6090c146dc7d019f8fcab56"},{url:"assets/sharding.html-730b4d4f.js",revision:"61ded82e847ae6f2a6cdf6c24ed6453e"},{url:"assets/sharding.html-e8327a79.js",revision:"d344cd6bb26691406bf34e35e58f1871"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/transaction.html-a10e1c7c.js",revision:"4ea9866232f714060bb6118318ac11fb"},{url:"assets/type-mapping.html-25abfe8f.js",revision:"19cb26f56a08fd1e5564b662ad12521c"},{url:"assets/type-mapping.html-c218846b.js",revision:"72511407af427501e2dec1ea2ff3b9a7"},{url:"assets/unionall.html-158a4096.js",revision:"2650c2eaf5c0b9df65d02f8cc9045e4c"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/Unit-of-Work-Manager.html-c753c60f.js",revision:"cf4f75db18ae9c21858e0d3e44979697"},{url:"assets/unit-of-work.html-76aa0737.js",revision:"a6bd3bb71f72be3966d08890210e38d8"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/Unit-of-Work.html-dbc0828c.js",revision:"0b4307761c78f35e79afdbb5c39cef9f"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/unitofwork-manager.html-309e16fd.js",revision:"0938ef3421f7a98daee19b5128b2376f"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/Update-Data.html-71211005.js",revision:"a54fcdadccc22cd90f48c9131ff3ca40"},{url:"assets/update.html-3455588d.js",revision:"1d3bff585b6b986589c3c3ae20e93e50"},{url:"assets/update.html-952b649e.js",revision:"2ad376027c14dad837901a08358165ac"},{url:"assets/vs-dapper.html-433efb50.js",revision:"26536f2af823b305e4c84ae6c63b85aa"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-entity-framework.html-6f483be9.js",revision:"d9d3540540f858d03987b9df8d077881"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/With-Sql.html-e588e97c.js",revision:"358e90e1873b3aaff0040c72ee4ba97c"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-0d449614.js",revision:"ef526693b0d44de6dab899bef8267767"},{url:"assets/withsql.html-cfda5b6a.js",revision:"557cbc3700d653b37db886788926f6f7"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"assets/withtempquery.html-e246aa37.js",revision:"29d29672d3dc51451664fa44274bbf6d"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"506af678a66e0ca068a5c284dafb2afd"},{url:"404.html",revision:"3decf6cf95a01d19f9a2948c5d1fbc71"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
