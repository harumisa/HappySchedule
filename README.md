# README

## ＜アプリ名＞
HappySchedule

## ＜概要＞
スケジュール管理アプリです。
まず初めにユーザー登録をしていただくことによりご利用いただけます。
日々のスケジュールを気軽にタスク管理感覚でメモに残していくことができます。
スケジュールは直近の予定から順に確認でき、スケジュールのカテゴリーもアイコンで一目でわかります。
スケジュール内容の変更、削除もスケジュールの右上にあるアイコンにマウスオーバーすることによりメニューが現れますので簡単に行えます。
ブラウザ右上にある検索窓よりスケジュールの検索も可能です。

## ＜制作背景(意図)＞
普段、自身のタスクや予定の管理をスマホのメモを使って管理していましたが、その時に感じていた、
「直近順で確認できたら良いな」
「検索できたら良いな」
「もう少し可愛いデザインのメモがあれば良いな」
を形にしました。

## ＜工夫したポイント＞
・直近のスケジュールから確認できるように、スケジュールの日にちが古いものから順に並ぶようにしました。
・登録したスケジュールがどんな内容か一目でわかる様にカテゴリーを設定できるようにしました。また、スケジュールを楽しく、可愛く見せる為に、カテゴリーに合うアイコンを付けました。
・スケジュールの編集ボタンと削除ボタンは必要な時にだけ表示させたかったので、隠しておき、右上にあるアイコンにマウスオーバーすることによりメニューが現れるようにしました。
・jQueryを利用し、検索窓に文字が入力される毎にスケジュールの検索結果が表示されるようにしました。

## ＜使用技術(開発環境)＞
Ruby・Ruby on Rails・JavaScript・jQuery・Haml・SCSS

## ＜課題や今後実装したい機能＞
・現在スケジュールを文字検索することは可能なので、カテゴリー別や日にち別でも見れるようにしたい。
・アプリの構成をタスクメモ形式にしているが、タスクが増えてくると一覧で見たい時も出てくると思うので、カレンダー形式に切り替えもできるようにしたい。

## ＜DB設計＞

## schedulesテーブル

|Column|Type|Option|
|------|----|------|
|title|string|null: false, index: true|
|date|datetime|null: false, index: true|
|category|string|null: false|
|memo|text|index: true|
|user|reference|null: false, foreign_key: true|

### Association
- belongs_to :user

## usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :schedules