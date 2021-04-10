import utilStyles from '../styles/utils.module.css'
import errorStyles from '../styles/error.module.css'

export default function Custom404() {
  return (
    <div className={ errorStyles.container }>
        <h1 className={ errorStyles.header }>404 - Page Not Found</h1>
    </div>
  )
}