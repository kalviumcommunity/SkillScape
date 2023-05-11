import React from 'react'
import { MutatingDots } from 'react-loader-spinner';
import name from './imagesw/name.png'

function SkillScapeSplash() {
  return (
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center', marginTop:'20%',width:'2%',marginLeft:'50%'}} className='loader'>
            <div>
                <img alt='name' src={name}></img>
            </div>
            <div>
            <MutatingDots 
            height="100"
            width="100"
            color="#3E9ECA"
            secondaryColor= '#061b28'
            radius='12.5'
            ariaLabel="mutating-dots-loading" 
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
            </div>

    </div>
  )
}

export default SkillScapeSplash