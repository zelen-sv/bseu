export default function scrollToTop (self) {
  if(process.client){
    self.$scrollTo('#__nuxt', 0, {force: true})
  }
}
