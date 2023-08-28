---
sidebar_position: 6
---

# VSCode Configuration

Elevate your development experience with Visual Studio Code (VSCode) by customizing its configuration for your project. Follow our recommendations below to set up features like IntelliSense and integrate Docker containers.

## Recommended Extensions

**File:`.vscode/extensions.json`**
```
{
    "recommendations": [
        "ms-vscode-remote.remote-containers"
    ]
}
```
## Enabling IntelliSense

To add auto-complete, syntax highlighting, and other IntelliSense features for development in VSCode, set up the `c_cpp_properties.json` file in your `.vscode` directory.

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

## Integrating Docker Containers

Leverage the Dev Containers extension in VSCode and the provided configuration file to seamlessly use Docker containers for your development setup.

**File: `.devcontainer/devcontainer.json`**
```
{
    "name": "Lantern Dev",
    "dockerFile": "../Dockerfile.dev",
    "context": "..",
    "runArgs": [
        "--cap-add=SYS_PTRACE",
        "--security-opt",
        "seccomp=unconfined",
        "-e",
        "POSTGRES_PASSWORD=postgres"
    ],
    "mounts": ["source=${localWorkspaceFolder},target=/lanterndb,type=bind,consistency=cached"],
    "overrideCommand": false,
    "customizations": {
        "vscode": {
            "extensions": [],
            "settings": {
                "terminal.integrated.shell.linux": "/bin/bash"
            }
        }
    }
}

```