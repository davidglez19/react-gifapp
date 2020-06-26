import React , {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
   
    const [categories, setCategories] = useState(['One Punch'])

    // const HandleAdd = () => {
    //     let serie = 'Naruto'
    //     // setCategories([...categories, serie] );
    //     setCategories(categoria => [... categoria, serie] );
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr></hr>
            <ul>
                {
                    categories.map(category => 
                        (<GifGrid 
                            key = {category}
                            category={category}
                        />)
                    )
                }
            </ul>
        </div>
    )
}
