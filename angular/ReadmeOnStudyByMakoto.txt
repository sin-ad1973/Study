# ngコマンドを実行する前に下記を実行し、Powershellのスクリプト実行ポリシーを変更すること
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

#json-server起動
json-server --watch db.json
