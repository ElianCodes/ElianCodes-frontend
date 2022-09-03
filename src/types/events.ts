export default interface Event {
  name: string
  title: string
  link: string
  date: Date | any 
  abstract: string
  type: string
  blogpost: string | undefined
}