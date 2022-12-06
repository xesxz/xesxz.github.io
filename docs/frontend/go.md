


## print

```go
import "fmt"

func main() {
	var a, b, c = 100, 3.14, "Hello World"

	// ******** Printf需要自己指定格式化
	/*
	 * Printf不会自动换行， 所以需要使用\n主动换行，如果需要换行的话
	 * %d 整型占位符
	 */
	fmt.Printf("%d\n", a) // 输出：100
	/*
	 * %f 浮点型占位符
	 * .2表示小数点后两位
	 */
	fmt.Printf("%f\n", b) // 输出：3.140000
	fmt.Printf("%.2f\n", b) // 输出：3.14
	// %s 字符串占位符
	fmt.Printf("%s\n", c) // 输出：Hello World

	// ******** Println会按照默认的值表示方法打印并且输出一个换行
	fmt.Println(a, b, c) // 输出：100 3.14 Hello World
}
```







## 打印对象
[Go 结构体格式化输出](https://blog.csdn.net/K346K346/article/details/107314703)

1.输出结构体字段名（%+v ）
func main() {
	fmt.Printf("student=%+v\n", student)
}
2.输出格式化 JSON 串
```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
)

func main() {
	bs, _ := json.Marshal(student)
	var out bytes.Buffer
	json.Indent(&out, bs, "", "\t")
	fmt.Printf("student=%v\n", out.String())
}

```

3.使用 go-huge-util
```go
package main

import (
	"fmt"
	
    huge "github.com/dablelv/go-huge-util"
)

func main() {
	s, _ := huge.ToIndentJSON(&student)
	fmt.Printf("student=%v\n", s)
}

```



0777表示：创建了一个普通文件，所有人拥有所有的读、写、执行权限

0666表示：创建了一个普通文件，所有人拥有对该文件的读、写权限，但是都不可执行

0644表示：创建了一个普通文件，文件所有者对该文件有读写权限，用户组和其他人只有读权限，都没有执行权限