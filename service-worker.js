if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const d=e=>a(e,r),f={module:{uri:r},exports:i,require:d};s[r]=Promise.all(t.map((e=>f[e]||d(e)))).then((e=>(c(...e),i)))}}define(["./workbox-91fa23da"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-86b43cf4.js",revision:"99271ac6ee8e1ed9bdacc87ac839aa0c"},{url:"assets/404.html-d9a7f37d.js",revision:"589e7ed84c1f5c651819cc0bf3690711"},{url:"assets/ado.html-755378b9.js",revision:"1dffe718cae39e920e02838f46a74156"},{url:"assets/ado.html-a8a56a08.js",revision:"4524b4148ce668ec875a20c02367811e"},{url:"assets/aggregateroot.html-b5118785.js",revision:"19ccc230fb59bb0282073a9b3277a1c1"},{url:"assets/aggregateroot.html-d9106894.js",revision:"ea58c55912e04a6f5b5f8e5ac7ce7470"},{url:"assets/aop-freesql-autofac.html-bd293d33.js",revision:"635673c71b796d3aa7c7c7bc724aa2b2"},{url:"assets/aop-freesql-autofac.html-ecd85b67.js",revision:"b583327f27fb3990d1c7507846ebdfd8"},{url:"assets/aop.html-cf84b2ff.js",revision:"63101d66ce96a974c10153842f9fc45d"},{url:"assets/aop.html-f11722dc.js",revision:"83c5f4b496b685fbb41d93e22829a9b2"},{url:"assets/api.html-2f5881c9.js",revision:"f76130d0415f29d52e31f01cf908cd8c"},{url:"assets/api.html-870692b7.js",revision:"b4594d2b99cae937aaf70741e5b3656d"},{url:"assets/app-f05be891.js",revision:"e50349710a72c96e63c84576685ace32"},{url:"assets/awesome-freesql.html-1652f3c3.js",revision:"0d5a67de49ef6423ffbba31e8874f647"},{url:"assets/awesome-freesql.html-4cb02da0.js",revision:"96ad31b2a6c8b690f6b9716cd9fa17ca"},{url:"assets/BaseEntity.html-6a75917c.js",revision:"ca83a9c68d0ed5cfba64bc0be7f61a52"},{url:"assets/BaseEntity.html-c4132f17.js",revision:"0d437bc2830d293356dbde0f7245aa52"},{url:"assets/cascade-delete.html-7e87a535.js",revision:"d6000d2e081818a96a77e0504fe2f89e"},{url:"assets/cascade-delete.html-b67281fc.js",revision:"ac3e9c44873d8dddacbee5ca54e7643d"},{url:"assets/cascade-saving.html-09c81426.js",revision:"bacd77f0f89c984bb75245e26a793294"},{url:"assets/cascade-saving.html-34bbbd54.js",revision:"610d601d60af68e464f4b6c78b4fc1d9"},{url:"assets/Cascade-Saving.html-551d0584.js",revision:"a8f01444759e60e1894baf066d04ed20"},{url:"assets/Cascade-Saving.html-b8feeef5.js",revision:"fa840d139378c79fc1cd712ace315b73"},{url:"assets/change-log.html-1ac44a48.js",revision:"d9edbd918fb7e30c14e4637a5e02fb44"},{url:"assets/change-log.html-6225f943.js",revision:"3f83f74ba739dae0162ef9fbe32fa16a"},{url:"assets/code-first.html-487be93d.js",revision:"68c70ec8864c02cee62af42babe33ad7"},{url:"assets/code-first.html-ed66c52f.js",revision:"e3d4f83bfb1c680a47782bcd19c40cf0"},{url:"assets/CodeFirst-Mode.html-853d1744.js",revision:"081a2f5260f78391183d468860dab2bb"},{url:"assets/CodeFirst-Mode.html-a66342c2.js",revision:"02bc764c9d48ae31e6c4fb86b19636ac"},{url:"assets/config-entity-from-db-first.html-10b18394.js",revision:"c52e176b59376f0895f453768e743837"},{url:"assets/config-entity-from-db-first.html-66bb64af.js",revision:"35ad647d4b72100d4ba2bf5ee302958b"},{url:"assets/contributing.html-76e8058f.js",revision:"6d37fea9c7a7fb41dc649d2328c23562"},{url:"assets/contributing.html-de91468c.js",revision:"5401a9218271477ea96951a05d2e96d3"},{url:"assets/custom-attribute.html-81b37301.js",revision:"fcbecf917e83b2f8f30c07bc9c8e3445"},{url:"assets/custom-attribute.html-92e10fc8.js",revision:"26a71c3b90b678dd8ab3b88ce21c6302"},{url:"assets/db-context.html-03c0aee8.js",revision:"b2376b311c01b5fb6ce8cd1a421c6da0"},{url:"assets/db-context.html-4fede4eb.js",revision:"e1a4ec8b1f62f0726c93e4ebcb30f160"},{url:"assets/db-first.html-c47e1db4.js",revision:"54a56d75c01d7876bf823d87f62f083a"},{url:"assets/db-first.html-db5e69e3.js",revision:"b1b5820d6ca06174dc422bcbd4ca53ad"},{url:"assets/Delete-Data.html-1cd12a32.js",revision:"47678800fd6a6dfa9aab15f8ca6a489f"},{url:"assets/Delete-Data.html-d4f639b4.js",revision:"fe77116e5a316c00bb25a30424aaff52"},{url:"assets/delete.html-6835bb85.js",revision:"b9b8ef3aceb4eee5c64123afa8b05390"},{url:"assets/delete.html-cbf9c0ea.js",revision:"1a449b296a4203b5271d4d11631902fb"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/donation.html-45f7f5a6.js",revision:"12b32db0e3321f46083ad96def08ea8e"},{url:"assets/donation.html-dfdf8198.js",revision:"f295154d7a84e7c6e28ac02b7e07b028"},{url:"assets/dynamic.html-84857319.js",revision:"e99e3186bf2681edcf3bc2f91d335b65"},{url:"assets/dynamic.html-9393e166.js",revision:"a09612b6500b52f14a06121a9e840c91"},{url:"assets/entity-attribute.html-5bda7b31.js",revision:"4314ccc5806a4547b2fc17cc83ba6f51"},{url:"assets/entity-attribute.html-8336dfaf.js",revision:"250b2e74feac5957889decc990b4f747"},{url:"assets/Entity-Relationship.html-af20e64a.js",revision:"30fece826c1a2f9944c7738419e19ae3"},{url:"assets/Entity-Relationship.html-e4f58063.js",revision:"fa1e500729b467253e981eab6db27a87"},{url:"assets/expression-function.html-18ebd5df.js",revision:"8a88b55d1ab368c5abdf59ed53d0e8dd"},{url:"assets/expression-function.html-fec61aa7.js",revision:"ef11d1850c4cac12aa4c03662eeaea81"},{url:"assets/faq.html-0a628a88.js",revision:"ae2ec23284b06d8db3534b6649aa2a55"},{url:"assets/faq.html-2180d8a4.js",revision:"af1dea004609f54f946ef5837a072f7d"},{url:"assets/filters.html-22ce0589.js",revision:"0b2d40f64cc3036be716057a1ea8d8b7"},{url:"assets/filters.html-4f350b21.js",revision:"dee43840db3572b4c2a8e567a0d354d4"},{url:"assets/fluent-api.html-52149959.js",revision:"15668f910f9a5ac58247123aac0654b1"},{url:"assets/fluent-api.html-f798029f.js",revision:"ae9b531c06ae8a2672f09c89a63180aa"},{url:"assets/freeim.html-0be48049.js",revision:"037b7b943ad02bacf6c62f88ce2967af"},{url:"assets/freeim.html-f670d831.js",revision:"4bf4a434cf6b4c8c42cb610963dba478"},{url:"assets/freeredis.html-1355d9b4.js",revision:"5b44cc453d09c7ef2f0a8f3ea8a1a375"},{url:"assets/freeredis.html-ba4de173.js",revision:"10feee40d3814b4bf6ac3c9433f4f669"},{url:"assets/freescheduler.html-0713df34.js",revision:"9ddbed9bf3431cd1faf60f0987ba1c12"},{url:"assets/freescheduler.html-9817f4e8.js",revision:"2d2a0a18363f7e23664b5d056a5611df"},{url:"assets/freesql-auditlog.html-a6301efb.js",revision:"0a0f5e091664faeed24988f6622dc850"},{url:"assets/freesql-auditlog.html-d4aa0b62.js",revision:"f26851e20dc4740c03a365e9ff19fd4e"},{url:"assets/freesql-cap.html-8ce6cb6a.js",revision:"7011fe5c7dc1c0ae0c6b58d95ba7eaa7"},{url:"assets/freesql-cap.html-f53bf6ab.js",revision:"000c53161367e0a4e6abc236d55076d0"},{url:"assets/freesql-docker.html-7500bda9.js",revision:"84e3ff2fb6a88546489309793c706d9e"},{url:"assets/freesql-docker.html-a243f90f.js",revision:"5ae4b9626caed5b4519651aa2e138782"},{url:"assets/freeSql-extensions-baseentity.html-1540cba8.js",revision:"5ade00cb6b94de75456a9984c077d094"},{url:"assets/freeSql-extensions-baseentity.html-ac7419c3.js",revision:"8de6963a6312b8da2a8578dd006706af"},{url:"assets/freesql-extensions-jsonmap.html-552a4079.js",revision:"c60487a901b076e9109c31a03a5e29a9"},{url:"assets/freesql-extensions-jsonmap.html-e87eb7f2.js",revision:"b1a74a0d193c95a575ea9ff24647a325"},{url:"assets/freesql-provider-custom.html-ac165fbf.js",revision:"946f74c85bf64041176b8370149dd8b4"},{url:"assets/freesql-provider-custom.html-f943d531.js",revision:"5cfdec82f0e26d30593669e4bf059cf5"},{url:"assets/freesql-provider-mysqlconnector.html-27ba01f7.js",revision:"ff82162acfa7d06e6ee947568b2edc6c"},{url:"assets/freesql-provider-mysqlconnector.html-a40c3bf3.js",revision:"e9b088d1283dd5965010d4c48c6cb2e2"},{url:"assets/freesql-provider-odbc.html-495138b9.js",revision:"f010aa1605892a43f38be758774a8e57"},{url:"assets/freesql-provider-odbc.html-84e73519.js",revision:"681d2d93b27d6b1fe20f8d32252aeaf0"},{url:"assets/freesql-provider-oracle.html-883ea1df.js",revision:"b29b286f4e4ae0094ff292b1d8c9b649"},{url:"assets/freesql-provider-oracle.html-a7c1535c.js",revision:"b4f39dae674d1fc6242e94c933f1e99b"},{url:"assets/freesql-provider-postgresql.html-ea872ee9.js",revision:"9fc9ea0c4f2753c00392aa157efcef3a"},{url:"assets/freesql-provider-postgresql.html-fb15241d.js",revision:"e51f27d05500a59bf385be31c9b7768c"},{url:"assets/freesql-provider-questdb.html-28bf2419.js",revision:"bbac7fbb5ba722d0fc443aad038d9ac2"},{url:"assets/freesql-provider-questdb.html-2bd39453.js",revision:"47ab964dec4f856215cd07025c1b5c4b"},{url:"assets/freesql-provider-sqlitecore.html-5055406a.js",revision:"1217d1e917aae2ea6d59fa55b63cf811"},{url:"assets/freesql-provider-sqlitecore.html-7533dd88.js",revision:"0599bc135adb60082283022de49af2c0"},{url:"assets/freesqladminlte.html-6a622158.js",revision:"30fdae2b0c4462cfdc76dc09af0fc633"},{url:"assets/freesqladminlte.html-79ad6087.js",revision:"7fa2077d8810132f10c80769e81ee6c7"},{url:"assets/getting-started.html-2ee7af6c.js",revision:"b8a7fb48c336b285869196d740c29189"},{url:"assets/getting-started.html-8693887d.js",revision:"f757e69d0698a8bf9c9e5c9f39a1c098"},{url:"assets/getting-started.html-a4a8febf.js",revision:"d356c59a1b2e86a74f9e4f598a44b48a"},{url:"assets/getting-started.html-f4792f5d.js",revision:"b91a0e0305060fd096242ab59b9e6b9c"},{url:"assets/Greed-Loading.html-2fbe89b3.js",revision:"2d7a2abe7d154a892f6002a5ca4bc670"},{url:"assets/Greed-Loading.html-f3e53460.js",revision:"dc2d44f6534e5e991cf3fb56463f89c2"},{url:"assets/Group-Aggregation-Query.html-3663cc26.js",revision:"fc4f348675848b47204f51cb9a528826"},{url:"assets/Group-Aggregation-Query.html-d024140b.js",revision:"dd2ea4870c0b7326a8b2cc442463cfb4"},{url:"assets/idlebus-freesql.html-53a2938f.js",revision:"72fc5f85bd092301e95db27e7e47a23c"},{url:"assets/idlebus-freesql.html-53cb61e7.js",revision:"bb30f05012b9f0630d0b24749d807093"},{url:"assets/ifreesql-context.html-489f5105.js",revision:"89c6b7bccb82d2fc0fb7d98fed16d81d"},{url:"assets/ifreesql-context.html-4a484f12.js",revision:"02ad816de8446e4299b22ced88946cd7"},{url:"assets/index-d2e5859f.js",revision:"33bfc9f9df9ffd7833bc6f13e2eccee1"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-04f6cc4e.js",revision:"4116a6019772650d390de93160884f57"},{url:"assets/index.html-1344bd39.js",revision:"a62bb8cee0bc655c3646b9bdeea56812"},{url:"assets/index.html-1a0eb92e.js",revision:"effe558c919cef9911b14845dec5a0be"},{url:"assets/index.html-1e46dfd2.js",revision:"59d5926d5d7b5df77e8c86d0bee2a54e"},{url:"assets/index.html-253f71ad.js",revision:"1fdd6548719adfb35a9539d383301494"},{url:"assets/index.html-6a77f979.js",revision:"332f4c9dc8fbca1f1a53b08a65ebcccf"},{url:"assets/index.html-77bcd847.js",revision:"cfd0f948c55c75b7142e570b2bd996dd"},{url:"assets/index.html-7abc81d6.js",revision:"41c06f77ac9a88640831813576e93d3d"},{url:"assets/index.html-83b4c2ca.js",revision:"82fd8dc667886d0a838d55a0fe511996"},{url:"assets/index.html-8dd14ce0.js",revision:"a69b2e4453a65a8f92329f4fe3099d28"},{url:"assets/index.html-c04ce92e.js",revision:"d84e08ca75305d33daf958f7ee91d2cb"},{url:"assets/index.html-f4855d2b.js",revision:"950e670746802136603ea2718b414c57"},{url:"assets/Insert-Data.html-16b072b2.js",revision:"13baf62771edb95b803bf7e6bd39ff7d"},{url:"assets/Insert-Data.html-57625caf.js",revision:"fc121e71c962d1a670b83fae7dd6682d"},{url:"assets/insert-or-update.html-16b9ad0e.js",revision:"131f337d519499d2a91e6fa85488cb26"},{url:"assets/insert-or-update.html-a5a8b30c.js",revision:"dfc9185c672463584dc3a9dff13cb272"},{url:"assets/insert-or-update.html-c05440ae.js",revision:"1c82b9a7d433a266374f1c6ec0552bd6"},{url:"assets/insert-or-update.html-c1c1b061.js",revision:"f431041fbe801312788d2c87e72fcc0d"},{url:"assets/insert.html-0767b502.js",revision:"bda500d0d6904211787af8fe184c630a"},{url:"assets/insert.html-f52b160d.js",revision:"a0688c22efcde5b2c985c2f279bb1537"},{url:"assets/install.html-2facf1b5.js",revision:"91e15775efdd1c0e45717df5be862d0f"},{url:"assets/install.html-a3910478.js",revision:"c56bd985f5bd4cdf0d7cab135cbcf242"},{url:"assets/install.html-ab92faae.js",revision:"72ca1c96a0b5123eed73eebeca9f0355"},{url:"assets/install.html-e9a430b1.js",revision:"8163e8cb4d29a44940fbba7631b02566"},{url:"assets/iselect-depcopy.html-149830aa.js",revision:"e00576533e7659026fd1917daf6d88c1"},{url:"assets/iselect-depcopy.html-8b822fd1.js",revision:"d54e1b1199c7e440ff4611fcf5e7d0e6"},{url:"assets/issues-expression-groupbysum.html-1d0ac83d.js",revision:"d9d561cd31aaf26ed726dc9e4f391044"},{url:"assets/issues-expression-groupbysum.html-81d6a8de.js",revision:"f92dde041990b3948adac869869f7a79"},{url:"assets/issues-in-valuetype.html-aa97dd3d.js",revision:"2ab66624f999e405db7ceb42b460974b"},{url:"assets/issues-in-valuetype.html-e0d57c1b.js",revision:"22a9ef332ca8f7230e32ba3a5b79f70b"},{url:"assets/issues-mysql5_5.html-5df53293.js",revision:"6cdccd45b6d7edf7ef18c6a64c3a22a5"},{url:"assets/issues-mysql5_5.html-c4a6aa43.js",revision:"558d88284a2e5c1783bb8ce81c8bf09c"},{url:"assets/Lazy-Loading.html-119938be.js",revision:"ae6adf833138f40c82c9bd12464d3675"},{url:"assets/Lazy-Loading.html-3acf9766.js",revision:"2dc15e21aa2d10979b43ee1c1de3a8d8"},{url:"assets/Linq-to-Sql.html-134bf2bc.js",revision:"ad383815f1945a8e76734efe33abb7d7"},{url:"assets/Linq-to-Sql.html-94c8517c.js",revision:"eb168e5f67a899481bee0ff75b34489e"},{url:"assets/linq-to-sql.html-9f075b8f.js",revision:"6f3c01a52b683e70c2fba7c1538d2e59"},{url:"assets/linq-to-sql.html-e15cc4ea.js",revision:"ab91779de223982a361e08e5c37939a0"},{url:"assets/more.html-2257b9da.js",revision:"d2c1cadbaf52237ae284033d953bf96c"},{url:"assets/more.html-524b4770.js",revision:"1d37c36e59e1ed6ce835fc48205364aa"},{url:"assets/multi-tenancy.html-c135a01a.js",revision:"d6586fb772659c8aac5e6565841c057a"},{url:"assets/multi-tenancy.html-d0b5b4aa.js",revision:"a5cec0ceff012873b74b69d291ec7300"},{url:"assets/navigate-attribute.html-0026618c.js",revision:"72e938c6200b94ab5f3fd60a8312472b"},{url:"assets/navigate-attribute.html-e121b492.js",revision:"f69151a1eaa57fb53548476c2272c423"},{url:"assets/otherworks.html-e2d0feb5.js",revision:"31d17addc2337592b432cc5f52202c92"},{url:"assets/otherworks.html-f2685b42.js",revision:"d0567a9e8a94fedb54a809b1fa4c76fd"},{url:"assets/Pagination.html-2a6614a0.js",revision:"7a6a84165cba0949d2f3749c6ed6af57"},{url:"assets/Pagination.html-abd95b4f.js",revision:"73c258125af4dad33c89cad8972a5403"},{url:"assets/paging.html-11b569dc.js",revision:"bb3cb56d42888afc917ade57b6e08427"},{url:"assets/paging.html-45b8613e.js",revision:"2262eaa7a8f414bdfbd1e4a97b86babe"},{url:"assets/Parent-Child-Relationship-Query.html-58bba0a5.js",revision:"8f34bccad7b4beae06b252cbd58ea7f8"},{url:"assets/Parent-Child-Relationship-Query.html-9cbf4cc1.js",revision:"06f7f5d33b20684dec9a353f3f18ca7a"},{url:"assets/performance.html-a4ad55e2.js",revision:"7977f28258f4f4f4bfcd0b031b00db24"},{url:"assets/performance.html-eb037d2a.js",revision:"a37f588356ec01bda873a4bef6f5fce8"},{url:"assets/photoswipe.esm-2450701e.js",revision:"55b8097e827163367e1bb02833c0acec"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/Query-Data.html-bbcfbaa2.js",revision:"b890a2b576ece64947b816d7b9094462"},{url:"assets/Query-Data.html-c1699d8c.js",revision:"7d1d4b5b3fc97087bd432429095f09e1"},{url:"assets/Query-from-Multi-Table.html-1c70e585.js",revision:"5edc812c17b10e2a3123fe8ba06268e3"},{url:"assets/Query-from-Multi-Table.html-fe438cc2.js",revision:"da15d66cf42117b4aef0cbec96d4cd53"},{url:"assets/Query-from-Single-Table.html-16af42ce.js",revision:"f345a7337fe67a8bb6886eccb6b238f6"},{url:"assets/Query-from-Single-Table.html-e399d391.js",revision:"2683de66b6b8d6e0c7cf0efbcac96ec2"},{url:"assets/read-write-splitting.html-4cbfe958.js",revision:"f3cc9307b088ecc91a4789aff9804388"},{url:"assets/read-write-splitting.html-8af05a31.js",revision:"9cfc8079bc9fb6d2c6c04626a9a79130"},{url:"assets/Repository-Layer.html-aae5a1a1.js",revision:"57d996a7ea2fd8a8a84bb94bd94a6c44"},{url:"assets/Repository-Layer.html-ba589b41.js",revision:"c38557d7840d6240777723ec6504caf2"},{url:"assets/repository.html-1cbf6f66.js",revision:"d37eb1bfcd416707a0d1cad228ba0bdd"},{url:"assets/repository.html-2378ff8c.js",revision:"7969e9a49ecfcaf153d62f5dc4551808"},{url:"assets/Return-Data.html-4a7e42f0.js",revision:"19cfc52072e02735c50efe9417a52fcf"},{url:"assets/Return-Data.html-c7f76d6a.js",revision:"a239806f2f3ca360a1eaf94a2826b300"},{url:"assets/select-as-tree.html-68f71d09.js",revision:"36936354a7c6cec765b30663cdcc6e8c"},{url:"assets/select-as-tree.html-aa1b1964.js",revision:"d60b98cd7133b3eae350b25c1d8cfa72"},{url:"assets/select-group-by.html-412dbf18.js",revision:"de1b067245481864b9be98399b607169"},{url:"assets/select-group-by.html-4146c5c1.js",revision:"8820b6e69026832b9be11f6741c76df0"},{url:"assets/select-include.html-0382fe6b.js",revision:"80ef1cdf17f97a9bd270441bbe803355"},{url:"assets/select-include.html-1822017c.js",revision:"edc1b0c3f6fe393a5dbb9b5acde78766"},{url:"assets/select-lazy-loading.html-4ff7d0ff.js",revision:"dbd5512343ec63319c8f660f9f1067f3"},{url:"assets/select-lazy-loading.html-dcb7bd8f.js",revision:"d0190c6aa3f5b190f92d773d095cce61"},{url:"assets/select-multi-table.html-9636543d.js",revision:"81f6fbf088e1dc5142a8e5511f006534"},{url:"assets/select-multi-table.html-d66408d2.js",revision:"975b24ff18b65cd1c8e7d243ff2180bd"},{url:"assets/select-return-data.html-49e54726.js",revision:"18470a574d7e5ddc430ef4912c85e99d"},{url:"assets/select-return-data.html-96380762.js",revision:"99d87884b9b830cc63b7cf6d3b6bdd62"},{url:"assets/select-single-table.html-3b8f534d.js",revision:"d47143af0d054b184e8db1f952f067c7"},{url:"assets/select-single-table.html-7d195265.js",revision:"30c0034a6d86edd148b01d129a63726e"},{url:"assets/select.html-6ce0d86d.js",revision:"320b0c0814fe15d3b14e991dda5c7710"},{url:"assets/select.html-9a004c24.js",revision:"eab9f8218f064f7cd916c44707fe3774"},{url:"assets/service-support.html-395c213a.js",revision:"2a3f65304faa8423772213a2bb79d28f"},{url:"assets/service-support.html-80baacdd.js",revision:"9d00c9dc4a6b6a3c1cb9aaa646f9fd09"},{url:"assets/sharding.html-80794338.js",revision:"94853329b5893a24d7d6550783fd0076"},{url:"assets/sharding.html-df31a987.js",revision:"bb6729810fd27d6632cce5dde599c997"},{url:"assets/style-327aa9a6.css",revision:"ec2c0462b19f292afc0808346f9cddad"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/transaction.html-05361d5d.js",revision:"f9b4d868a22dafeb16b5b45793c5290e"},{url:"assets/transaction.html-4681abc6.js",revision:"03d06884156f7892074c37376812d396"},{url:"assets/type-mapping.html-d98c3950.js",revision:"11ceafab54dacbb3cb2ca8f9e6cecec6"},{url:"assets/type-mapping.html-e7c6c325.js",revision:"435b1200c1949472db307b123a5bdf97"},{url:"assets/unionall.html-4d582416.js",revision:"c4ae91f48563716630c77403d172c766"},{url:"assets/unionall.html-b3b1cd63.js",revision:"f0afb60875fc89b79160479ad56644b0"},{url:"assets/Unit-of-Work-Manager.html-7e6e5a70.js",revision:"f6fd3abc4736b33fa57012c5c2fa1231"},{url:"assets/Unit-of-Work-Manager.html-954d5f4f.js",revision:"f54242498cf56ab652e48fc6196868c9"},{url:"assets/unit-of-work.html-5157beda.js",revision:"741fa4be188b3cb91a27aaadd0e18e6e"},{url:"assets/unit-of-work.html-79ae925b.js",revision:"baebccd9a6c1ed261944b9c55f3a4632"},{url:"assets/Unit-of-Work.html-a0a1a9c4.js",revision:"5f0c1a02b8c0c9882a871dbdfbbc669c"},{url:"assets/Unit-of-Work.html-ea9eae67.js",revision:"67c0faa18a7997a2b06414cbb6dd37c7"},{url:"assets/unitofwork-manager.html-74e04040.js",revision:"8b292c7f2bac2d9eecc1930c8b1e8af0"},{url:"assets/unitofwork-manager.html-7f496bac.js",revision:"b5c12ffab84624ad549f25897702155a"},{url:"assets/Update-Data.html-0552025a.js",revision:"a72bad0a77fe2cecf0deeaf51872f65e"},{url:"assets/Update-Data.html-17b46e6d.js",revision:"f8ade1aaa0d5bde02c9663325f790588"},{url:"assets/update.html-11c6c719.js",revision:"e6ddf77dfa0f969fa234ea302c84d7e5"},{url:"assets/update.html-29bc3bc5.js",revision:"42e1c95576c4cf91176fd2252508bbdc"},{url:"assets/vs-dapper.html-9093c505.js",revision:"05a0ff1bfdee9083932da559fddcf828"},{url:"assets/vs-dapper.html-a0f057a2.js",revision:"261340885a1b434226b6a11d21f32f3b"},{url:"assets/vs-entity-framework.html-3db38af4.js",revision:"5ec0f450935cec4cde71c0cf0067520a"},{url:"assets/vs-entity-framework.html-89ec9b17.js",revision:"d5bb5ab037d7b6f5dea5acdfeb89c1a4"},{url:"assets/With-Sql.html-4d4fbf56.js",revision:"90c462b5e639a07cb3d8f454ce044219"},{url:"assets/With-Sql.html-f77d96e5.js",revision:"467e4bd8420c3512a68ef9c5c5c0f69a"},{url:"assets/withsql.html-0af6fdbe.js",revision:"69e0377731949fe456269cd890c8dc73"},{url:"assets/withsql.html-691111f7.js",revision:"cdd6d1cade4380e4f3a4eefc6db35cb0"},{url:"assets/withtempquery.html-83ee185c.js",revision:"7f9cbdabc5ad6be4d82dedfa35f8adba"},{url:"assets/withtempquery.html-d441bdce.js",revision:"bd9cf25a37e0eb40b9f3522853b3d3c9"},{url:"js/base.js",revision:"e0eaa312c6884ef5f8a21a0ecf300b49"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"index.html",revision:"10a13d5d5b15b2577716e19267d981cb"},{url:"404.html",revision:"842dcf2a41e1ccbeabe26838b1ae25c2"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
