import Auth from './pages/Auth'
import PetsList from './pages/PetsPage'
import PetPage from './pages/PetPage'
import { PETS_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, CREATE_ROUTE, MAIN_ROUTE, CATS_ROUTE, DOGS_ROUTE } from './utils/constants'
import CreatePet from './pages/CreatePet'
import Main from './pages/Main'

export const authRoutes = [ 
    {
        path: PETS_ROUTE + '/:id',
        element: <PetPage />
    },
    {
        path: CREATE_ROUTE,
        element: <CreatePet />
    }
]

export const publicRoutes = [ 
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTER_ROUTE,
        element: <Auth />
    },
    {
        path: MAIN_ROUTE,
        element: <Main />
    },
    {
        path: PETS_ROUTE,
        element: <PetsList />
    },
    {
        path: CATS_ROUTE,
        element: <PetsList />
    },
    {
        path: DOGS_ROUTE,
        element: <PetsList />
    }
]