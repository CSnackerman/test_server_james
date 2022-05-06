import root from './routes/root.js'
import notFound from './routes/notFound.js'
import yomamashouse from './routes/yomamashouse.js'
import fancy from './routes/fancy.js'

const router = (route, res) => {
    switch (route) {
        case '/':               root(res);          return
        case '/fancy':          fancy(res);         return
        case '/yomamashouse':   yomamashouse(res);  return
        default:                notFound(res);      return
    }
}

export default router