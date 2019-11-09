**在Javascript学习网站做的一些习题总结**
网站是: https://www.codewars.com

## 题目列表
### 习题1 
* **题目详情**
``` 
完成函数scramble（str1，str2），如果str1字符的一部分可以重新排列以匹配str2，则返回true，否则返回false。
```
* **题目补充**
    * 仅使用小写字母（a-z）。不会包含标点符号或数字。
    * 需要考虑性能
* **解题思考**
    初看很简单,循环str2, 判断每一个字符都包含在str1中就返回`true`,否则就返回`false`.但是没有考虑到str2有多个重复的字符,如果只是判断是否有字符肯定是不行的.还要判断数量是否足够.
* **解题结果**
    * 我的方法
    我这个思路比较简单,每次查询str1中是否包含str2中的每一个字符. 如果有重复的, 查询的时候, 从这个字符上一次所在的索引开始查找.
    ```javascript {.line-numbers}
    function scramble(str1, str2) {
        //code me
        var isBol = true;
        var str1Obj = {};
        for(var i = 0, len = str2.length; i < len; i++) {
        let currentIndex;
        if(str1Obj[str2[i]]) {
            let lastIndex = str1Obj[str2[i]];
            currentIndex = str1.indexOf(str2[i], lastIndex);
        } else {
            currentIndex = str1.indexOf(str2[i])
        } 
        if (currentIndex < 0) {
            isBol = false;
            break;
        } else {
            str1Obj[str2[i]] = currentIndex + 1;
        }
        }
        return isBol;
    }
    ```
    * **别人的方法**
    把str1每个字符的信息储存在一个对象中.str2转为数组循环每一项, 对象中对应的字符每次减去1.这个方法更好一点
    ```javascript {.line-numbers}
        function scramble(str1, str2) {
            let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
            return str2.split("").every((character) => --occurences[character] >= 0);
        }
    ```
* **用到的方法**
    * **Array.prototype.reduce()**
        * 语法
            ```
            arr.reduce(callback, initialValue);
            ```
        * 描述
        `reduce()`为数组中的每一项依次执行`callback`函数,不包括数组中被删除或未被赋值的元素. 函数每次执行的返回值会累加起来.(初始值为initialValue, 如果没有传这个参数,则初始值为数组中的第一个元素)最后返回.
        `callback()`函数总共可以接受四个参数
            1. 累计数据
            2. 当前值
            3. 当前索引
            4. 源数组
        
        * 题目用法解析
            ```javascript {.line-numbers}
            str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {})
            ```
            上面代码是把一个字符串转为数组, 执行`reduce`方法, 返回一个统计了各个字符信息(每个字符有多少个)的对象.
    
    *   **Array.prototype.every()**
        * 语法
        ```
        arr.every(callback, thisArg);
        ```
        * 描述
        `every`为数组中的每一个元素执行`callback`方法, 如果有一项返回了`false`,则这个方法返回`false`.如果全部为`true`,则返回`true`;
        第二个值`thisArg`, 该参数为调用`every`的`this`值.

        * 题目用法解析
            ```javascript 
            str2.split("").every((character) => --occurences[character] >= 0);
            ```
            上面代码的意思是: str2转为数组,然后执行`every`方法, 函数里面返回值, 可以判断上面生成的str1字符信息对象里面有没有全部包含str2的字符. 如果没有就返回`false`.
### 习题2
* **题目详情**
```javascript
完成解决方案，以便将字符串拆分为两个字符对。如果字符串包含奇数个字符，那么它应该用下划线（'_'）替换最后一对中缺少的第二个字符。
```
* **解题结果**
    * 我的方法
    我的思路是先判断字符串的`length`如果是奇数就加上`_`, 然后循环字符串,长度为字符长度除以二. 在循环中使用`str.substring()`方法每次返回两个字符.
    ```javascript {.line-numbers}
    function solution(str){
        let tempStr = str.length % 2 == 0 ? str : str + '_';
        let tempArr = [];
        for (let i = 0, len = tempStr.length / 2; i < len; i++){
            tempArr.push(tempStr.substring(2*i, 2*i+2));
        }
        return tempArr;
    }
    ```
    * 别人更高效的方法
    使用字符串的`math()`方法, 这个方法可以返回正则匹配到的所有项.返回值是一个数组
    ```javascript {.line-numbers}
    function solution(str) {
        return (str.length % 2 ? str + '_' : str).match(/../g);
    }
    ```

