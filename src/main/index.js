import {
    objectLen,
    isObject,
    typeOfS,
    getTypeLen,
    getType
} from '@/utils/index.js'
class verify {
    constructor(data, rules) {
        this.data = null
        this.rules = {}
        this.$init(data, rules)
    }
    $init(data, rules) {
        // 开发模式
        if (!data || !objectLen(rules)) {
            console.error('设置的校验数据或规则错误')
            return
        }
        this.data = data
        this.rules = rules
    }
    ruleCallBack (status) {
        // 自定义校验
        return (cb) => { 
            status.message =  cb && cb.message
         }
    }
    verifyTop (obj, val) {
        // 校验第一个规则
        const type = obj.type ? obj.type : getType(val)
        const func = typeOfS[type]
        return !(val && func(val))
    }
    verifyBottom (obj, val) {
        // 校验第二个规则
        const section = obj.min && obj.max && obj.type !== 'date'
        if (!section) return false
        const type = getType(val)
        const len = getTypeLen[type](val)
        const lenSection = (len >= obj.min && len <= obj.max)
        return !lenSection
    }
    check (rules) {
        if (!isObject(rules)) {
            return
        }
        let status = {
            status: false,
            message: '',
            key: ''
        }
        for (let v of Object.keys(rules)) {
            const judge = { ...this.rules[v][0], ...this.rules[v][1] }
            const val = this.data[v]
            if (!!judge.validator) {
                judge.validator(val, this.ruleCallBack(status))
            } else if (judge.required) {
                status.status = this.verifyTop(judge, val) || this.verifyBottom(judge, val)
            } else if (!judge.required && judge.min && judge.max) {
                status.status = val && this.verifyBottom(judge, val)
            }
            if (status.status || status.message) {
                status.key = v
                status.message = status.message ? status.message : judge.message
                return status
            }
        }
        return status
    }
    validate (cb) {
        const status = this.check(this.rules)
        const result = status.status || status.message
        cb({
            result: result,
            key: status.key,
            message: status.message
        })
    }
    addRule (rule) {
        console.log(rule)
    }
}
export default verify