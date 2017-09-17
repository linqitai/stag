/*  说明：
 *  插件文件：utils.js
 *  作者：林祺泰  QQ：514917919
 * */
// 获取完整的时间
export const getFullDate = (t) => {
  var time = new Date(t)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
}
export const currency = (v) => {
  var regStrs = [
    ['^0(\\d+)$', '$1'], // 禁止录入整数部分两位以上，但首位为0
    ['[^\\d\\.]+$', ''], // 禁止录入任何非数字和点
    ['\\.(\\d?)\\.+', '.$1'], // 禁止录入两个以上的点
    ['^(\\d+\\.\\d{2}).+', '$1'] // 禁止录入小数点后两位以上
  ]
  let i
  for (i = 0; i < regStrs.length; i++) {
    let reg = new RegExp(regStrs[i][0])
    v = v.replace(reg, regStrs[i][1])
  }
  console.log('v:' + v)
  return v
}
// 字符串首尾去空格
export const trim = (str) => {
  return str.replace(/(^\s+)|(\s+$)/g, '')
}
export const convertBase64UrlToBlob = (urlData) => {
  var bytes = window.atob(urlData.split(',')[1])
  var ab = new ArrayBuffer(bytes.length)
  var ia = new Uint8Array(ab)
  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  return new Blob([ab], {
    type: 'image/png'
  })
}
// 验证手机号码
export const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('手机号不能为空'))
  } else {
    if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(value)) {
      callback()
    } else {
      return callback(new Error('手机号不合法'))
    }
  }
}
export const addEvent = function (obj, type, fn) {
  if (obj.addEventListener) obj.addEventListener(type, fn, false)
  else if (obj.attachEvent) {
    obj['e' + type + fn] = fn
    obj.attachEvent('on' + type,
    function() {
      obj['e' + type + fn]()
    })
  }
}
export default {
  install: function (Vue, options) {
    // 如果数据是空，就用isNull代替
    Vue.filter('isNull', function (value) {
      if (value === null || value === '') {
        return '---'
      } else {
        return value
      }
    })
    // 设置文本显示为禁用还是启用 （0：禁用 1:启用）
    Vue.filter('status', function (value) {
      if (value === 0) {
        return '禁用'
      } else if (value === 1) {
        return '启用'
      } else {
        return '未知'
      }
    })
    // 设置禁用还是启用按钮的文本
    Vue.filter('reverseStatus', function (value) {
      if (value === 0) {
        return '启用'
      } else if (value === 1) {
        return '禁用'
      }
    })
    // 角色过滤 角色(0:超级管理员 1:管理员)
    Vue.filter('role', function (value) {
      if (value === 0) {
        return '超级管理员'
      } else if (value === 1) {
        return '管理员'
      }
    })
    // 管理员状态( 0:禁用 1:启用),点击禁用,0,点击启用,1
    Vue.filter('adminerStatus', function (value) {
      if (value === 0) {
        return '禁用'
      } else if (value === 1) {
        return '启用'
      }
    })
    // 设置禁用还是启用按钮的文本
    Vue.filter('filterData', function (value) {
      if (value === 0) {
        return '启用'
      } else if (value === 1) {
        return '禁用'
      }
    })
  }
}
