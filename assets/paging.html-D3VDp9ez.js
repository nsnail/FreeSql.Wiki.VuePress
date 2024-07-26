import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-BC0_DOXp.js";const e={},p=t(`<h1 id="paging" tabindex="-1"><a class="header-anchor" href="#paging" aria-hidden="true">#</a> Paging</h1><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name">IFreeSql</span> fsql<span class="token punctuation">;</span> <span class="token comment">// For how to create, please refer to the introductory documentation</span>

<span class="token keyword">class</span> <span class="token class-name">Topic</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Column</span><span class="token attribute-arguments"><span class="token punctuation">(</span>IsIdentity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span></span><span class="token punctuation">]</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Id <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Title <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> Clicks <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DateTime</span> CreateTime <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> CategoryId <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-items-per-page" tabindex="-1"><a class="header-anchor" href="#_20-items-per-page" aria-hidden="true">#</a> 20 items per page</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Count</span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> total<span class="token punctuation">)</span> <span class="token comment">// Total record count</span>
    <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Count(out var total) is a synchronous method because <code>out</code> does not support asynchronous operations. If this is a concern, you can perform the following separately:</p></blockquote><p>Tip: For large datasets, it&#39;s generally not recommended to use <code>Count</code>/<code>CountAsync</code>; instead, use stream paging (previous page, next page, without returning total count).</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">select</span> <span class="token operator">=</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> total <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">select</span><span class="token punctuation">.</span><span class="token function">CountAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">select</span><span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToListAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>BasePagingInfo</code> contains <code>PageNumber</code>, <code>PageSize</code>, <code>Count</code>. With <code>.Page(page)</code>, <code>page.Count</code> will have the count value.</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TopicGetListInput</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">BasePagingInfo</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> Name <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name"><span class="token keyword">var</span></span> list <span class="token operator">=</span> <span class="token keyword">await</span> fsql<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Select</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Topic<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WhereIf</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">IsNullOrEmpty</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">,</span> r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span>Name<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">OrderByDescending</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> c<span class="token punctuation">.</span>CreateTime<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Page</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ToListAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimization" tabindex="-1"><a class="header-anchor" href="#optimization" aria-hidden="true">#</a> Optimization</h2><p>For versions of SqlServer before 2012, row_number paging is used;</p><p>For SqlServer 2012+ versions, the latest fetch next rows paging is used;</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><table><thead><tr><th>Method</th><th>Return Type</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>ToSql</td><td>string</td><td></td><td>Returns the SQL statement that will be executed</td></tr><tr><td>ToList</td><td>List&lt;T1&gt;</td><td></td><td>Executes SQL query and returns all fields of T1 entity records. If there are navigation properties, they are also returned. If no records exist, returns a list with Count 0.</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>Lambda</td><td>Executes SQL query and returns specified fields of records. If no records exist, returns a list with Count 0.</td></tr><tr><td>ToList&lt;T&gt;</td><td>List&lt;T&gt;</td><td>string field</td><td>Executes SQL query and returns records for the specified field, and receives as tuples or basic types (int, string, long). If no records exist, returns a list with Count 0.</td></tr><tr><td>【Paging】</td><td></td><td></td><td></td></tr><tr><td>Count</td><td>long</td><td></td><td>Number of records in the query</td></tr><tr><td>Count</td><td>&lt;this&gt;</td><td>out long</td><td>Number of records in the query, returned as an out parameter</td></tr><tr><td>Skip</td><td>&lt;this&gt;</td><td>int offset</td><td>Query with an offset of rows</td></tr><tr><td>Offset</td><td>&lt;this&gt;</td><td>int offset</td><td>Query with an offset of rows</td></tr><tr><td>Limit</td><td>&lt;this&gt;</td><td>int limit</td><td>Query how many records</td></tr><tr><td>Take</td><td>&lt;this&gt;</td><td>int limit</td><td>Query how many records</td></tr><tr><td>Page</td><td>&lt;this&gt;</td><td>int pageIndex, int pageSize</td><td>Paging</td></tr><tr><td>Page</td><td>&lt;this&gt;</td><td>BasePagingInfo(int PageNumber, int PageSize, long Count)</td><td>Paging and calculate Count</td></tr></tbody></table>`,14),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","paging.html.vue"]]);export{d as default};
