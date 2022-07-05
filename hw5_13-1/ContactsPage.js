import React, {useState} from 'react';

function ContactsPage(props) {
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        surname: "",
    })

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        if(!user.name.trim() || !user.lastName.trim() || !user.surname.trim()) {
            alert("Заполните все поля");
            return
        }else{
            e.target.name.value='';
            e.target.lastName.value='';
            e.target.surname.value='';
            alert("Данные успешно отправлены"); 
        }

        console.log(user)
    }

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={changeInput}
                />

                <input
                    type="text"
                    placeholder="surname"
                    name="surname"
                    value={user.surname}
                    onChange={changeInput}
                />
                

                <button type="submit">submit</button>
            </form>

        </>
    );
    
}

export default ContactsPage;