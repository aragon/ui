import { format } from 'date-fns'

export const formatHtmlDatetime = date =>
  format(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
