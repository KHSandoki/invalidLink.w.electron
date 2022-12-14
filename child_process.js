const exec = require('child_process').exec
 
// 任何你期望执行的cmd命令，ls都可以
let cmdStr = 'dir'
// 执行cmd命令的目录，如果使用cd xx && 上面的命令，这种将会无法正常退出子进程
let cmdPath = ''
// 子进程名称
let workerProcess
 
runExec();
 
function runExec() {
  // 执行命令行，如果命令不需要路径，或就是项目根目录，则不需要cwd参数：
  workerProcess = exec(cmdStr)
  // 不受child_process默认的缓冲区大小的使用方法，没参数也要写上{}：workerProcess = exec(cmdStr, {})
 
  // 打印正常的后台可执行程序输出
  workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
 
  // 打印错误的后台可执行程序输出
  workerProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });
 
  // 退出之后的输出
  workerProcess.on('close', function (code) {
    console.log('out code：' + code);
  })
}
