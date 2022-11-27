import { Suspense } from 'react'
import { BrowserRouter, Navigate } from 'react-router-dom'
import { Routes, Route, NavLink} from 'react-router-dom'
import { routes } from './routes'

import logo from '../logo.svg'


const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={ logo } alt='React Logo' />
                    <ul>
                        {
                            routes.map( ({ to, name }) => {
                                return <li key={ to }>
                                    <NavLink 
                                        to={ to } 
                                        className={ ({isActive}) => isActive ? 'nav-active' : '' }
                                    >{ name }</NavLink>
                                </li>
                            })
                        }
                    </ul>
                </nav>

                <Routes>
                    {routes.map( ({ to, path, component: Component })  => {
                        return <Route
                                key={ to }
                                path={ path }
                                element={ <Component />}
                            />
                    })}
                    { /*ruta alternativa*/ }
                    <Route path='/*' element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