* **用到的方法**
    * **`String.prototype.match()`**
        * 语法
        ```
            str.match(regexp)
        ```
        * 描述
        如果正则表达式不带`g`标志, 则`str.match()`会返回和`RegExp.exec()`一样的结果,
        示例: 
        ```javascript {.line-numbers}
            var myRe = /ab*/;
            var str = 'abbabababcdefabh';
            var tempData = str.match(myRe);
            console.log(tempData);
        ```
        <!-- ![打印结果](../images/Xnip2018-10-30_11-33-25.jpg) -->

        如果正则表达式带`g`标志, 则该方法返回一个数组, 包含所有匹配到的字符串. 如果没有匹配到则返回 `null`
        示例: 
        ```javascript {.line-numbers}
            var myRe = /ab*/g;
            var str = 'abbabababcdefabh';
            var tempData = str.match(myRe);
            console.log(tempData);
        ```
        <!-- ![结果](../images/Xnip2018-10-30_11-42-31.jpg) -->
        * 题目用法解析
            ```javascript {.line-numbers}
                (str.length % 2 ? str + '_' : str).match(/../g);
            ```
            上面代码使用正则`/../g`匹配随意两个字符, 然后返回一个数组. 完美方法
            
### 习题三
* **题目详情**
```
皮特喜欢烤一些蛋糕。他有一些食谱和配料。不幸的是，他在数学上并不擅长。你可以帮他找一下，考虑到他的食谱，他可以烘烤多少块蛋糕？

编写一个函数cakes()，它接受配方（对象）和可用成分（也是一个对象）并返回可以烘焙的最大蛋糕数（整数）。为简单起见，没有单位的数量（例如1磅面粉或200克糖只是1或200）。对象中不存在的成分可以视为0。
根据配方和可用材料,计算可以制作多少蛋糕
```
* **解题结果**
    * 我的方法
    我的思路是循环配方对象, 判断材料对象中是否有对应的材料. 如果没有或者数量为0或者小于配方中的数量.则返回 0 ; 否则就计算每一种配方材料最多可以制作多少,保存在数组中. 最后对数组排序返回最小的那个值.
    ```javascript {.line-numbers}
    function cakes(recipe, available) {
        let isBol = true;
        let tempArr = [];
        for(let y in recipe) {
            if(recipe.hasOwnProperty(y)) {
                if (!available[y] || available[y] < recipe[y]) {
                    isBol = false;
                } else {
                    tempArr.push(Math.floor(available[y]/recipe[y]));
                }
            }
        }
        if(!isBol){
            return 0;
        } else {
            tempArr.sort(function (a, b){return a - b});
            return tempArr[0];
        }
    }
    ```
    这个方法还要对数组进行排序稍显麻烦.看下别人的方法把
    * 别人更高效的方法
    ```javascript {.line-numbers}
    function cakes(recipe, available) {
        return Object.keys(recipe).reduce(function(val, ingredient) {
            return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
        }, Infinity)  
    }
    ```
    上面这个方法, 先使用`Object.keys()`获取到配方对象所有的`key`值( 返回的是一个数组 ).然后使用`arr.reduce()`方法, 以`Infinity`(表示无穷大)为初始值, 函数中使用`Math.min()`方法返回累计值与当前值中的最小数. 最终的返回值就是可以制作的蛋糕数量.
    * **还有个方法**
    ```javascript {.line-numbers}
    function cakes(recipe, available) {
        var numCakes = [];
        for(var key in recipe){
            if(recipe.hasOwnProperty(key)){
                if(key in available){
                    numCakes.push(Math.floor(available[key] / recipe[key]));
                }else{
                    return 0;
                }
            }
        }
    
        return Math.min.apply(null, numCakes); 
    
    }
    ```
    这个方法跟我的方法有点相似,不同的主要是,我是用数组排序得到最小值. 而这个方法是用`Math.min.apply(null, numCakes)`这个方法得到的.很明显这种方法要更好一点.
* **用到的方法**

    * `Object.keys()`
        * 语法
        ```
            Object.keys(obj);
        ```
        * 描述
        这个方法返回`obj`对象自身所有可枚举属性组成的数组.注意是自身可枚举的. 原型继承而来的属性是不会返回的.

    * `Math.min()`
        * 语法
        > Math.min(val1, val2, val3, ...)

        * 描述
        这个方法返回给定数值中的最小值, 如果有任意一个数值不能转为数字, 则返回`NaN`.

        * 示例:

        ```javascript {.line-numbers}
        // 找出x、y 的最小值并赋值给 z
        var x = 10, y = -10;
        var z = Math.min(x, y);
        ```
    



