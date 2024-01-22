import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add(404, "/pages/home.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()