## Vuexを使ったTodoアプリ

- コード: https://github.com/shita1112/todos_vuex
- デモ: https://shita1112.github.io/todos_vuex/

## 利用した技術
- vue-cli
- vuex
- 単一ファイルコンポーネント

## 仕様
- Todoを一覧表示できる
- Todoを作成できる
- Todoを削除できる
- Todoの状態を変更できる
- Todoの状態で絞り込みができる
- Todoの件数を表示できる

## コンポーネント設計
### 図
![todos_vuex.png](https://bootcamp.fjord.jp/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNitoQVE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4dfc9b9a1a7a1b232ca4c09cda0a4c8091b90f6f/todos_vuex.png)

### コンポーネントの親子関係
- App
  - CreateTodoTextField
  - TodoList
    - TodoListItem
  - FilterStateRadioButtons
  - TodosCount

## 感想
コンポーネントの設計が難しかったです。Atomic DesignやPresentational Component/Container Componentの概要は勉強したのですが、実際に開発を始めてみるとどう適用すればいいのかわかりませんでした。命名もしっくりこず。小さなアプリで苦労しているので、大きなアプリだと更に苦労しそう。ここらへんは慣れが必要そうです。

Vue.jsは簡単に使える反面、規約が少なく様々な書き方ができてしまうので、気をつけないと変なコードを量産しそうです。たくさんコードを読んでベストプラクティスを蓄積しておかなければ！と思いました。
あと、チームメンバー間でコンポーネントの粒度やコードの書き方についての認識のすり合わせをしておかないと、容易にカオスになりそうです。

今回はフロントエンドのみだったのでわかりやすかったですが、Railsと一緒に使う場合は更に悩みが増えるので、これもなかなか大変そうです。

全体的に、Vue.jsを使ってまともなアプリを作れるようになるには、かなりの経験が必要そうだなーと思いました。
