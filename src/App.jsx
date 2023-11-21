import { Route } from 'react-router-dom'
import SlideRoutes from 'react-slide-routes';
import { Homepage } from './routes/Homepage'
import { TalentSearch } from './routes/talentSearch'
import './CSSfiles/App.sass'

export default function App(){

    return <div className="App">
            <SlideRoutes duration={1000} timing='ease-in-out'>
                <Route path='' element={<Homepage/>}/>
                <Route path='/talent-search' element={<TalentSearch/>}/>
            </SlideRoutes>
        </div>
}