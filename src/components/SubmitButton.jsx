// Code SubmitButton Component Here

function SubmitButton (){
    
    function handleEnter() {
        console.log('Mouse Entering')
    }

    function handleLeave() {
        console.log('Mouse Exiting')
    }

    return(
        <>
        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Click me</div>
        <button >Submit Password</button>
        </>
    )
}

export default SubmitButton;