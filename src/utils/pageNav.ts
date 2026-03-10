import { goBack } from "@/utils/nav"

let dropdownHideTimeout: number | undefined
let cleanupPageNav: (() => void) | null = null

export const initPageNav = () => {
  cleanupPageNav?.()

  const backBtn = document.getElementById("back-button")
  const menuBtn = document.getElementById("page-menu-button")
  const menuContent = document.getElementById("page-menu-item")
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link")
  let isMenuOpen = false

  if (!backBtn || !menuBtn || !menuContent) return

  const setMenuOpen = (open: boolean) => {
    if (open === isMenuOpen) return

    isMenuOpen = open

    if (isMenuOpen) {
      if (dropdownHideTimeout) {
        window.clearTimeout(dropdownHideTimeout)
        dropdownHideTimeout = undefined
      }

      menuContent.classList.remove("hidden")
      requestAnimationFrame(() => menuContent.classList.add("page-nav-dropdown--visible"))
      return
    }

    menuContent.classList.remove("page-nav-dropdown--visible")
    dropdownHideTimeout = window.setTimeout(() => {
      menuContent.classList.add("hidden")
      dropdownHideTimeout = undefined
    }, 250)
  }

  setMenuOpen(false)

  const handleBackClick = (e: MouseEvent) => {
    e.stopPropagation()
    goBack()
  }

  const handleMenuClick = (e: MouseEvent) => {
    e.stopPropagation()
    setMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target

    if (isMenuOpen && target instanceof Node && !menuBtn.contains(target) && !menuContent.contains(target)) {
      setMenuOpen(false)
    }
  }

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return

    if (isMenuOpen) {
      setMenuOpen(false)
      return
    }

    goBack()
  }

  backBtn.addEventListener("click", handleBackClick)
  menuBtn.addEventListener("click", handleMenuClick)
  navLinks.forEach((link) => link.addEventListener("click", handleLinkClick))
  document.addEventListener("click", handleOutsideClick)
  document.addEventListener("keydown", handleEscapeKey)

  cleanupPageNav = () => {
    backBtn.removeEventListener("click", handleBackClick)
    menuBtn.removeEventListener("click", handleMenuClick)
    navLinks.forEach((link) => link.removeEventListener("click", handleLinkClick))
    document.removeEventListener("click", handleOutsideClick)
    document.removeEventListener("keydown", handleEscapeKey)

    if (dropdownHideTimeout) {
      window.clearTimeout(dropdownHideTimeout)
      dropdownHideTimeout = undefined
    }
  }
}
