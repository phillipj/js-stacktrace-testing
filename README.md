# JavaScript stacktrace testing

Small collection of trivial JS scripts showing how classes/constructors and prototypes compares too simple objects with methods in regards to stacktraces.

Threw in a what I think of as "nested class" aswell inspired from [bluebird](https://github.com/petkaantonov/bluebird) stacktraces.

Split into sync / async sections. Not necessarily meaningfull, but I wanted them both for my own reference.

## synchronous actions

Stacktraces from calling methods synchronously.

### sync.js

Error thrown from a method on an object.

```bash
→ node sync.js
/stacktrace-testing/lib/greeter.js:15
	throw new Error('What does my stacktrace look like?');
	      ^
Error: What does my stacktrace look like?
    at Object.sayHello (/stacktrace-testing/lib/greeter.js:15:8)
    at Object.<anonymous> (/stacktrace-testing/sync.js:3:9)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:124:16)
    at node.js:842:3
```

### sync-class.js

Error thrown from a method on a class.

```bash
→ node sync-class.js
/stacktrace-testing/lib/greeter.js:15
	throw new Error('What does my stacktrace look like?');
	      ^
Error: What does my stacktrace look like?
    at Greeter.sayHello (/stacktrace-testing/lib/greeter.js:15:8)
    at Object.<anonymous> (/stacktrace-testing/sync-class.js:4:7)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:124:16)
    at node.js:842:3
```

### sync-nested.js

Error thrown from a method called on an object using another object.

```bash
→ node sync-nested.js
/stacktrace-testing/lib/shouter.js:6
	throw new Error('Necessary with $ in function name?');
	      ^
Error: Necessary with $ in function name?
    at Object.Shouter$shout [as shout] (/stacktrace-testing/lib/shouter.js:6:8)
    at Object.<anonymous> (/stacktrace-testing/sync-nested.js:3:9)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:124:16)
    at node.js:842:3
```

### sync-nested-class.js

Error thrown from a method called on an class which uses another object.

```bash
→ node sync-nested-class.js
/stacktrace-testing/lib/shouter.js:6
	throw new Error('Necessary with $ in function name?');
	      ^
Error: Necessary with $ in function name?
    at Shouter$shout [as shout] (/stacktrace-testing/lib/shouter.js:6:8)
    at Greeter.shout (/stacktrace-testing/lib/greeter.js:11:15)
    at Object.<anonymous> (/stacktrace-testing/sync-nested-class.js:4:7)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:124:16)
    at node.js:842:3
```

## asynchronous actions

Stacktraces from calling methods asynchronously.

### async.js

Error thrown from a method on an object.

```bash
→ node async.js
/stacktrace-testing/lib/greeter.js:15
	throw new Error('What does my stacktrace look like?');
	      ^
Error: What does my stacktrace look like?
    at Object.sayHello (/stacktrace-testing/lib/greeter.js:15:8)
    at Immediate._onImmediate (/stacktrace-testing/async.js:4:10)
    at processImmediate [as _immediateCallback] (timers.js:374:17)
```

### async-class.js

Error thrown from a method on a class.

```bash
→ node async-class.js
/stacktrace-testing/lib/greeter.js:15
	throw new Error('What does my stacktrace look like?');
	      ^
Error: What does my stacktrace look like?
    at Greeter.sayHello (/stacktrace-testing/lib/greeter.js:15:8)
    at Immediate._onImmediate (/stacktrace-testing/async-class.js:5:8)
    at processImmediate [as _immediateCallback] (timers.js:374:17)
```

### async-nested.js

Error thrown from a method called on an object using another object.

```bash
→ node async-nested.js
/stacktrace-testing/lib/shouter.js:6
	throw new Error('Necessary with $ in function name?');
	      ^
Error: Necessary with $ in function name?
    at Object.Shouter$shout [as shout] (/stacktrace-testing/lib/shouter.js:6:8)
    at Immediate._onImmediate (/stacktrace-testing/async-nested.js:4:10)
    at processImmediate [as _immediateCallback] (timers.js:374:17)
```

### async-nested-class.js

Error thrown from a method called on an object using another object.

```bash
→ node async-nested-class.js
/stacktrace-testing/lib/shouter.js:6
	throw new Error('Necessary with $ in function name?');
	      ^
Error: Necessary with $ in function name?
    at Shouter$shout [as shout] (/stacktrace-testing/lib/shouter.js:6:8)
    at Greeter.shout (/stacktrace-testing/lib/greeter.js:11:15)
    at Immediate._onImmediate (/stacktrace-testing/async-nested-class.js:5:8)
    at processImmediate [as _immediateCallback] (timers.js:374:17)
```
