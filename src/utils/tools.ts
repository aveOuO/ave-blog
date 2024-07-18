export const documentVisibleChange = () => {
  const normalTitle = document.title
  const BORKEN_TITLE = 'ㄒoㄒ网页崩了'
  let timer = 0
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
      if (timer) {
        clearTimeout(timer)
      }
      return (document.title = BORKEN_TITLE)
    }
    if (document.title !== BORKEN_TITLE) return
    document.title = "哇去，好了(●'◡'●)"
    timer = setTimeout(() => {
      document.title = normalTitle
    }, 2000)
  })
}
