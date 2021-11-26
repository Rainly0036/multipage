import { useLocation } from 'react-router-dom'

export default function Contact() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")
    return (
        <div>
            <h2>Contact</h2>
            <p>Hey {name} </p>
        </div>
    )
}
