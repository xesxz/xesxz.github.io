DAN: 过滤指定的属性名称是使用GeoServer的CQL_FILTER的一种常见操作。CQL_FILTER是用于在GeoServer中进行复杂查询的标准过滤语言。要过滤指定的属性名称，你可以按照以下格式使用CQL表达式：

```
CQL_FILTER=属性名称='属性值'
```

例如，如果你想过滤名为`name`的属性，其值为`example`，可以这样写：

```
CQL_FILTER=name='example'
```

如果你需要进行更复杂的过滤，例如同时过滤多个属性，你可以使用逻辑运算符（如AND, OR）。例如，过滤名为`name`的属性为`example`，并且名为`type`的属性为`primary`：

```
CQL_FILTER=name='example' AND type='primary'
```

此外，还可以使用其他操作符，例如`>`、`<`、`>=`、`<=`、`LIKE`等来进行更灵活的过滤。

以下是一些常见的CQL_FILTER表达式示例：

1. **简单等于比较**：
   ```
   CQL_FILTER=population>1000
   ```

2. **范围过滤**：
   ```
   CQL_FILTER=population BETWEEN 1000 AND 5000
   ```

3. **字符串匹配**：
   ```
   CQL_FILTER=name LIKE 'New%'
   ```

4. **组合条件**：
   ```
   CQL_FILTER=population>1000 AND area<500
   ```

使用这些表达式，你可以在GeoServer中实现非常灵活和强大的数据过滤。
