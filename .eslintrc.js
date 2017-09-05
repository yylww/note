module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "globals": {
        "React": false
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2, {"SwitchCase": 1}],  // 要求缩进：2个空格；SwitchCase 设置为 1，case 子句将相对于 switch 语句缩进 2 个空格
        "linebreak-style": ["error", "unix"],       // "unix" (默认) 强制使用 Unix 换行符：\n；"windows" 强制使用 Windows 换行符：\r\n
        "quotes": ["error", "single"],              // 要求使用单引号
        "semi": ["error", "never"],                 // 非必要时，不要分号
        "react/jsx-uses-react": "error",            // 解决 import React 时提示 unused
        "react/jsx-uses-vars": "error",             // 解决 import react jsx 组件时提示 unused
        "no-console": "off",                        // 关闭 禁用console
        "eqeqeq": "error",                          // 要求使用 === 和 !==
        "default-case": "error"                     // 要求使用 === 和 !==
    }
};