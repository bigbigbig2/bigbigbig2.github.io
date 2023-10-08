import{_ as n,c as s}from"./app.3f041a55.js";const a={},p=s(`<h2 id="_1-\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> 1\uFF0C\u7C7B\u578B\u4FDD\u62A4</h2><p>\u6211\u4EEC\u901A\u5E38\u5728 JavaScript \u4E2D\u901A\u8FC7\u5224\u65AD\u6765\u5904\u7406\u2F00\u4E9B\u903B\u8F91\uFF0C\u5728 TypeScript \u4E2D\u8FD9\u79CD\u6761\u4EF6\u8BED\u53E5\u5757\u8FD8\u6709\u53E6\u5916\u2F00 \u4E2A\u7279\u6027\uFF1A\u6839\u636E\u5224\u65AD\u903B\u8F91\u7684\u7ED3\u679C\uFF0C\u7F29\u2F29\u7C7B\u578B\u8303\u56F4\uFF08\u6709\u70B9\u7C7B\u4F3C\u65AD\u2F94\uFF09\uFF0C\u8FD9\u79CD\u7279\u6027\u79F0\u4E3A\u7C7B\u578B\u4FDD\u62A4 \uFF0C\u89E6\u53D1\u6761\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>\u903B\u8F91\u6761\u4EF6\u8BED\u53E5\u5757\uFF1A<span class="token keyword">if</span>\u3001<span class="token keyword">else</span>\u3001elseif
\u7279\u5B9A\u7684\u4E00\u4E9B\u5173\u952E\u5B57\uFF1A<span class="token keyword">typeof</span>\u3001<span class="token keyword">instanceof</span>\u3001<span class="token keyword">in</span><span class="token operator">...</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">|</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u8FD9\u65F6\u7F16\u8BD1\u5668\u5C06\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3Aa\u53D8\u91CF\u53EF\u80FD\u662F\u5B57\u7B26\u4E32\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u662F\u6570\u5B57\uFF0Cts\u544A</span>
    <span class="token comment">//\u8BC9\u6211\u4EEC\uFF0C\u4F60\u4E0D\u80FD\u76F4\u63A5\u4F5C\u4E3A\u5B57\u7B26\u4E32\u53BB\u4F7F\u7528\uFF0C\u6709\u98CE\u9669</span>
    <span class="token comment">//a.substring(1,2)//\u4F7F\u7528\u4E86\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5</span>
    <span class="token comment">//\u89E3\u51B3\u7684\u65B9\u5F0F1\uFF1A\u7C7B\u578B\u65AD\u8A00</span>
    <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u89E3\u51B3\u65B9\u6CD52\uFF1A\u7C7B\u578B\u4FDD\u62A4</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">//number\u7C7B\u578B\u7684\u65B9\u6CD5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3><p>\u6211\u4EEC\u77E5\u9053 typeof \u53EF\u4EE5\u8FD4\u56DE\u67D0\u4E2A\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u5728 TypeScript \u5728 if \u3001 else \u4EE3\u7801\u5757\u4E2D\u80FD\u591F\u628A typeof \u8BC6\u522B\u4E3A\u7C7B\u578B\u4FDD\u62A4\uFF0C\u63A8\u65AD\u51FA\u9002\u5408\u7684\u7C7B\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> string<span class="token operator">|</span>number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">// error\uFF0C\u4E0D\u80FD\u4FDD\u8BC1 a \u5C31\u662F\u5B57\u7B26\u4E32</span>
 	a<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 	<span class="token comment">// ok</span>
 		a<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
 	<span class="token comment">// ok</span>
 		a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3><p>\u4E0E typeof \u7C7B\u4F3C\u7684(\u5199\u6CD5\u4E0D\u540C\u7F62\u4E86)\uFF0C instanceof \u4E5F\u53EF\u4EE5\u88AB TypeScript \u8BC6\u522B\u4E3A\u7C7B\u578B\u4FDD\u62A4</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Date<span class="token operator">|</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token keyword">instanceof</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        a<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IA</span></span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IB</span></span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">IA</span> <span class="token operator">|</span> <span class="token constant">IB</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span> <span class="token keyword">in</span> arg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//ok</span>
        arg<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
        <span class="token comment">//error</span>
        arg<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//ok</span>
        arg<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
        <span class="token comment">//error</span>
        arg<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="\u5B57\u9762\u91CF\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> \u5B57\u9762\u91CF\u7C7B\u578B\u4FDD\u62A4</h3><p>\u5982\u679C\u7C7B\u578B\u4E3A\u5B57\u9762\u91CF\u7C7B\u578B\uFF0C\u90A3\u4E48\u8FD8\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5B57\u9762\u91CF\u7C7B\u578B\u7684\u5B57\u9762\u503C\u8FDB\u884C\u63A8\u65AD</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IA</span></span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;IA&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u5B57\u9762\u91CF\u7C7B\u578B\uFF09</span>
    x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    y<span class="token punctuation">;</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">IB</span></span> <span class="token punctuation">{</span>
    typ<span class="token operator">:</span> <span class="token string">&#39;IB&#39;</span><span class="token punctuation">;</span>
    a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">IA</span> <span class="token operator">|</span> <span class="token constant">IB</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5C5E\u4E8EIA\u7C7B\u578B</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arg<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;IA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//OK</span>
        arg<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
        <span class="token comment">//error</span>
        arg<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
     <span class="token comment">//\u5C5E\u4E8EIB\u7C7B\u578B</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//ok</span>
        arg<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
        <span class="token comment">//error</span>
        arg<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u81EA\u5B9A\u4E49\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7C7B\u578B\u4FDD\u62A4</h3><p>\u6709\u7684\u65F6\u5019\uFF0C\u4EE5\u4E0A\u7684\u4E00\u4E9B\u65B9\u5F0F\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\uFF0C\u5219\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7C7B\u578B\u4FDD\u62A4\u89C4\u5219</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u5B9E\u4F8B</span>
<span class="token comment">//Element[] \u6570\u7EC4\u5143\u7D20\uFF0CNodeList\u7C7B\u6570\u7EC4\uFF0CElement\u5355\u4E2A\u5143\u7D20</span>
<span class="token comment">//\u901A\u8FC7\u4E00\u4E2A\u8F85\u52A9\u51FD\u6570\u6765\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">canEach</span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span>data <span class="token keyword">is</span> Element<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> NodeList<span class="token punctuation">{</span>
    <span class="token keyword">return</span> data<span class="token punctuation">.</span>forEach \uFF01<span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//\u53EF\u4EE5\u4F7F\u7528canEach\u7684\u8BDD\u5C31\u4E3Atrue</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span>elements<span class="token operator">:</span>Element<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> NodeList <span class="token operator">|</span> Element <span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u6570\u7EC4\u7C7B\u578B\u65F6</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">canEach</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>el<span class="token operator">:</span>Element<span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        elements<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>data is Element[]|NodeList</code> \u662F\u4E00\u79CD\u7C7B\u578B\u8C13\u8BCD\uFF0C\u683C\u5F0F\u4E3A\uFF1Axx is XX \uFF0C\u8FD4\u56DE\u8FD9\u79CD\u7C7B\u578B\u7684\u51FD\u6570\u5C31\u53EF\u4EE5\u88AB TypeScript \u8BC6\u522B\u4E3A\u7C7B\u578B\u4FDD\u62A4</p><h2 id="_2-\u7C7B\u578B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u7C7B\u578B\u64CD\u4F5C" aria-hidden="true">#</a> 2\uFF0C\u7C7B\u578B\u64CD\u4F5C</h2><p>TypeScript \u63D0\u4F9B\u4E86\u2F00\u4E9B\u2F45\u5F0F\u6765\u64CD\u4F5C\u7C7B\u578B\u8FD9\u79CD\u6570\u636E\uFF0C\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7C7B\u578B\u6570\u636E\u53EA\u80FD\u4F5C\u4E3A\u7C7B\u578B\u6765\u4F7F \u2F64\uFF0C\u2F7D\u4E0D\u80FD\u4F5C\u4E3A\u7A0B\u5E8F\u4E2D\u7684\u6570\u636E\uFF0C\u8FD9\u662F\u4E24\u79CD\u4E0D\u540C\u7684\u6570\u636E\uFF0C\u2F00\u4E2A\u2F64\u5728\u7F16\u8BD1\u68C0\u6D4B\u9636\u6BB5\uFF0C\u2F00\u4E2A\u2F64\u4E8E\u7A0B\u5E8F\u6267\u2F8F\u9636\u6BB5</p><h3 id="typeof-1" tabindex="-1"><a class="header-anchor" href="#typeof-1" aria-hidden="true">#</a> typeof</h3><p>\u5728 TypeScript \u4E2D\uFF0C typeof \u6709\u4E24\u79CD\u4F5C\u2F64</p><ul><li>\u83B7\u53D6\u6570\u636E\u7684\u7C7B\u578B</li><li>\u6355\u83B7\u6570\u636E\u7684\u7C7B\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token string">&#39;kaikeba&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//let\u58F0\u660E\u7684\u662F\u53D8\u91CF\uFF0C\u91CC\u9762\u5B58\u50A8\u7684\u6570\u636E\u662F\u7A0B\u5E8F\u8FD0\u884C\u4E2D\u4F7F\u7528\u7684</span>
<span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">typeof</span> str1<span class="token punctuation">;</span>
<span class="token comment">//type \u58F0\u660E\u7684\u662F\u7C7B\u578B\u540D\u79F0\uFF0C\u8FD9\u4E2A\u503C\u53EA\u662F\u5728ts\u7F16\u8BD1\u76D1\u6D4B\u9636\u6BB5\u4F7F\u7528</span>
<span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> str1<span class="token punctuation">;</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> t<span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token operator">:</span>myType <span class="token operator">=</span> <span class="token string">&#39;....&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="keyof" tabindex="-1"><a class="header-anchor" href="#keyof" aria-hidden="true">#</a> keyof</h3><p>\u83B7\u53D6\u7C7B\u578B\u7684\u6240\u6709\u503C\u7684 key \u7684\u96C6\u5408</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//\u5B9E\u4F8B</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7B49\u540C\uFF1Atype personKeys = &quot;name&quot; | &quot;age&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">personkey</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Person<span class="token punctuation">;</span><span class="token comment">//\u8FD9\u65F6personkey\u5B58\u50A8\u7684\u4E3A\u7C7B\u578BPerson\u7684key\uFF1A&quot;name&quot;,&quot;age&quot;</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;zMouse&#39;</span><span class="token punctuation">,</span>
    age<span class="token operator">:</span><span class="token number">35</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getPersonVal</span><span class="token punctuation">(</span>k<span class="token operator">:</span> personKeys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> p1<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
\u7B49\u540C\uFF1A
function getPersonVal(k: &#39;name&#39;|&#39;age&#39;) {
	return p1[k];
}
*/</span>
<span class="token function">getPersonVal</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u6B63\u786E</span>
<span class="token function">getPersonVal</span><span class="token punctuation">(</span><span class="token string">&#39;gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u9519\u8BEF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="in-1" tabindex="-1"><a class="header-anchor" href="#in-1" aria-hidden="true">#</a> in</h3><p>\u9488\u5BF9\u7C7B\u578B\u8FDB\u884C\u64CD\u4F5C\u7684\u8BDD\uFF0C\u5185\u90E8\u4F7F\u7528\u7684 <code>for...in</code> \u5BF9\u7C7B\u578B\u8FDB\u884C\u904D\u5386</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u53D6\u51FAPerson\u91CC\u7684key</span>
<span class="token keyword">type</span> <span class="token class-name">personKeys</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Person<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">newPerson</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B\uFF0C\u53D6\u5230Person\u7684\u952E\u4E3A\u76F8\u540C\u7684\u952E\uFF0C\u5C06\u5B83\u4EEC\u90FD\u5B9A\u4E49\u4E3Anumber\u7C7B\u578B</span>
    <span class="token punctuation">[</span>k <span class="token keyword">in</span> personKeys<span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token comment">/*\u7B49\u540C\u4E8E
    [key in &#39;name&#39; | &#39;age&#39;]: number;
    \u4E5F\u53EF\u4EE5\u5199\u6210
    [key in keyof Person]: number;
    */</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
type newPerson = {
	name:number;
	age:number;
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u6CE8\u610F\uFF1Ain \u540E\u9762\u7684\u7C7B\u578B\u503C\u5FC5\u987B\u662F string \u6216\u8005 number \u6216\u8005 symbol</p><h2 id="_3-\u7C7B\u578B\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#_3-\u7C7B\u578B\u517C\u5BB9" aria-hidden="true">#</a> 3\uFF0C\u7C7B\u578B\u517C\u5BB9</h2><p>TypeScript \u7684\u7C7B\u578B\u7CFB\u7EDF\u662F\u57FA\u4E8E\u7ED3\u6784\u2F26\u7C7B\u578B\u7684\uFF0C\u5B83\u4E0E\u540D\u4E49\u7C7B\u578B\uFF08\u5982\uFF1Ajava\uFF09\u4E0D\u540C\uFF08\u540D\u4E49\u7C7B\u578B\u7684\u6570\u636E\u7C7B\u578B \u517C\u5BB9\u6027\u6216\u7B49\u4EF7\u6027\u662F\u901A\u8FC7\u660E\u786E\u7684\u58F0\u660E\u6216\u7C7B\u578B\u7684\u540D\u79F0\u6765\u51B3\u5B9A\u7684\uFF09\u3002\u8FD9\u79CD\u57FA\u4E8E\u7ED3\u6784\u2F26\u7C7B\u578B\u7684\u7C7B\u578B\u7CFB\u7EDF\u662F\u57FA\u4E8E\u7EC4 \u6210\u7ED3\u6784\u7684\uFF0C\u53EA\u8981\u5177\u6709\u76F8\u540C\u7C7B\u578B\u7684\u6210\u5458\uFF0C\u5219\u4E24\u79CD\u7C7B\u578B\u5373\u4E3A\u517C\u5BB9\u7684\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>p1<span class="token operator">:</span> Person<span class="token punctuation">)</span><span class="token punctuation">{</span>
    p<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> xiaohua <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ok\uFF0C\u56E0\u4E3A Cat \u7C7B\u578B\u7684\u7ED3\u6784\u4E0E Person \u7C7B\u578B\u7684\u7ED3\u6784\u76F8\u4F3C\uFF0C\u6240\u4EE5\u5B83\u4EEC\u662F\u517C\u5BB9\u7684</span>
<span class="token function">fn</span><span class="token punctuation">(</span>xiaohua<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,35);function e(t,o){return p}var l=n(a,[["render",e],["__file","index.html.vue"]]);export{l as default};
