import React, {useState} from 'react';


const Longpulling=()=>{
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');

    return(
        <div className="center">
            <div>
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>

                    <button >Отправить</button>
                </div>
                <div className="messages">
                    {messages.map(mess =>
                        <div className="message" key={mess.id}>
                            {mess.message}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export  default Longpulling;