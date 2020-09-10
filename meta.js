module.exports = {
  "questions": [
    // {
    //   "name": "name",
    //   "message": "请输入模块名称",
    //   "type": "input",
    //   "default": "hello-world"
    // }
  ],
  "postinstall": (questions) => {
    return [
      'echo hello!'
    ]
  }
}
