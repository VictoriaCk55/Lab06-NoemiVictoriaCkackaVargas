import React, { useEffect, useState } from 'react';

const URL_RANDOM_AVATAR = 'https://api.dicebear.com/9.x/pixel-art/svg';

const Card: React.FC = () => {
    
    const [avatarUrl, setAvatarUrl] = useState<string>('');

    return(
        <div >
            <div style={{
                
            width: '350px',
            height: '400px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)'
        }}>
         <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Random Image</h1>
            <img src="https://api.dicebear.com/9.x/pixel-art/svg" alt="Avatar" style={{
                width: '150px',
                height: '150px',
                borderRadius: '20%',
                marginBottom: '16px'
            }} />
             <hr style={{ width: '100%', margin: '5px 0' }} />
             <h3 style={{ fontFamily: 'Arial, sans-serif', textAlign: 'left', fontStyle: 'italic' }}>Descripcion:</h3>
            <p style={{fontFamily: 'Arial, sans-serif', textAlign: 'left',fontStyle: 'italic'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum itaque quaerat optio</p>
        </div>
     </div>
    )
};

export default Card;