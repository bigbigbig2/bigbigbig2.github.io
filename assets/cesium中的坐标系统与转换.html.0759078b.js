import{_ as p,r as c,o as i,a as o,b as a,d as s,w as e,F as l,e as t,c as r}from"./app.3f041a55.js";const u={},d={class:"table-of-contents"},k=t("1.cesium\u5750\u6807\u4ECB\u7ECD"),m=t("[1]\u5C4F\u5E55\u5750\u6807\u7CFB\u7EDF"),h=t("[2]\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7EDF"),b=t("[3]\u5730\u7406\u5750\u6807"),_=t("2.cesium\u5750\u6807\u8F6C\u6362"),f=t("[1]\u89D2\u5EA6\u4E0E\u5F27\u5EA6\u7684\u8F6C\u6362"),g=t("[2]\u5730\u7406\u5750\u6807\u8F6CCartesian3"),v=t("(1)\u76F4\u63A5\u7ECF\u8FC7\u7ECF\u7EAC\u5EA6\u8F6C\u6362"),C=t("\u89D2\u5EA6\u5236\u7684\u5730\u7406\u5750\u6807\u8F6CCartesian3"),j=t("\u5F27\u5EA6\u5236\u4E0E\u7B1B\u5361\u5C14\u8F6C\u6362"),x=t("(2)\u4F7F\u7528\u692D\u7403\u4F53\u8F6C\u6362"),y=t("[3]Cartesian3\u8F6C\u5730\u7406\u5750\u6807"),w=t("(1)\u76F4\u63A5\u8F6C\u6362"),S=t("(2)\u901A\u8FC7\u692D\u7403\u4F53\u8F6C\u6362"),W=t("[4]Cartesian2\u4E0ECartesian3\u4E92\u8F6C"),G=t("(1)Cartesian2\u8F6CCartesian3"),z=t("(2)Cartesian3\u8F6CCartesian2"),T=r(`<h3 id="_1-cesium\u5750\u6807\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-cesium\u5750\u6807\u4ECB\u7ECD" aria-hidden="true">#</a> 1.cesium\u5750\u6807\u4ECB\u7ECD</h3><p>cesium\u5F00\u53D1\u4E2D\u5E38\u7528\u7684\u5750\u6807\u7CFB\u7EDF</p><ul><li>\u5C4F\u5E55\u5750\u6807\u7CFB\u7EDF(\u4E8C\u7EF4)</li><li>\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7EDF(WGS84\uFF09</li><li>\u5730\u7406\u5750\u6807\u7CFB\u7EDF(\u7ECF\u7EAC\u5EA6\u5750\u6807)</li></ul><p>Cesium\u76EE\u524D\u652F\u6301\u4E24\u79CD\u5750\u6807\u7CFBWGS84\u5730\u7406WKID=4326\u548CWebMercator\uFF1AWKID=3857\uFF0C\u4F46\u662F\u5728Cesium\u4E2D\u6CA1\u6709\u5B9E\u9645\u7684\u5BF9\u8C61\u6765\u63CF\u8FF0WGS84\u5750\u6807\uFF0C\u90FD\u662F\u4EE5\u5F27\u5EA6\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u8FD0\u7528\u7684\u4E5F\u5C31\u662FCartographic\u7C7B\uFF1A</p><h4 id="_1-\u5C4F\u5E55\u5750\u6807\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#_1-\u5C4F\u5E55\u5750\u6807\u7CFB\u7EDF" aria-hidden="true">#</a> [1]\u5C4F\u5E55\u5750\u6807\u7CFB\u7EDF</h4><p>\u4E5F\u5C31\u662F\u4E8C\u7EF4\u7B1B\u5361\u5C14\u5750\u6807\u7CFBcesium\u4E2D\u4F7F\u7528Cartesian2\u6765\u63CF\u8FF0\u5C4F\u5E55\u5750\u6807\u7CFB\u7EDF</p><p>\u6784\u9020\u51FD\u6570\u4E3A<code>new Cesium.Cartesian2(x, y)</code>,\u5C4F\u5E55\u5DE6\u4E0A\u89D2\u4E3A\u539F\u70B9,x\u53F3\u4E3A\u6B63,y\u4E0B\u4E3A\u6B63</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cdf48f29be4741319df57e54d1c561c1~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><p>\u800Copenlayers\u4E2D</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9370e9d0f35e45a484d6c0c2f835e135~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h4 id="_2-\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#_2-\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7EDF" aria-hidden="true">#</a> [2]\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7EDF</h4><p>\u5728GIS\u5F15\u64CE\u4E2D\u4E5F\u79F0\u8FD9\u79CD\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u4E3A\uFF08World Geodetic System 1984 (WGS84) \u5750\u6807\u7CFB\uFF09</p><ul><li>\u539F\u70B9\u4E3A\u53C2\u8003\u692D\u7403\u7684\u4E2D\u5FC3</li><li>\u8FD9\u4E2A\u5750\u6807\u7CFB\u56FA\u5B9A\u5728\u5730\u7403\u4E0A\uFF1B\u5F53\u5730\u7403\u81EA\u8F6C\u65F6\uFF0C\u7CFB\u7EDF\u4E5F\u4F1A\u81EA\u8F6C\uFF0CWGS84 \u4E2D\u5B9A\u4E49\u7684\u7269\u4F53\u76F8\u5BF9\u4E8E\u5730\u7403\u4FDD\u6301\u56FA\u5B9A</li><li>x \u8F74\u6307\u5411\u5730\u7406\u5750\u6807 (0\xB0, 0\xB0)\uFF0Cy \u8F74\u6307\u5411 (90\xB0, 0\xB0)\uFF0Cz \u8F74\u6307\u5411\u5317\u6781\u3002\u8D64\u9053\u4F4D\u4E8E xy \u5E73\u9762\u5185\u3002\u8FD9\u662F\u4E00\u4E2A\u53F3\u624B\u5750\u6807\u7CFB\uFF0C\u56E0\u6B64 x \xD7 y = z\uFF0C\u5176\u4E2D x\u3001y \u548C z \u662F\u6CBF\u5404\u81EA\u8F74\u7684\u5355\u4F4D\u5411\u91CF</li><li>cesium\u4E2D\u6784\u9020\u51FD\u6570\u4E3A<code>new Cesium.Cartesian3(x, y, z)</code></li></ul><blockquote><p>\u6CE8\u610F\u8FD9\u91CC\u4E0D\u8981\u548CWGS84\u5730\u7406\u5750\u6807\u6216\u8005\u662FWGS84\u692D\u7403\u4F53\u6DF7\u6DC6\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E2A\u4E09\u7EF4\u7684\u7B1B\u5361\u5C14\u5750\u6807\u7CFB\u7684\u5B9A\u4E49\uFF08\u53EA\u662F\u6307\u5B9A\u8F74\u5411\uFF0C\u539F\u70B9\u4F4D\u7F6E\u7B49\uFF09\uFF0C\u5E76\u4E0D\u50CFWGS84\u90A3\u6837\u5305\u542B\u4E00\u4E9B\u692D\u7403\u53C2\u6570</p></blockquote><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1190b16e16cd43818066401bffc842f4~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h4 id="_3-\u5730\u7406\u5750\u6807" tabindex="-1"><a class="header-anchor" href="#_3-\u5730\u7406\u5750\u6807" aria-hidden="true">#</a> [3]\u5730\u7406\u5750\u6807</h4><p><code>new Cesium.Cartographic(longitude, latitude, height)</code></p><ul><li>\u7ECF\u5EA6\uFF1A\u53C2\u8003\u692D\u7403\u9762\u4E0A\u67D0\u70B9\u7684\u5927\u5730\u5B50\u5348\u9762\u4E0E\u672C\u521D\u5B50\u5348\u9762\u95F4\u7684\u4E24\u9762\u89D2\u3002\u4E1C\u6B63\u897F\u8D1F\u3002</li><li>\u7EAC\u5EA6\uFF1A\u53C2\u8003\u692D\u7403\u9762\u4E0A\u67D0\u70B9\u7684\u6CD5\u7EBF\u4E0E\u8D64\u9053\u5E73\u9762\u7684\u5939\u89D2\u3002\u5317\u6B63\u5357\u8D1F\u3002 <img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ba4d0b1e5dd46d0869802cb07ec24d1~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></li></ul><blockquote><p>\u6CE8\uFF1ACartographic\u7684\u7ECF\u7EAC\u5EA6\u662F\u7528\u5F27\u5EA6\u8868\u793A\u7684\uFF0C\u7ECF\u7EAC\u5EA6\u5176\u5B9E\u5C31\u662F\u89D2\u5EA6\u3002\u5F27\u5EA6\u5373\u89D2\u5EA6\u5BF9\u5E94\u5F27\u957F\u662F\u534A\u5F84\u7684\u500D\u6570\u3002</p><p>\u6240\u4EE5\u7ECF\u7EAC\u5EA6\u662F\u4EE5\u5F27\u5EA6\u4E3A\u5355\u4F4D\u7684\uFF0C\u9AD8\u5EA6\u662F\u4EE5\u7C73\u4E3A\u5355\u4F4D\u3002</p><p>\u5F27\u5EA6= \u03C0 / 180 \xD7 \u89D2\u5EA6 \u89D2\u5EA6=180 / \u03C0 \xD7 \u5F27\u5EA6</p></blockquote><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aee4f009c0a346449529fbfa7225d5e0~tplv-k3u1fbpfcp-zoom-1.image" alt="\u5728\u8FD9\u91CC\u63D2\u5165\u56FE\u7247\u63CF\u8FF0"></p><h3 id="_2-cesium\u5750\u6807\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-cesium\u5750\u6807\u8F6C\u6362" aria-hidden="true">#</a> 2.cesium\u5750\u6807\u8F6C\u6362</h3><h4 id="_1-\u89D2\u5EA6\u4E0E\u5F27\u5EA6\u7684\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1-\u89D2\u5EA6\u4E0E\u5F27\u5EA6\u7684\u8F6C\u6362" aria-hidden="true">#</a> [1]\u89D2\u5EA6\u4E0E\u5F27\u5EA6\u7684\u8F6C\u6362</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u89D2\u5EA6\u8F6C\u5F27\u5EA6</span>
<span class="token keyword">var</span> radians <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>CesiumMath<span class="token punctuation">.</span><span class="token function">toRadians</span><span class="token punctuation">(</span>degrees<span class="token punctuation">)</span>
<span class="token comment">//\u5F27\u5EA6\u8F6C\u89D2\u5EA6</span>
<span class="token keyword">var</span> degrees <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>CesiumMath<span class="token punctuation">.</span><span class="token function">toDegrees</span><span class="token punctuation">(</span>radians<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="_2-\u5730\u7406\u5750\u6807\u8F6Ccartesian3" tabindex="-1"><a class="header-anchor" href="#_2-\u5730\u7406\u5750\u6807\u8F6Ccartesian3" aria-hidden="true">#</a> [2]\u5730\u7406\u5750\u6807\u8F6CCartesian3</h4><p>Cesium\u5728\u7ED8\u56FE\u8FC7\u7A0B\u4E2D\u9700\u8981\u4F7F\u7528\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\uFF08\u5982WGS84\u7B1B\u5361\u5C14\u5750\u6807\u7CFB\uFF09\uFF0C\u56E0\u6B64\u9700\u8981\u5C06<code>\u7ECF\u7EAC\u5EA6\u5750\u6807</code>\u8F6C\u6362\u4E3A\u7B1B\u5361\u5C14\u5750\u6807\uFF0C\u624D\u80FD\u7528\u4E8E\u7ED8\u56FE\u3002 cartographic\uFF1A<code>\u5F27\u5EA6\u5236\u8868\u793A\u7684\u5730\u7406\u5750\u6807\u7CFB</code>\u3002\u4F7F\u7528\uFF08\u7ECF\u5EA6\uFF0C\u7EAC\u5EA6\uFF0C\u5927\u5730\u9AD8\uFF09\u8868\u793A\u3002</p><h5 id="_1-\u76F4\u63A5\u7ECF\u8FC7\u7ECF\u7EAC\u5EA6\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1-\u76F4\u63A5\u7ECF\u8FC7\u7ECF\u7EAC\u5EA6\u8F6C\u6362" aria-hidden="true">#</a> (1)\u76F4\u63A5\u7ECF\u8FC7\u7ECF\u7EAC\u5EA6\u8F6C\u6362</h5><h6 id="\u89D2\u5EA6\u5236\u7684\u5730\u7406\u5750\u6807\u8F6Ccartesian3" tabindex="-1"><a class="header-anchor" href="#\u89D2\u5EA6\u5236\u7684\u5730\u7406\u5750\u6807\u8F6Ccartesian3" aria-hidden="true">#</a> \u89D2\u5EA6\u5236\u7684\u5730\u7406\u5750\u6807\u8F6CCartesian3</h6><p>\u76F4\u63A5\u8F6C\u6362\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>longitude<span class="token punctuation">,</span> latitude<span class="token punctuation">,</span> height<span class="token punctuation">,</span> ellipsoid<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
ellipsoid\uFF1A\u8BE5Cartesian3\u6240\u4F7F\u7528\u7684\u692D\u7403\uFF0C\u9ED8\u8BA4\u4E3AEllipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span>
result\uFF1A\u5B58\u50A8\u7ED3\u679C\u7684\u5BF9\u8C61
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArray</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">,</span> ellipsoid<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
coordinates\uFF1A\u7ECF\u7EAC\u5EA6\u6570\u7EC4\u5217\u8868\uFF0C\u7528\u4E8E\u6279\u91CF\u8F6C\u6362<span class="token punctuation">[</span>\u7ECF\u5EA6\uFF0C\u7EAC\u5EA6\uFF0C\u8FDB\u5EA6\uFF0C\u7EAC\u5EA6\uFF0C\u3002\u3002\u3002\u3002<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> cartesian3s <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartesian3<span class="token punctuation">.</span><span class="token function">fromDegreesArrayHeights</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">)</span><span class="token punctuation">;</span>
coordinates\uFF1A<span class="token punctuation">[</span>\u7ECF\u5EA6\uFF0C\u7EAC\u5EA6\uFF0C\u9AD8\u5EA6\uFF0C\u8FDB\u5EA6\uFF0C\u7EAC\u5EA6\uFF0C\u9AD8\u5EA6<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h6 id="\u5F27\u5EA6\u5236\u4E0E\u7B1B\u5361\u5C14\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5F27\u5EA6\u5236\u4E0E\u7B1B\u5361\u5C14\u8F6C\u6362" aria-hidden="true">#</a> <strong>\u5F27\u5EA6\u5236\u4E0E\u7B1B\u5361\u5C14\u8F6C\u6362</strong></h6><p>\u5F27\u5EA6\u5236\u4E5F\u7C7B\u4F3C\uFF0C\u4F7F\u7528<code>Cesium.Cartesian3.fromRadians</code>, <code>Cesium.Cartesian3.fromRadiansArray</code>, <code>Cesium.Cartesian3.fromRadiansArrayHeights</code></p><h5 id="_2-\u4F7F\u7528\u692D\u7403\u4F53\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u692D\u7403\u4F53\u8F6C\u6362" aria-hidden="true">#</a> (2)\u4F7F\u7528\u692D\u7403\u4F53\u8F6C\u6362</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5148\u8F6C\u6362\u4E3A\u5F27\u5EA6\u5750\u6807</span>
<span class="token keyword">let</span> position <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromDegrees</span><span class="token punctuation">(</span>lon<span class="token punctuation">,</span> lat<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u83B7\u53D6viewer\u692D\u7403\u4F53\u5B9E\u4F8B</span>
<span class="token keyword">let</span> ellipsoid <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>globe<span class="token punctuation">.</span>ellipsoid<span class="token punctuation">;</span>
<span class="token comment">//\u5F00\u59CB\u8F6C\u6362</span>
<span class="token keyword">let</span> cartesian3 <span class="token operator">=</span> ellipsoid<span class="token punctuation">.</span><span class="token function">cartographicToCartesian</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u591A\u4E2A\u5750\u6807</span>
<span class="token keyword">let</span> cartesian3s <span class="token operator">=</span> ellipsoid<span class="token punctuation">.</span><span class="token function">cartographicArrayToCartesianArray</span><span class="token punctuation">(</span>positions<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="_3-cartesian3\u8F6C\u5730\u7406\u5750\u6807" tabindex="-1"><a class="header-anchor" href="#_3-cartesian3\u8F6C\u5730\u7406\u5750\u6807" aria-hidden="true">#</a> [3]Cartesian3\u8F6C\u5730\u7406\u5750\u6807</h4><h5 id="_1-\u76F4\u63A5\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_1-\u76F4\u63A5\u8F6C\u6362" aria-hidden="true">#</a> (1)\u76F4\u63A5\u8F6C\u6362</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u76F4\u63A5\u8F6C\u6362\u5F97\u5230\u7684\u662FWGS84\u5F27\u5EA6\u5236\u7684\u7ECF\u7EAC\u5EA6\u5750\u6807\uFF0C\u53EF\u5C06\u5176\u518D\u8F6C\u6362\u4E3A\u89D2\u5EA6\u5236\u3002</span>
<span class="token keyword">let</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Cartographic<span class="token punctuation">.</span><span class="token function">fromCartesian</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_2-\u901A\u8FC7\u692D\u7403\u4F53\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#_2-\u901A\u8FC7\u692D\u7403\u4F53\u8F6C\u6362" aria-hidden="true">#</a> (2)\u901A\u8FC7\u692D\u7403\u4F53\u8F6C\u6362</h5><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u9700\u8981\u9009\u7740\u6216\u521B\u5EFA\u5730\u7406\u5750\u6807\u7684\u692D\u7403\u4F53\u53C2\u6570</span>
<span class="token comment">// \u5355\u4E2A\u5750\u6807</span>
<span class="token keyword">let</span> cartographic <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">.</span><span class="token function">cartesianToCartographic</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u591A\u4E2A\u5750\u6807</span>
<span class="token keyword">let</span> cartographics <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>Ellipsoid<span class="token punctuation">.</span><span class="token constant">WGS84</span><span class="token punctuation">.</span><span class="token function">cartesianArrayToCartographic</span><span class="token punctuation">(</span>cartesain3Array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_4-cartesian2\u4E0Ecartesian3\u4E92\u8F6C" tabindex="-1"><a class="header-anchor" href="#_4-cartesian2\u4E0Ecartesian3\u4E92\u8F6C" aria-hidden="true">#</a> [4]Cartesian2\u4E0ECartesian3\u4E92\u8F6C</h4><p>\u5C4F\u5E55\u5750\u6807\u548C\u8FEA\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7684\u8F6C\u6362</p><h5 id="_1-cartesian2\u8F6Ccartesian3" tabindex="-1"><a class="header-anchor" href="#_1-cartesian2\u8F6Ccartesian3" aria-hidden="true">#</a> (1)Cartesian2\u8F6CCartesian3</h5><p>\u5C4F\u5E55\u8F6C<code>\u692D\u7403\u9762\u7B1B\u5361\u5C14\u5750\u6807</code>\uFF0C\u4E0D\u5305\u542B\u5730\u5F62\u3001\u6A21\u578B\u7B49\u7684\u5750\u6807 Cesium\u4E2D\u7684<code>Camera</code>\u63D0\u4F9B\u4E86<code>pickEllipsoid</code>\u65B9\u6CD5\uFF1A<a href="https://cesium.com/learn/cesiumjs/ref-doc/Camera.html?classFilter=camera#pickEllipsoid" target="_blank" rel="noopener noreferrer">\u4F20\u9001\u95E8</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> cartesain3 <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">pickEllipsoid</span><span class="token punctuation">(</span>cartesian2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C4F\u5E55\u8F6C<code>\u573A\u666F\u5750\u6807</code>\uFF0C\u5305\u542B\u5730\u5F62\u548C\u6A21\u578B\u7B49\u7684\u573A\u666F\u7A7A\u95F4\u5750\u6807 \u4F7F\u7528<code>Scene</code>\u7C7B\u4E2D\u7684<code>pickPosition</code>\u65B9\u6CD5\u5B9E\u73B0\uFF1A<a href="https://cesium.com/learn/cesiumjs/ref-doc/Scene.html#pickPosition" target="_blank" rel="noopener noreferrer">\u4F20\u9001\u95E8</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> cartesian3 <span class="token operator">=</span> viewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span><span class="token function">pickPosition</span><span class="token punctuation">(</span>cartesian2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C4F\u5E55\u5750\u6807\u8F6C<code>\u5730\u8868\u7B1B\u5361\u5C14\u7A7A\u95F4\u5750\u6807</code> \u901A\u8FC7\u76F8\u673A\u4E0E\u5C4F\u5E55\u70B9\u4F4D\u8FDE\u7EBF\u6765\u6C42\u53D6\u5750\u6807\u3002 \u4F7F\u7528Scene\u7C7B\u4E2Dglobe\u5C5E\u6027\u4E2D\u7684pick\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> ray <span class="token operator">=</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">.</span><span class="token function">getPickRay</span><span class="token punctuation">(</span>cartesian2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> cartesian3 <span class="token operator">=</span> globe<span class="token punctuation">.</span><span class="token function">pick</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span>viewer<span class="token punctuation">.</span>scene<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_2-cartesian3\u8F6Ccartesian2" tabindex="-1"><a class="header-anchor" href="#_2-cartesian3\u8F6Ccartesian2" aria-hidden="true">#</a> (2)Cartesian3\u8F6CCartesian2</h5><p>Cesium\u63D0\u4F9B\u4E86SceneTransforms\u7684wgs84ToWindowCoordinates\u65B9\u6CD5\u5C06\u7B1B\u5361\u5C14\u5750\u6807\u8F6C\u6362\u4E3A\u5C4F\u5E55\u5750\u6807</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> cartesian2 <span class="token operator">=</span> Cesium<span class="token punctuation">.</span>SceneTransforms<span class="token punctuation">.</span><span class="token function">wgs84ToWindowCoordinates</span><span class="token punctuation">(</span>cartesian3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,52);function A(D,E){const n=c("RouterLink");return i(),o(l,null,[a("nav",d,[a("ul",null,[a("li",null,[s(n,{to:"#_1-cesium\u5750\u6807\u4ECB\u7ECD"},{default:e(()=>[k]),_:1}),a("ul",null,[a("li",null,[s(n,{to:"#_1-\u5C4F\u5E55\u5750\u6807\u7CFB\u7EDF"},{default:e(()=>[m]),_:1})]),a("li",null,[s(n,{to:"#_2-\u7B1B\u5361\u5C14\u7A7A\u95F4\u76F4\u89D2\u5750\u6807\u7CFB\u7EDF"},{default:e(()=>[h]),_:1})]),a("li",null,[s(n,{to:"#_3-\u5730\u7406\u5750\u6807"},{default:e(()=>[b]),_:1})])])]),a("li",null,[s(n,{to:"#_2-cesium\u5750\u6807\u8F6C\u6362"},{default:e(()=>[_]),_:1}),a("ul",null,[a("li",null,[s(n,{to:"#_1-\u89D2\u5EA6\u4E0E\u5F27\u5EA6\u7684\u8F6C\u6362"},{default:e(()=>[f]),_:1})]),a("li",null,[s(n,{to:"#_2-\u5730\u7406\u5750\u6807\u8F6Ccartesian3"},{default:e(()=>[g]),_:1}),a("ul",null,[a("li",null,[s(n,{to:"#_1-\u76F4\u63A5\u7ECF\u8FC7\u7ECF\u7EAC\u5EA6\u8F6C\u6362"},{default:e(()=>[v]),_:1}),a("ul",null,[a("li",null,[s(n,{to:"#\u89D2\u5EA6\u5236\u7684\u5730\u7406\u5750\u6807\u8F6Ccartesian3"},{default:e(()=>[C]),_:1})]),a("li",null,[s(n,{to:"#\u5F27\u5EA6\u5236\u4E0E\u7B1B\u5361\u5C14\u8F6C\u6362"},{default:e(()=>[j]),_:1})])])]),a("li",null,[s(n,{to:"#_2-\u4F7F\u7528\u692D\u7403\u4F53\u8F6C\u6362"},{default:e(()=>[x]),_:1})])])]),a("li",null,[s(n,{to:"#_3-cartesian3\u8F6C\u5730\u7406\u5750\u6807"},{default:e(()=>[y]),_:1}),a("ul",null,[a("li",null,[s(n,{to:"#_1-\u76F4\u63A5\u8F6C\u6362"},{default:e(()=>[w]),_:1})]),a("li",null,[s(n,{to:"#_2-\u901A\u8FC7\u692D\u7403\u4F53\u8F6C\u6362"},{default:e(()=>[S]),_:1})])])]),a("li",null,[s(n,{to:"#_4-cartesian2\u4E0Ecartesian3\u4E92\u8F6C"},{default:e(()=>[W]),_:1}),a("ul",null,[a("li",null,[s(n,{to:"#_1-cartesian2\u8F6Ccartesian3"},{default:e(()=>[G]),_:1})]),a("li",null,[s(n,{to:"#_2-cartesian3\u8F6Ccartesian2"},{default:e(()=>[z]),_:1})])])])])])])]),T],64)}var q=p(u,[["render",A],["__file","cesium\u4E2D\u7684\u5750\u6807\u7CFB\u7EDF\u4E0E\u8F6C\u6362.html.vue"]]);export{q as default};
