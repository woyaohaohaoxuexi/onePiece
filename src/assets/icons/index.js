const req = require.context('./svg', false, /\.svg$/)
const icons = req.keys().map(req)  
// console.log('导出的 svg 文件：', icons)
// export default icons


// const requireAll = requireContext => requireContext.keys().map(requireContext)

// const req = require.context('./svg', false, /\.svg$/)

// //获取icon的fileName
// const icons = req.keys().map(icons => icons.replace(/^\.\/(.*)\.\w+$/, '$1'), {})

// requireAll(req)

export default icons