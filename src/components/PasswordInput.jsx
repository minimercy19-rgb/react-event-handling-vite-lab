// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange() {
        console.log(`Entering password...`)
    }
    return(
        <>
        <input type="password" name="password" onChange={handleChange} />
        </>
    )
}

export default PasswordInput;