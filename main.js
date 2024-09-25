import { Footer } from './src/components/Footer/Footer'
import Header from './src/components/Header/Header'
import { Selection } from './src/components/Selector/Selector'
import { Skills } from './src/components/Skills/Skills'
import { About } from './src/pages/About/About'
import { Contact } from './src/pages/Contact/Contact'
import { Projects } from './src/pages/Projects/Projects'
import './style.css'

document.body.innerHTML = Header()

About()
Skills()
Selection()
Projects()
Contact()
Footer()
