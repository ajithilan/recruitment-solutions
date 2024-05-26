
export const Rules = ()=>{

    return <div className="rules_container">
        {
            <ul>
                <li>Company name cannot be empty</li>
                <li>Email is required</li>
                <li>Password must contain atleast one number, one uppercase, one special character and a minimum of 8 characters</li>
            </ul>
        }
    </div>
}