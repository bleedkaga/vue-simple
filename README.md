[Resource](https://github.com/zzz945/write-vue3-from-scratch)


### 名词解释
浏览器标准：本文中作为es6、css3、h5的统称

### Why learn vue
我们用vue，是因为它是当前业界最佳的解决方案之一，但前端技术方案迭代及工业标准化发展的浪潮，大概率不会在vue这里到达终点。

jquery没有死，它的基因已经注入浏览器标准。而webcomponent shallow dom的灵感，同样有受到vue和react的vdom技术的启发。当然vue也在进化，但要知道，vue的竞争对手，并不是react，而是浏览器的标准化进程。当webcomponent成为主流，我们现在津津乐道的vdom技术也就完成了过渡的使命。

所以我们要有危机感和好奇心，不能过渡依赖vue。我们需要搞清楚在Vue的黑盒中，都做了什么magic。同时，我们也能学习到很多现代软件工程的方法和设计模式，比如tdd、代理模式、观察者模式、封装和解耦的艺术。

### Vue源码为什么难读
功能繁多
我们读vue源码的目的，首先是想了解全貌及部分核心feature的实现，比如双向绑定、vnode渲染等。而Vue源码中包含了太多非核心代码，比如keep alive、dynamic component、functional component等，这些并不是不重要，仅仅是我们暂时对它的实现并不太感兴趣，这些代码的干扰会阻碍我们对核心部分的理解。

向后兼容
Vue源码中包含大量向后兼容代码，但随着浏览器标准从主流框架中吸取精华，以及主流浏览器向浏览器标准的靠拢，vue作为框架所承担的责任会越来越小，举个最简单的例子，用ES6的Proxy实现双向绑定，就比Vue2.x中defineProperty的hack做法要简洁很多。而当webcomponent火候成熟，vue甚至连vdom都不用做了。所以vue3的实现一定会比vue2简单，这已经是官方确定的。我判断vue4的实现一定会更精简，而这个趋势一直持续到vue退出历史舞台。
