var constants = require('./constants');

exports.default = {
    "workflowApiVersion": "1.1",
    "metaData": {
        "version": "2.0",
        "icon": "images/icon.png",
        "iconSmall": "images/iconSmall.png"
    },
    "type": "REST",
    "lang": {
        "en-US": {
            "name": constants.name,
            "description": "This is a test custom activity"
        }
    },
    "arguments": {
        "execute": {
            "inArguments":[
                {
                    "contactKey": "{{Contact.Key}}",
                    "email": "{{Contact.Default.Email}}",
                    "value": "{{Contact.Default}}",
                    "valueViaAttributes": "{{Contact.Attributes.Default.Email}}",
                    "valueViaAttributess": "{{Contact.Attributes.Email}}"
                }
            ],
            "outArguments": [
            ],
            "url": constants.base + "/et/execute",
            "verb": "POST",
            "body": "",
            "header": "",
            "format": "json",
            "useJwt": false,
            "timeout": 10000
        }
    },
    "configurationArguments": {
        "applicationExtensionKey": "2c5211ec-032c-4407-b8f0-b4d4c12696b8",
        "defaults": {
            "method": "POST",
            "format": "JSON"
        },
        "save": {
                "url": constants.base + "/et/save/",
            "body": "",
            "verb": "POST",
            "useJwt": false
        },
        "publish": {
                "url": constants.base + "/et/publish/",
            "verb": "POST",
            "body": "",
            "useJwt": false
        },
        "validate": {
            "url": constants.base + "/et/validate/",
        "verb": "POST",
        "body": "",
        "useJwt": false
    }
},
"edit": {
    "url": constants.base + "/",
    "height": 400,
    "width": 500
}
}
