export const initHeaderScroll = () => {
  let cleanupHeader = () => {}

  const setupHeader = () => {
    const headerSection = document.querySelector('.header-section')
    const navContent = document.querySelector('.nav-content')

    if (!headerSection || !navContent) return

    cleanupHeader()

    let lastScrolledState = window.scrollY > 0
    let ticking = false

    const syncScrolledState = () => {
      const isScrolled = window.scrollY > 0

      if (isScrolled === lastScrolledState) return

      lastScrolledState = isScrolled
      headerSection.classList.toggle('scrolled', isScrolled)
      navContent.classList.toggle('scrolled', isScrolled)
    }

    headerSection.classList.toggle('scrolled', lastScrolledState)
    navContent.classList.toggle('scrolled', lastScrolledState)

    const handleScroll = () => {
      if (ticking) return

      ticking = true

      window.requestAnimationFrame(() => {
        syncScrolledState()
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    cleanupHeader = () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }

  setupHeader()
  document.addEventListener('astro:after-swap', setupHeader)

  return () => {
    cleanupHeader()
    document.removeEventListener('astro:after-swap', setupHeader)
  }
}
