import createRenderer from '../../webpack/createRenderer'
import App from '../App'


export default ({clientStats}) => createRenderer({clientStats, App})
