export default interface Event {
  name: string
  title: string
  link: string
  date: Date | string 
  abstract: string
  type: string
  blogpost?: string
  subtype?: string
  videolink?: string
  emoji ?: string
}