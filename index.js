module.exports = 
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true
    },
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "globals": {
    "__ENV__": false,
    "__DEV__": false,
    "__STAGE__": false,
    "__PROD__": false,
    "__PACKAGE_VERSION__": false,
    "__BUILD_DATE__": false,
    "__COMMIT_MESSAGE__": false,
    "__MODEL__": false,
    "React": false,
    "shallow": false,
    "render": false,
    "mount": false
  },
  "plugins": [
    "react",
    "react-redux",
    "jest",
    "babel"
  ],
  "rules": {
    "react/no-danger": 2,
    "react/no-deprecated": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-render-return-value": 2,
    "react/no-typos": 2,
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/react-in-jsx-scope": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-child-element-spacing": 2,
    "react/jsx-curly-spacing": [
      2,
      {
        "when": "always",
        "children": true
      }
    ],
    "react/jsx-equals-spacing": [
      2,
      "always"
    ],
    "react/jsx-indent": [
      2,
      4
    ],
    "react/jsx-indent-props": [
      2,
      4
    ],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react-redux/mapStateToProps-no-store": 2,
    "react-redux/mapStateToProps-prefer-parameters-names": 2,
    "jest/consistent-test-it": [
      2,
      {
        "fn": "test"
      }
    ],
    "jest/lowercase-name": 2,
    "jest/no-disabled-tests": 2,
    "jest/no-focused-tests": 2,
    "jest/no-identical-title": 2,
    "jest/no-large-snapshots": [
      2,
      {
        "maxSize": 10
      }
    ],
    "jest/no-test-prefixes": 2,
    "jest/no-jest-import": 2,
    "jest/prefer-to-have-length": 2,
    "jest/prefer-to-be-null": 2,
    "jest/prefer-to-be-undefined": 2,
    "jest/valid-describe": 2,
    "jest/valid-expect": 2,
    "jest/valid-expect-in-promise": 2,
    "for-direction": 2,
    "getter-return": [
      2,
      {
        "allowImplicit": false
      }
    ],
    "no-await-in-loop": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": [
      2,
      "always"
    ],
    "no-console": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [
      2,
      "all",
      {
        "ignoreJSX": "all"
      }
    ],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-sparse-arrays": 2,
    "no-template-curly-in-string": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "use-isnan": 2,
    "valid-jsdoc": 2,
    "valid-typeof": 2,
    "accessor-pairs": 2,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "complexity": [
      2,
      {
        "max": 10
      }
    ],
    "curly": 2,
    "default-case": 2,
    "dot-location": [
      2,
      "property"
    ],
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 2,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": [
      2,
      {
        "allow": [
          "!!"
        ]
      }
    ],
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 2,
    "no-proto": 2,
    "no-redeclare": [
      2,
      {
        "builtinGlobals": true
      }
    ],
    "no-restricted-properties": 2,
    "no-return-assign": [
      2,
      "except-parens"
    ],
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-assign": [
      2,
      {
        "props": true
      }
    ],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-useless-return": 2,
    "no-with": 2,
    "prefer-promise-reject-errors": 2,
    "radix": 2,
    "require-await": 2,
    "vars-on-top": 2,
    "wrap-iife": 2,
    "yoda": 2,
    "strict": 2,
    "init-declarations": 2,
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-restricted-globals": [
      2,
      "event"
    ],
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,
    "callback-return": 2,
    "global-require": 2,
    "handle-callback-err": [
      2,
      "error"
    ],
    "no-buffer-constructor": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-exit": 2,
    "no-restricted-modules": 2,
    "no-sync": 2,
    "indent": [
      2,
      4,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true,
        "align": "value"
      }
    ],
    "jsx-quotes": [
      2,
      "prefer-single"
    ],
    "padding-line-between-statements": [
      2,
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "babel/no-invalid-this": 2
  }
}
