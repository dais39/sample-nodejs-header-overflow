Node.jsのHTTPリクエストヘッダのデフォルト値の動作確認用サンプルコード

### 起動
```shell script
npm start
```

### 動作確認
```shell script
curl -i -X GET "http://localhost:8080" -H "Cookie: <8kB以上のデータ>" 
``
