

# 快速开始

## Markdown 语法

### 语法扩展

#### Emoji :tada:

可以在 Markdown 内容中输入 `:EMOJICODE:` 来添加 Emoji 表情。

前往 [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) 来查看所有可用的 Emoji 表情和对应代码。

#### 代码块

可以高亮代码块中的行。

```yaml {1,3-4}:no-line-numbers
kind: Deployment
version: apps/v1
metadata:
	name: test
	namespace: default
```



### 在 Markdown 中使用 Vue

#### 组件

可以在 Markdown 中直接使用 Vue 组件。

- __Badge__

这是一个 tip 徽章。<Badge type="tip" text="V1" vertical="top" />

这是一个 warning 徽章。<Badge type="warning" text="V1" vertical="middle" />

这是一个 danger 徽章。<Badge type="danger" text="V1" vertical="bottom" />

- __CodeGroup__

<CodeGroup>
  <CodeGroupItem title="YARN">

```bash :no-line-numbers
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash :no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

#### Markdown

__自定义容器__

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 点击查看代码

```js
console.log('你好，VuePress！')
```

:::

:::: code-group
::: code-group-item FOO

```js
const foo = 'foo'
```

:::
::: code-group-item BAR

```js
const bar = 'bar'
```

:::
::::

## 静态资源



