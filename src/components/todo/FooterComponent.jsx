import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

function FooterComponent() {

    const authContext = useContextntext(AuthContextext)

    return (
        <footer className="footer">
            <div className='container'>

                Your Footer

            </div>

        </footer>
    )
}

export default FooterComponent