# gamesByReact
complete a game by React

## React总结

1 组建中用到的一个变量是不是应该作为组件的state，通过下面4条来判断  
1-1 如果是通过父组件的props传下来的，则不是  
1-2 如果在组件的整个生命周期内都不变，则不是  
1-3 如果这个变量可以通过其它状态来计算处理，则不是  
1-4 这个变量是否在组件的render方法中使用，如果不是那么不是，

-----
2 state和props的区别  
state是可变的，而props不可以改变，只可以返回新的

----
3 直接修改state的值，不会触发render, 只能使用setState来返回新的状态

----
4 state的更新是异步的  
调用setState，并不会立即改变组件的state值，setState只是吧要修改的状态放入一个队列中，React会优化真正的执行机制，处于性能的原因，会合并多次setState的状态，`所以不要依赖当前的State计算下一个State`， 当真正执行状态修改时，依赖的this.state并不能保证是最新的，也不能依赖当前的props来计算下个状态，props一般也是从父组件的state获取， 

-----
5 三种方法来处理回调函数中的this问题  
5-1 回调函数中直接`this.handleClick`的时候，需要在构造函数中使用bind来绑定  
5-2 定义函数的时候直接使用箭头函数，回调函数中就可以使用不加括号  
5-3 在回调函数中直接使用箭头函数， 这个存在的问题是每次渲染组件的时候都需要创建不同的回调箭头函数，如果需要将此函数作为参数传递下去，会造成不必须的多次渲染，建议前两种方法

----
6 为事件处理函数传递参数  
6-1

```
    onClick = {(e) => this.handleClick(id, e)} 
```
6-2  
```
    onClick = {this.handleClick.bind(this, id)}
```
**以上两种方法都可以将React的对象事件e作为第二个参数传递出去**， 箭头函数的方式，事件对象必须显式传递，bind的方式，事件对象以及更多的参数会隐式传递

----
7 关于select标签选中问题  
原生select使用在option中添加seleceted选项来确定被选中的状态， 而React并不会这么做，而是在select标签上使用`defaultValue`属性来决定
