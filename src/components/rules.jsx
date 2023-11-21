import { useEffect } from "react"

export const Rules = (props)=>{

    useEffect(()=>{
        const rules = document.querySelector('.rules_container');
        const auth = document.querySelector('.auth_comp');
        rules.classList.toggle('login_rule');
        auth.style.transform = rules.classList.contains('login_rule') ? 'translateX(200px)' : 'translateX(0px)';
    },[props.loginSubmit])

    return <div className="rules_container">{
        <ul>
            <li>Company name cannot be empty</li>
            <li>Email is required</li>
            <li>Password must contain atleast one number, one uppercase and one lowercase letter, one special character and minimum 8 characters</li>
        </ul>
    }
    </div>
}