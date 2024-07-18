export const documentVisibleChange = () => {
  let normalTitle = ''
  let timer = 0
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
      if (timer) {
        clearTimeout(timer)
        document.title = normalTitle
      }
      normalTitle = document.title
      return (document.title = 'ㄒoㄒ网页崩了')
    }
    document.title = "哇去，好了(●'◡'●)"
    timer = setTimeout(() => {
      document.title = normalTitle
    }, 2000)
  })
}
