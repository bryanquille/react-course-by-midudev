export const goTopPage = () => {
  document.documentElement.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}
