import verifyFunc from '@/main/index.js'
let main = new verifyFunc();
let obj = {
    a: 51,
    b: '2222',
    c: [1, 2, 5, 3],
    d: [],
    k: {
        a: 1
    },
    j: {
        a: 1,
        b: 2,
        c: 2
    }
};
let ver = {
    b: [{
            required: true,
            message: '输入b',
            type: 'string',
            trigger: 'blur'
        },
        {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
        }
    ],
    a: [{
        required: true,
        type: 'number',
        min: 10,
        max: 200,
        message: 'number'
    }],
    c: [{
        required: true,
        type: "array",
        min: 1,
        max: 6,
        message: 'array'
    }],
    j: [{
        required: true,
        min: 1,
        max: 2,
        message: '12'
    }],
    k: [{
        required: true,
        message: '输入k',
        validator: (val, cb) => {
            cb(new Error("111"))
        },
        trigger: 'blur'
    }]
};
main.init(obj, ver)
main.validate((status) => {
    alert(JSON.stringify(status))
    console.log(status)
})