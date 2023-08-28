---
sidebar_position: 6
---

# Setting up VSCode for Development

Visual Studio Code (VSCode) is a powerful and lightweight code editor that supports a wide range of programming languages. You can optimize your VSCode setup to enhance your development experience. Here's a recommended configuration:

## Configuring IntelliSense

To enable auto-complete, syntax highlighting, and other IntelliSense features for development in VSCode, set up the `c_cpp_properties.json` file in your `.vscode` directory.

**File: `.vscode/c_cpp_properties.json`**
```
{
    "configurations": [
        {
            "name": "Linux",
            "includePath": [
                "${workspaceFolder}/**"
            ],
            "defines": [],
            "cStandard": "c99",
            "cppStandard": "c++11",
            "compileCommands": "./build/compile_commands.json",
            "intelliSenseMode": "linux-clang-x64"
        }
    ],
    "version": 4
}
```