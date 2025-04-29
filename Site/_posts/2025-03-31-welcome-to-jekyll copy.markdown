---
layout: post
title: "Code Block Examples in Different Languages | Himangshu Pan"
date: 2025-03-31
categories: coding
permalink: /blog/code_blocks/
---

# Code Block Examples in Different Languages

This post showcases code snippets in various programming languages.

---

### **Python Example**
```python
def greet(name):
    print(f"Hello, {name}!")

greet("Himangshu")
```

---

### **JavaScript Example**
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Himangshu");
```

---

### **C++ Example**
```cpp
#include <iostream>
using namespace std;

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet("Himangshu");
    return 0;
}
```

---

### **Rust Example**
```rust
fn greet(name: &str) {
    println!("Hello, {}!", name);
}

fn main() {
    greet("Himangshu");
}
```

---

### **Solidity Example**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeter {
    function greet() public pure returns (string memory) {
        return "Hello, Himangshu!";
    }
}
```

---

### **Go Example**
```go
package main
import "fmt"

func greet(name string) {
    fmt.Println("Hello,", name)
}

func main() {
    greet("Himangshu")
}
```

---

### **Java Example**
```java
public class Main {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        greet("Himangshu");
    }
}
```

---

### **Bash Script Example**
```bash
#!/bin/bash
greet() {
    echo "Hello, $1!"
}
greet "Himangshu"
```

---

### **SQL Example**
```sql
SELECT name FROM users WHERE name = 'Himangshu';
```

---

### **HTML + CSS Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body { background: black; color: lime; }
    </style>
</head>
<body>
    <h1>Hello, Himangshu!</h1>
</body>
</html>
```

---

### **YAML Example**
```yaml
title: "Code Block Examples"
author: "Himangshu Pan"
date: "2025-03-31"
categories:
  - coding
  - programming
```

---

### **JSON Example**
```json
{
  "title": "Code Block Examples",
  "author": "Himangshu Pan",
  "date": "2025-03-31",
  "categories": ["coding", "programming"]
}
```

---

### **Markdown Example**
```md
# Hello, World!
This is a **Markdown** example.
```

---

### **Dockerfile Example**
```dockerfile
FROM rust:1.71
WORKDIR /app
COPY . .
RUN cargo build --release
CMD ["./target/release/myapp"]
```

---

### **Makefile Example**
```make
build:
	cargo build --release

run:
	./target/release/myapp
```

---

### **PowerShell Example**
```powershell
function Greet($name) {
    Write-Output "Hello, $name!"
}

Greet "Himangshu"
```

---

## **Conclusion**
This post contains **code blocks for various programming languages**. Jekyll will automatically apply **syntax highlighting**.
