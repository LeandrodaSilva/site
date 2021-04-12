import errorStyles from '../styles/error.module.css'

export default function Custom500() {
  return (
    <div className={ errorStyles.container }>
      <h1 className={ errorStyles.header }>500 - Server-side error occurred</h1>
    </div>
  )
}
