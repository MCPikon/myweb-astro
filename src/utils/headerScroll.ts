export const initHeaderScroll = () => {
  let cleanupHeader = () => {}

  const ensureSentinel = () => {
    const existing = document.querySelector('[data-header-sentinel]')
    if (existing) return existing as HTMLElement

    const sentinel = document.createElement('span')
    sentinel.dataset.headerSentinel = 'true'
    sentinel.setAttribute('aria-hidden', 'true')
    sentinel.style.position = 'absolute'
    sentinel.style.top = '0'
    sentinel.style.left = '0'
    sentinel.style.width = '1px'
    sentinel.style.height = '1px'
    sentinel.style.pointerEvents = 'none'
    sentinel.style.opacity = '0'
    document.body.prepend(sentinel)
    return sentinel
  }

  const setupHeader = () => {
    const headerSection = document.querySelector('.header-section')
    const navContent = document.querySelector('.nav-content')

    if (!headerSection || !navContent) return

    cleanupHeader()

    const sentinel = ensureSentinel()
    let lastScrolledState = false

    const updateState = (isScrolled: boolean) => {
      if (isScrolled === lastScrolledState) return

      lastScrolledState = isScrolled
      headerSection.classList.toggle('scrolled', isScrolled)
      navContent.classList.toggle('scrolled', isScrolled)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        updateState(!entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(sentinel)

    cleanupHeader = () => {
      observer.disconnect()
    }
  }

  setupHeader()
  document.addEventListener('astro:after-swap', setupHeader)

  return () => {
    cleanupHeader()
    document.removeEventListener('astro:after-swap', setupHeader)
  }
}
