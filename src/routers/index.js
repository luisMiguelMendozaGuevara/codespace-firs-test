import {Router} from "express"
const router = Router()

router.get("/", (req,res) => res.render("index",{title: "first website with node"}))

router.get("/about", (req,res) => res.render("about",{title: "about me"}))

router.get("/contact", (req,res) => res.render("contact",{title: "contact to me"}))

export default router