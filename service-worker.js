if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const d=e=>a(e,r),f={module:{uri:r},exports:i,require:d};s[r]=Promise.all(t.map((e=>f[e]||d(e)))).then((e=>(c(...e),i)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-7150cff7.js",revision:"606b81439be27679acf4d3b431abaf9e"},{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/ado.html-19499291.js",revision:"59cfdbf288b1cc9a5523b43e3737137d"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/aggregateroot.html-37076460.js",revision:"9851a7cb2339b143b0d3bada01f91506"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aop-freesql-autofac.html-b7173401.js",revision:"f6deefd6e1729091956fc64286509bdc"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop.html-1b691ebd.js",revision:"15f85378107243b8222ccb1b7b7850ef"},{url:"assets/aop.html-5e2dc792.js",revision:"aa2cc14de590fcb3cfb02f71bc5eccdc"},{url:"assets/api.html-7e48ee87.js",revision:"69630fc8c8c64aeb0f6790ed288efb59"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/app-3cdbbda7.js",revision:"0e8627067486cf306812875fe99dd746"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/awesome-freesql.html-aab5af66.js",revision:"787b473a821752a180cae8ecf326103c"},{url:"assets/BaseEntity.html-3190513c.js",revision:"2a03771854c29e2ba306617b83beeaa3"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/cascade-delete.html-43d22a57.js",revision:"41ca99655303a65cfbc6eac1de21be62"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-04824691.js",revision:"9c491027357366def87cd31533e8672b"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/Cascade-Saving.html-77343ae2.js",revision:"f1b7461f11981d957b24bdfbc657eae7"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/change-log.html-21ddfc7b.js",revision:"cdf81226490448819bc2395126c11282"},{url:"assets/change-log.html-5c9c21b2.js",revision:"ea4154bdc1683f6bb865de6b0802f3db"},{url:"assets/code-first.html-210bde9c.js",revision:"129205b5bdd67cf91d432f825ab3af78"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/CodeFirst-Mode.html-75519711.js",revision:"1cd6efe49dc0001065e081c0dfff32d8"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/config-entity-from-db-first.html-6a8ca035.js",revision:"27048ab975e425f15c6790d2cfccd375"},{url:"assets/contributing.html-db96cbfa.js",revision:"993958ab9238a7194824720ca5983d92"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/custom-attribute.html-39700ae7.js",revision:"1c29a323594fede9420dd5e71a5092ca"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/db-context.html-224c80c4.js",revision:"c357ce3bdff7e8a08976a8482c7d9326"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-first.html-45e7077e.js",revision:"d0173672fc47ebdd1dc6e6aeb4cd25f7"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/Delete-Data.html-42eb33d4.js",revision:"be84c667e8f25c1a49f36dfa654ab21f"},{url:"assets/Delete-Data.html-ef978f95.js",revision:"fea197610122fa5f782dc9910f173037"},{url:"assets/delete.html-bb10f205.js",revision:"83873218541b1a8af700f0162da656fd"},{url:"assets/delete.html-c19018c0.js",revision:"6e4fb3d0aff45167b56ad0cc4741cd91"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-45f7f5a6.js",revision:"12b32db0e3321f46083ad96def08ea8e"},{url:"assets/donation.html-c0be5346.js",revision:"715ddb0075901fc1bb2a46570b042230"},{url:"assets/dynamic.html-35f7f61e.js",revision:"f65a319595ffeb7ccbfa2c22da27bc57"},{url:"assets/dynamic.html-d90f993f.js",revision:"46b3b8c64bd399b41cdaf7377a57b66d"},{url:"assets/entity-attribute.html-0caf6592.js",revision:"7112a8f38fd87fe37b1fdd6e7894601f"},{url:"assets/entity-attribute.html-ef377329.js",revision:"9a5fba4a67f5a274e6dc012fd6726210"},{url:"assets/Entity-Relationship.html-7ff828db.js",revision:"11873594a5b463dc2626920e893db834"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-401c5083.js",revision:"a42e50cf28215750c39123b6eab02653"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/faq.html-7be1cb5c.js",revision:"6d91ba30aebb37bfef2eee17c0c0f93a"},{url:"assets/filters.html-2f5b6ba5.js",revision:"ac7af41bbc00fe23cd1ea80395bac3bc"},{url:"assets/filters.html-f1f4368a.js",revision:"914a57005e9863823504651e33e645a6"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/fluent-api.html-9cbf8f32.js",revision:"7c781bac323842d56a2b8cb4ae7ffd3b"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-752e90dd.js",revision:"accda1b2c0ade923544ee9917b9964de"},{url:"assets/freeredis.html-12eeeb25.js",revision:"5390b095457c853235a8c946056bf0b0"},{url:"assets/freeredis.html-f60885fa.js",revision:"5d6a592568121cbe923af6415d57f93f"},{url:"assets/freescheduler.html-1c4c43fa.js",revision:"a906008e78b895a4bf6c3c01a44b5be6"},{url:"assets/freescheduler.html-d9034b8e.js",revision:"f6f48120cc6e7ae4e60899b43157124e"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-auditlog.html-b0057b2f.js",revision:"59926667d44e66b99f60f94702298929"},{url:"assets/freesql-cap.html-49bb9317.js",revision:"c7d2f304df6dcc3cb2601ecae3e2587f"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-docker.html-9ea61b34.js",revision:"cf48ffd6ebe1394617732eb9b8f69058"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freeSql-extensions-baseentity.html-7a104d6e.js",revision:"b892ac663c92e2c38b4ab9a1dcc5bfdd"},{url:"assets/freeSql-extensions-baseentity.html-fc90b3bc.js",revision:"8182c802bbb59552165772b4a6e9b087"},{url:"assets/freesql-extensions-jsonmap.html-7cb39648.js",revision:"cee98a729e8379355ffe15d82f1a2239"},{url:"assets/freesql-extensions-jsonmap.html-e87eb7f2.js",revision:"b1a74a0d193c95a575ea9ff24647a325"},{url:"assets/freesql-provider-custom.html-013f5ae4.js",revision:"bd2d1a1bd5c7f3e7fcd477b1682966bf"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-0f69c83b.js",revision:"fdea1b55714688e768ee2b2004428961"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-odbc.html-48eaa831.js",revision:"f2b25bd77e2357158178fd2c23bbb03c"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-oracle.html-30fa7adf.js",revision:"1679765cd12453831189f2aa1df713b3"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-postgresql.html-1ce4832a.js",revision:"c394ce70623eadbde8ae8da392c4c405"},{url:"assets/freesql-provider-postgresql.html-47f29b1e.js",revision:"aa0fd115e82cecfcb02e61573116ee73"},{url:"assets/freesql-provider-questdb.html-304b3540.js",revision:"362864550d54b14480fafd204e34674c"},{url:"assets/freesql-provider-questdb.html-5ed7bd81.js",revision:"c0aeaecac4cf72eabcc5eb8fa0c61e25"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesql-provider-sqlitecore.html-eb843de2.js",revision:"4ec8a97e5438e3640e53cfc0c3efe02d"},{url:"assets/freesqladminlte.html-4e2e6f0e.js",revision:"680dbb8d4c8f4e19f1ca216f5feca8aa"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-91d8fec9.js",revision:"21058a0d11f9a1cfff35b6454fa07437"},{url:"assets/getting-started.html-dad75e36.js",revision:"b7155d9e1acf08ff61a886306be3f1da"},{url:"assets/getting-started.html-e942efe1.js",revision:"b71cbe410fbadfbb3cee0ecb1b6de748"},{url:"assets/Greed-Loading.html-312267e7.js",revision:"2102ec4f919e37d93b8bd91b1961c193"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-71233304.js",revision:"9a07a3ffa7a011764f3c6ac811be015d"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-10ec243d.js",revision:"30f55b6aa883e23b5a4d00be96a84c19"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/ifreesql-context.html-f95f5398.js",revision:"00ac37a1314116da0c74f531c69b3000"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-1344bd39.js",revision:"a62bb8cee0bc655c3646b9bdeea56812"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-28cdd5a1.js",revision:"c0e3c9285b852a41c348bd4126c0c492"},{url:"assets/index.html-3542251e.js",revision:"54f33464a1c795df11b98101d9e75a7b"},{url:"assets/index.html-40d6a982.js",revision:"d936f232580bf3eb2b0699a3b6742c5d"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-763986e5.js",revision:"7013f504e5070f9ad8c9081299557f8c"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-c64102e1.js",revision:"2352031bf6137c39d48425e68f40cb60"},{url:"assets/index.html-e4a93a8e.js",revision:"c028b7162a0f487cab8dd9eedd8ccb19"},{url:"assets/index.html-e9fac9c8.js",revision:"fd18c69f7569f83df2d1ed479dd01305"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/Insert-Data.html-80f36166.js",revision:"5d82b2bb8263460585c1e4fec861e092"},{url:"assets/insert-or-update.html-60832343.js",revision:"6ce7b83475dfaa30128622a5eff61f4a"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert-or-update.html-c5105a58.js",revision:"9df784a2ce10bc9cb3e284edb4a460b6"},{url:"assets/insert.html-1e7bdce1.js",revision:"bcd1ee80dec579406dd66c6b0733a01e"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-8ae78a54.js",revision:"dd7afe5278704c7f7c7f8f897b760d03"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-a7b85356.js",revision:"b5427ee576c0de671514530a450d54d7"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/iselect-depcopy.html-2d5c1afb.js",revision:"815e3c154c85b8bddb2cd602e5325565"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-4ea5ecba.js",revision:"5ca3e76697836070da772d247897fd13"},{url:"assets/issues-in-valuetype.html-9dd15629.js",revision:"59036e48d25faf5fe57354015543fb74"},{url:"assets/issues-in-valuetype.html-fe935663.js",revision:"da12dc735fedff33deb2d70a1069d2e1"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/issues-mysql5_5.html-f34c8d08.js",revision:"cc4d88b1cb29b18d970db0c8ecc3ae7a"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Lazy-Loading.html-f98fa831.js",revision:"48dc120eb490cadcb59fa9015e133c1b"},{url:"assets/Linq-to-Sql.html-6ae9fb27.js",revision:"071fb9ec2be5e14db1a0939fd1284c88"},{url:"assets/linq-to-sql.html-7797d9fb.js",revision:"65a294f324076a1e2ef5255e24287d77"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-89f1d928.js",revision:"ad4fca9ce1104353de40b222847f7a22"},{url:"assets/multi-tenancy.html-8d9731ae.js",revision:"33feac51a6367126f00a34135190777b"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/navigate-attribute.html-08bced38.js",revision:"8a86426e0511000626a26f618c9a94b0"},{url:"assets/navigate-attribute.html-1d0944b7.js",revision:"4772d8a9c888116598e6c0d04519935f"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/otherworks.html-f31e0364.js",revision:"e7cefc35fed84128ba53cc6f6a4609af"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/Pagination.html-b9f11b98.js",revision:"0fa91c924a0518beea79530a3bb2203b"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/paging.html-9a4ffdca.js",revision:"f82cd924ec189ae5f21453efc17e8b9c"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/Parent-Child-Relationship-Query.html-f07e20f6.js",revision:"4deca9dab4ef80da26dd0076528a1596"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/performance.html-ff79270c.js",revision:"325922fe06ac149d6c1e02a79de9eae3"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-69b15d47.js",revision:"d3e356e146016c992e44ae1845be54ca"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-from-Multi-Table.html-28f75df1.js",revision:"4a6ecab2d6484e0c41021619c873e718"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-1aa79420.js",revision:"2d17ce1abacf18729abda392dc1083f5"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-71855a96.js",revision:"b2961b33d31d5359650043654b2b00fb"},{url:"assets/read-write-splitting.html-f87c78da.js",revision:"a8ca7bc1587fa97d2509c625a54df51f"},{url:"assets/Repository-Layer.html-9a0a9e46.js",revision:"0bc94f78b1abe4b9778f2c70d526708e"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/repository.html-ae68941a.js",revision:"ba9d546fe57a7e2abf8685655892e8bc"},{url:"assets/Return-Data.html-16342efb.js",revision:"e625a623d16cca6249ab8a9ab4665661"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/select-as-tree.html-0b290f37.js",revision:"336bb61f5f3d77ce5ce148faf6bae227"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-group-by.html-64099abd.js",revision:"8481185ab76f70c90661dc0a6f03c74b"},{url:"assets/select-group-by.html-ec5c058e.js",revision:"b28e5b39811f873e6d14ec31f77f4a51"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-include.html-5c7c479b.js",revision:"0a0cfb5b15928d96db215f0ff07208ca"},{url:"assets/select-lazy-loading.html-8592ff33.js",revision:"b73838a97a9cf5b059177e9ff46d938c"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-4f6ded4a.js",revision:"c7080123fca04b2cab519306d8217dcf"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-return-data.html-ab01c202.js",revision:"b166132c1aff582b7fdba0fa312b3eb9"},{url:"assets/select-return-data.html-e86b287b.js",revision:"a0d66395b740ca9c070cb2b3edaa1dcb"},{url:"assets/select-single-table.html-0105733e.js",revision:"4632300c8fb0d25c22e336be03d27465"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select.html-25cc9e93.js",revision:"8efb9bdfdd744dfb8cdd0c659ed93c81"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/service-support.html-395c213a.js",revision:"2a3f65304faa8423772213a2bb79d28f"},{url:"assets/service-support.html-9c9fff50.js",revision:"1eff9f1ea3ef6d717f398ed5497cc8e9"},{url:"assets/sharding.html-5a58764e.js",revision:"9a1b052483fe102073e24ad6a08372b1"},{url:"assets/sharding.html-730b4d4f.js",revision:"61ded82e847ae6f2a6cdf6c24ed6453e"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/transaction.html-8d5c8176.js",revision:"1d0fcbf79b7255020191fb67cf44e3e1"},{url:"assets/type-mapping.html-82c7ead0.js",revision:"1127374bb4ece7ecd1d71c077c91c1bc"},{url:"assets/type-mapping.html-c218846b.js",revision:"72511407af427501e2dec1ea2ff3b9a7"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/unionall.html-d98fee62.js",revision:"132a17899eb3753db5882b77908ab228"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/Unit-of-Work-Manager.html-cdc0c1d5.js",revision:"3a2131a96d2b16e2b379d34875450669"},{url:"assets/Unit-of-Work.html-2e43f96b.js",revision:"46952653c34ada0d35f0622f64516658"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/unit-of-work.html-b76ea111.js",revision:"33a2b6269beaffd14f1ef49661b34b65"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/unitofwork-manager.html-c42e4e9f.js",revision:"d8c8deb99a88e4c06de4cd35da4b98a3"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/Update-Data.html-e85713c8.js",revision:"fc5e5c9deedc83aba16957928ec53525"},{url:"assets/update.html-3455588d.js",revision:"1d3bff585b6b986589c3c3ae20e93e50"},{url:"assets/update.html-fa738cf9.js",revision:"0ec23c34ebfe89e1e12449bf142f21e3"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-dapper.html-a8c04289.js",revision:"d451f89afec99b459c9ec56fa4543b09"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/vs-entity-framework.html-b3c63d8e.js",revision:"d4fe95b5211c748966197685e93e6e54"},{url:"assets/With-Sql.html-d132beef.js",revision:"7c97735ae471fc766f69f16ebe70226d"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-958d5e0c.js",revision:"31ea01fe8c6253821c71cb92bd27ca21"},{url:"assets/withsql.html-cfda5b6a.js",revision:"557cbc3700d653b37db886788926f6f7"},{url:"assets/withtempquery.html-5dec4556.js",revision:"1168f5a68867abe63f2c5165f74b0a7d"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"4f33d9dbc9d786fd047d8d262eddd357"},{url:"404.html",revision:"6fff9ed491dd0b61e1e1a3e4bb591235"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
