export function navigate(to: string) {
  if (window.location.pathname !== to) {
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}



